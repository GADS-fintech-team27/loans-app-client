import { Investor, Business } from './../types/app'
import axios from 'axios'
import {
  getAccessorType,
  getterTree,
  mutationTree,
  actionTree,
} from 'typed-vuex'

import { UserProfile } from '~/types/app'
export const state = () => ({
  user: {
    firstName: '',
    lastname: '',
    emailAddress: '',
  } as UserProfile,
  investors: [] as Array<Investor>,
  businesses: [] as Array<Business>,
  baseUrl: 'http://localhost:3000',
})

export const getters = getterTree(state, {
  emailAddress: (state) => state.user.emailAddress,
})

export const mutations = mutationTree(state, {
  setInvestors(state, investors: Array<Investor>) {
    state.investors = [...investors]
  },

  setBusiness(state, businesses: Array<Business>) {
    state.businesses = [...businesses]
  },
})

export const actions = actionTree(
  { state, mutations },
  {
    async nuxtServerInit({ state, commit }) {
      try {
        const investorsResponse = await this.$axios.$get(
          `http://localhost:3000/api/get-investors`
        )
        commit('setInvestors', investorsResponse.data)
      } catch (error) {
        console.log('error while loading investors')
      }

      try {
        const businessesResponse = await this.$axios.$get(
          `http://localhost:3000/api/get-businesses`
        )
        commit('setBusiness', businessesResponse.data)
      } catch (error) {
        console.log('error while loading businesses')
      }
    },

    async login({ state, commit }, payload) {
      try {
        await this.$axios.$post(`${state.baseUrl}/api/auth/sign-in`, {
          ...payload,
        })
        this.$router.push('/app')
      } catch (e) {}
    },

    async register({ state, commit }, payload) {
      console.log('calling the register end point')
      try {
        await this.$axios.$post(`${state.baseUrl}/api/auth/sign-up`, {
          payload,
        })
      } catch (e) {}
    },
  }
)

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  modules: {},
})

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
  registrationError: {},
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
  setRegistrationError(state, payload) {
    state.registrationError = { ...payload }
  },
})

export const actions = actionTree(
  { state, mutations },
  {
    async nuxtServerInit({ state, commit }) {
      try {
        const investorsResponse = await this.$axios.$get(
          `${state.baseUrl}/api/get-investors`
        )
        commit('setInvestors', investorsResponse.data)
      } catch (error) {
        console.log('error while loading investors')
      }

      try {
        const businessesResponse = await this.$axios.$get(
          `${state.baseUrl}/api/get-businesses`
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
      } catch (e) {
        commit('setRegistrationError', { erorMessage: 'An error has occured' })
      }
    },

    async register({ state, commit }, payload) {
      try {
        await this.$axios.$post(`${state.baseUrl}/api/auth/sign-up`, {
          ...payload,
        })
        this.$router.push('/app/auth')
      } catch (e) {
        commit('setRegistrationError', { erorMessage: 'An error has occured' })
      }
    },

    async registerBusiness({ state, commit }, payload) {
      try {
        await this.$axios.$post(`${state.baseUrl}/api/create-business`, {
          ...payload,
        })
      } catch (e) {
        commit('setRegistrationError', { erorMessage: 'An error has occured' })
      }
    },

    async registerInvestor({ state, commit }, payload) {
      try {
        console.log(
          'calling an endpoint for registering the investor in the store'
        )
        console.log(payload)
        await this.$axios.$post(`${state.baseUrl}/api/create-investor`, {
          ...payload,
        })
      } catch (e) {
        commit('setRegistrationError', { erorMessage: 'An error has occured' })
      }
    },
  }
)

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  modules: {},
})

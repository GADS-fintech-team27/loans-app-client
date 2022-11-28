import {
  getAccessorType,
  getterTree,
  mutationTree,
  actionTree,
} from 'typed-vuex'

export const state = () => ({})

export const getters = getterTree(state, {})

export const mutations = mutationTree(state, {})

export const actions = actionTree(
  { state, mutations },
  {
    nuxtServerInit() {},
    nuxtClientInit() {},
  }
)

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  modules: {},
})

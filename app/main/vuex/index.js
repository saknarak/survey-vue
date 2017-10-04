import Vue from 'vue'
import moment from 'moment'

import types from './types'

const state = {
  lang: 'th',
  sessionId: '',
  user: null,
  baseTs: null,
  diffTs: 0,
  ready: false,
  toast: {},
  modal: {},
  isLoading: false,
  isMobile: true,
  sidePanel: true,
  modules: {},
  selectedModule: 'lucy',
  sideMenus: [],
}

const mutations = {
  [types.mutations.setBaseTs](state, ts) {
    state.baseTs = moment(ts)
    state.diff = moment().diff(ts, 's')
  },
  [types.mutations.setLang](state, newLang) {
    state.lang = newLang
  },
  [types.mutations.setSession](state, sessionData) {
    if (sessionData && sessionData.valid) {
      state.user = sessionData.user
      state.sessionId = sessionData.sessionId
      state.ready = true
    } else {
      state.user = null
      state.sessionId = ''
      state.ready = false
    }
  },
  [types.mutations.setProfile](state, data) {
    state.user = data
  },
  [types.mutations.setToast](state, toast) {
    state.toast = toast
  },
  [types.mutations.setModal](state, modal) {
    state.modal = modal
  },
  [types.mutations.setIsLoading](state, isLoading) {
    state.isLoading = isLoading
  },
  [types.mutations.setIsMobile](state, isMobile) {
    state.isMobile = isMobile
  },
  [types.mutations.setSidePanel](state, show) {
    state.sidePanel = show
  },
  [types.mutations.toggleSidePanel](state) {
    state.sidePanel = !state.sidePanel
  },
  [types.mutations.setModules](state, modules) {
    state.modules = modules
  },
  [types.mutations.setSelectedModule](state, selectedModule) {
    state.selectedModule = selectedModule
  },
  [types.mutations.setSideMenus](state, sideMenus) {
    state.sideMenus = sideMenus
  },
}

const actions = {
  [types.actions.setLang]: ({ commit }, newLang) => {
    commit(types.mutations.setLang, newLang)
    Vue.config.lang = newLang
  },
  [types.actions.setSession]: ({ commit }, sessionData) => {
    commit(types.mutations.setSession, sessionData)
  },
  [types.actions.setServerTs]: ({ commit }, ts) => {
    if (!ts) {
      // return api.fetchServerTs().then((serverTs) => {
      //   commit(types.mutations.setBaseTs, serverTs)
      // })
    } else {
      commit(types.mutations.setBaseTs, ts)
    }
  },
  [types.actions.setProfile]: ({ commit }, data) => {
    commit(types.mutations.setProfile, data)
  },
  [types.actions.showToast]: (context, toast) => {
    context.commit(types.mutations.setToast, toast)
  },
  [types.actions.hideToast]: ({ commit }) => {
    commit(types.mutations.setToast, { show: false })
  },
  [types.actions.setModal]: (context, modal) => {
    context.commit(types.mutations.setModal, modal)
  },
  [types.actions.setIsLoading]: ({ commit }, isLoading) => {
    commit(types.mutations.setIsLoading, isLoading)
  },
  [types.actions.setIsMobile]: ({ commit }, isMobile) => {
    commit(types.mutations.setIsMobile, isMobile)
  },
  [types.actions.setSidePanel]: ({ commit }, show) => {
    commit(types.mutations.setSidePanel, show)
  },
  [types.actions.toggleSidePanel]: ({ commit }) => {
    commit(types.mutations.toggleSidePanel)
  },
  [types.actions.setModules]: ({ commit }, modules) => {
    commit(types.mutations.setModules, modules)
  },
  [types.actions.setSelectedModule]: ({ commit }, selectedModule) => {
    commit(types.mutations.setSelectedModule, selectedModule)
  },
  [types.actions.setSideMenus]: ({ commit }, sideMenus) => {
    commit(types.mutations.setSideMenus, sideMenus)
  },
}

const getters = {
  [types.getters.lang]: state => state.lang,
  [types.getters.sessionId]: state => state.sessionId,
  [types.getters.user]: state => state.user,
  [types.getters.diffTs]: state => state.diff,
  [types.getters.toast]: state => state.toast,
  [types.getters.modal]: state => state.modal,
  [types.getters.isLoading]: state => state.isLoading,
  [types.getters.isMobile]: state => state.isMobile,
  [types.getters.sidePanel]: state => state.sidePanel,
  [types.getters.modules]: state => state.modules,
  [types.getters.selectedModule]: state => state.selectedModule,
  [types.getters.sideMenus]: state => state.sideMenus,
}

export default {
  state,
  mutations,
  actions,
  getters,
}

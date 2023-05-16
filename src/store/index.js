import { createStore } from "vuex"
import auth from '@/store/modules/auth'
import article from '@/store/modules/article'

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    article
  }
})
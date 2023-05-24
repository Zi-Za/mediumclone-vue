const state = {
  isLoading: false,
}

const mutations = {
  ['foo/getArticleStart'](state) {
    console.log('getArticleStart in bar')
    state.isLoading = true
  },
}

export default {
  mutations,
  state,
  namespaced: true,
}

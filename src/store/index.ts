import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    posts: []
  },
  getters: {
    get_posts(state) {
      return state.posts
    },
  },
  mutations: {
    set_posts: (state, posts) => {
      state.posts = posts
    },
  },
  actions: {
    get_posts_from_api({commit}) {
      return axios(`https://jsonplaceholder.typicode.com/posts/`, {
        method: 'GET',
      })
          .then((response) => {
            commit('set_posts', response.data)
          })
    },
  },
})

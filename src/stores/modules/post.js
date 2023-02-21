export default {
  namespaced: true,
  state : JSON.parse(localStorage.getItem('posts')) || {
      posts: [],
  },
  getters: {
      getPosts: state => {
         state = JSON.parse(localStorage.getItem('posts'));
         return state?.posts || [];
      }
  },
  mutations: {
      addPost(state, {username, detail, date}) {
          state.posts.push({username: username, detail: detail, date: new Date()});
          localStorage.setItem('posts', JSON.stringify(state));
      },
  },
}
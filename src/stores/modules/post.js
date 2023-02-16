export default {
    namespaced: true,
    state: {
        count: 0,
    },
    mutations: {
        increment(state, payload) {
          state.count += payload;
        },
    },
    actions: {
        incrementAsync({ commit }, payload) {
          setTimeout(() => {
            commit('increment', payload);
          }, 1000);
        },
    },
}
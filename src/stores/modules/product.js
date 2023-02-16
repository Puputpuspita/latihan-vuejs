export default {
    namespaced: true,
    state: {
        product: [
          { name: 'Apples', price: 100 },
          { name: 'Bananas', price: 200 },
          { name: 'Oranges', price: 150 },
        ],
    },
    getters: {
        expensiveProducts: state => {
            return state.product.filter(product => product.price >= 200);
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
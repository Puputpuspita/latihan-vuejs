export default {
    namespaced: true,
    state: {
        name: '',
        // users: []
    },
    getters: {
        getUserNames: state => {
            state = JSON.parse(localStorage.getItem('user'));
            return state.name;
        }
    },
    mutations: {
        addUser(state, name) {
            // state.users.push({name: name});
            state.name = name;
                    
            localStorage.setItem('user', JSON.stringify(state));
            localStorage.setItem('authenticated', true);
        },
        // resetUserList(state) {
        //     state.users = [];
        // }
    },
}
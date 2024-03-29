import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
    state() {
        return {
            name: '',
            email: ''
        };
    },
    mutations: {
        setUserData(state, { name, email }) {
            state.name = name;
            state.email = email;
        },
        reset(state) {
            state.name = '';
            state.email = '';
        }
    },
    plugins: [createPersistedState()]
});

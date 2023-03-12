import {createStore} from 'vuex'
import axios from 'axios'
import router from '@/router';

const store = createStore({
    modules: {},
    state() {
        return {
            API_URL: 'http://44.198.175.50:8000/api/tutor-list',
            authorization: {auth: {username:'tutor', password:'tutor123'}},
            data: [],
            allData: [],
            updateState: false
        }
    },
    actions: {
        loadQuestions({state, commit}){
            axios.get(state.API_URL, state.authorization)
            .then((response) => {
                commit('loadQuestions', response.data);
            })
        },
        postData({state}, payload){
            axios.post(state.API_URL, payload, state.authorization)
            .then(() => {
                this.dispatch('loadQuestions');
                router.push('/tutorials/');
            })
        },
        updateData({state}, payload){
            axios.put(state.API_URL+'/'+`${payload.id}`, payload.data)
            .then(console.log('Updated!!!!!!'))
        },
        deleteQuestion({state}, payload){
            const idx = state.data.findIndex((list) => list.id === payload.id);
            axios.delete(state.API_URL+'/'+`${payload.id}`)
            .then(() => {
                state.data.splice(idx,1);
            })
        },
        filterBasedOnCategories({state}, payload){
            const id = payload.id;
            console.log(state.data, id)
        }
    },
    mutations: {
        loadQuestions(state, data){
            state.data = data;
            state.allData = data;
        },
        filterData(state, payload){
            state.data = payload;
        }
    },
    getters: {
        getData(state){return state.data;},
        getAllData(state){return state.allData}
    },
});

export default store;
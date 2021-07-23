import Vue from 'vue'
import Vuex from 'vuex'
import { fetchNewsList, fetchJobsList, fetchAskList } from '../api/index.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        news : [],
        jobs : [],
        ask : []
    },
    getters : {
        fetchedAsk(state) {
            return state.ask;
        }
    },
    mutations : {
        SET_NEWS(state, news){
            state.news = news;
        },
        SET_JOBS(state, jobs){
            state.jobs = jobs
        },
        SET_ASK(state, ask){
            state.ask = ask
        }
    },
    actions : {
        FETCH_NEWS({commit}){
            fetchNewsList()
                .then(({data}) => {
                    commit('SET_NEWS', data) 
                })
                .catch(function(error) {
                    console.log(error);
            })
        },
        FETCH_JOBS(context){
            fetchJobsList()
                .then(response => {
                    context.commit('SET_JOBS', response.data)
                })
                .catch(error => console.log(error));
        },
        FETCH_ASK({commit}){
            fetchAskList()
                .then(({data}) => {
                    commit('SET_ASK', data) 
                })
                .catch( error => {
                    console.log(error);
                })
        }
    }
})
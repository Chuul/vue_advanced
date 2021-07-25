import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchItemInfo } from '../api/index.js'

export default {
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
        },
        FETCH_USER({commit}, name){
            fetchUserInfo(name)
                .then( ({data}) => {
                    commit('SET_USER', data);
                })
                .catch( error => {
                    console.log(error);
                })
        },
        FETCH_ITEM({commit}, item){
            fetchItemInfo(item)
                .then( ({data}) => {
                    commit('SET_ITEM', data);
                })
                .catch( error => {
                    console.log(error);
                })
        }
    }
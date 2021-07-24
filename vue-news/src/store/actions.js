import { fetchNewsList, fetchJobsList, fetchAskList } from '../api/index.js'

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
        }
    }
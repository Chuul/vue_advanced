import { 
    fetchNewsList, 
    fetchJobsList, 
    fetchAskList, 
    fetchList,
    fetchUserInfo, 
    fetchItemInfo,
} from '../api/index.js'

export default {
        FETCH_NEWS(context){
            return fetchNewsList()
                .then( response => {
                    context.commit('SET_NEWS', response.data);
                    return response;
                })
                .catch(function(error) {
                    console.log(error);
            })
        },
        FETCH_JOBS(context){
            return fetchJobsList()
                .then(response => {
                    context.commit('SET_JOBS', response.data)
                })
                .catch(error => console.log(error));
        },
        FETCH_ASK({commit}){
            return fetchAskList()
                .then(({data}) => {
                    commit('SET_ASK', data) 
                })
                .catch( error => {
                    console.log(error);
                })
        },
        FETCH_USER({commit}, name){
            return fetchUserInfo(name)
                .then( ({data}) => {
                    commit('SET_USER', data);
                })
                .catch( error => {
                    console.log(error);
                })
        },
        FETCH_ITEM({commit}, item){
            return fetchItemInfo(item)
                .then( ({data}) => {
                    commit('SET_ITEM', data);
                })
                .catch( error => {
                    console.log(error);
                })
        },
        FETCH_LIST( {commit}, pageName) {
            return fetchList(pageName)
                .then( response => {
                    console.log(4)
                    commit('SET_LIST', response.data)
                    return response;
                })
                .catch( error => console.log(error))
        }
    }
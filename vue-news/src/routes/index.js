import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'
// import createListView from '../views/CreateListView.js'
import bus from '../utils/bus.js'
import { store } from '../store/index.js'

Vue.use(VueRouter);

// 라우터와 관련된 정보들을 정리하는 객체
export const router = new VueRouter({
    // mode : 'history' -> url주소에 '#' 없애기
    mode : 'history',
    routes : [
        {
            path : '/',
            redirect : '/news'
        },
        {
            path : '/news',
            name : 'news',
            component : NewsView,
            // component : createListView('NewsView')
            beforeEnter: (to, from, next) => {
                //test부분
                // console.log('to', to);
                // console.log('from', from);
                // console.log('next', next);
                // next()
                bus.$emit('start:spinner'); 
                store.dispatch('FETCH_LIST', to.name)
                // store.dispatch('FETCH_LIST', this.$route.name)
                // console.log(to)를 통해 바꿀 방법을 찾아보자
                    .then( () => next() )
                    .catch( (error) => {
                        console.log(error);
                    })
            }
        },
        {
            path : '/ask',
            name : 'ask',
            component : AskView,
            // component : createListView('AskView')
            beforeEnter : (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                    .then( () => {
                        // bus.$emit('end:spinner');
                        // 다른 방법! mounted로 해결
                        next();
                    })
                    .catch( (error) => {
                        console.log(error);
                    })
            }
        },
        {
            path : '/jobs',
            name : 'jobs',
            component : JobsView,
            // component : createListView('JobsView')
            beforeEnter : (to, from, next ) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                    .then( () => next() )
                    .catch( (error) => {
                        console.log(error);
                    })
            }
        },
        {
            path : '/user/:id',
            component : UserView
        },
        {
            path : '/item/:id',
            component : ItemView
        }
    ]
})

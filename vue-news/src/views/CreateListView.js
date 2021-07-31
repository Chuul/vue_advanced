// 하이오더 컴포넌트!!!!
// routes의 index.js에서 나눠져있던 컴포넌트들을 component: createListView(' ')로 나눠서 밑에 name에 전달해준다. 
// ***component 구조 꼭 보자!!!

import ListView from './ListView.vue'
import bus from '../utils/bus.js'

export default function createListView(name) {
    return {
        // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
        name : name,
        created(){
            bus.$emit('start:spinner');
            this.$store.dispatch('FETCH_LIST', this.$route.name)
                .then( () => {
                    console.log('fetched');
                    bus.$emit('end:spinner');  
                })
                .catch( (error) => {
                    console.log(error);
                });
        },
        render(createElement) {
            return createElement(ListView);
        }
    }    
}
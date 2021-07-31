<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
import ListMixin from '../mixins/ListMixin.js'

export default {
  components : {
    ListItem
  },
  mixins : [ListMixin]
  // mounted : 인스턴스가 화면에 불러와서 나타냈을 때 완료된 시점에 불러주는 라이프사이클 훅
}
</script>

<style>

</style>
// NewsView, JobsView, AskView를 하나로 묶은 ListItem에서 받아온 걸 뿌려주는 역할하는 컴포넌트
// CreateListView.vue에서 created 사용해서 생성

<template>
  <div>
      <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'

export default {
  components : {
    ListItem
  }
}
</script>

<style>

</style>
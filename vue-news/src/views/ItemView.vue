<template>
  <div>
      <section>
          <user-profile :info="fetchedItem">
                <div slot="username">{{ fetchedItem.user }}</div>
                <router-link v-bind:to="`/user/${fetchedItem.user}`">
                    {{ fetchedItem.user }}
                </router-link>
                <template slot="time">{{ 'Posted ' + fetchedItem.time_ago }}</template>
          </user-profile>
      </section>
      <section>
          <h2> {{ fetchedItem.title }}</h2>
      </section>
      <section>
          <!-- 질문 댓글 -->
          <div v-html="fetchedItem.content"></div>
      </section>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue'
import { mapGetters } from 'vuex'

export default {
    components : {
        UserProfile
    },
    computed : {
        ...mapGetters(['fetchedItem'])
    },
    created() {
        const itemId = this.$route.params.id;
        this.$store.dispatch('FETCH_ITEM', itemId)
    }
}
</script>

<style>

</style>
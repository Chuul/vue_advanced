<template>
  <div>
      <p> id : {{ itemInfo.id }} </p>
  </div>
</template>

<script>
export default {
    computed : {
        itemInfo() {
            return this.$store.state.item;
        }
    },
    created() {
        const itemId = this.$route.params.id;
        this.$store.dispatch('FETCH_ITEM', itemId)
    }
}
</script>

<style>

</style>
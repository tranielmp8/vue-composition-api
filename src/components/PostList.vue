<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id" >
      <SinglePost :post="post" />      
    </div>
  </div>
</template>

<script setup>
  import SinglePost from "./SinglePost.vue"

  import { onMounted, onUnmounted, onUpdated } from 'vue'

  defineProps({
    posts: Array
  })

  onMounted(() => {
    console.log('component is mounted')
  })
  onUnmounted(() => console.log('component unmounted'))
  onUpdated(() => console.log('Component Updated'))

</script>

<style lang="scss" scoped>

</style>
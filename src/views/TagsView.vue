
<template>
  <div class="tag">
    <div  v-if="error">{{ error }}</div>
    <div v-if="posts.length" >
      <PostList :posts="postsWithTag" />
    </div>
    <div v-else > <Spinner /> </div>
  </div>
</template>

<script setup>
import Spinner from '@/components/Spinner.vue';
import PostList from '@/components/PostList.vue';
import getPosts from '@/composables/getPosts';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const { posts, error, load } = getPosts();

const route = useRoute();

load()

const postsWithTag = computed(() => {
  return posts.value.filter((post) => post.tags.includes(route.params.tag))
})
  
</script>

<style >

</style>
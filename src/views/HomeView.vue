<template>
  <div class="home">
    <h2>Home Page: Ninja Blog</h2>
    <div v-if="error" > {{ error }} </div>
    <div v-if="posts.length" >
      <PostList :posts="posts" />
      <TagCloud :posts="posts" />
      <Testing />
    </div>
    <div v-else >
      <Spinner />
    </div>
    
    <!-- <PostList :posts="posts" /> -->
   
  </div>
 </template>
 
 <script setup>
  import PostList from '@/components/PostList.vue'
  import getPosts from '@/composables/getPosts';
  import TagCloud from '../components/TagCloud.vue';
  import Spinner from '../components/Spinner.vue';
  
   const {error, load, posts} = getPosts()

  load()
 
 </script>

<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>
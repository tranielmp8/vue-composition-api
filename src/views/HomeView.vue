<template>
  <div class="home">
    <h2>Home Page: Working with Props</h2>
    <PostListVue :posts="posts" />
    <!-- <PostList :posts="posts" /> -->
   
  </div>
 </template>
 
 <script setup>
  import {ref} from 'vue'
  import PostListVue from '@/components/PostList.vue'
  // import PostList from '@/components/PostList.vue'
  const posts = ref([
    {title: ' Welcome to the blog', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. It\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', id: 1},
    {title: 'Where do we begin', body: 'Learning Vue is fun, It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', id: 2},
   ])
 
 </script>
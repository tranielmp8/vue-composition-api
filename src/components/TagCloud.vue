<template>
  <div class="tag-cloud">
    <h3>Tags</h3>
    <div v-for="tag in tags" :key="tag">
      <router-link :to="{ name: 'Tags', params: { tag }}">
        #{{tag}}
      </router-link>
    </div>
  </div>
</template>

<script setup>

import useTags from '../composables/useTags'

const props = defineProps({
  posts: Array
})

const { tags } = useTags(props.posts)
console.log(tags)
</script>

<style>
  .tag-cloud {
    padding: 10px;
  }
  .tag-cloud h3 {
    border-bottom: 1px solid #eee;
    padding: 16px 8px;
    color: #444;
  }
  .tag-cloud div {
    display: inline-block;
    padding: 10px;
  }
  .tag-cloud a {
    color: #777;
    text-decoration: none;
  }

  .tag-cloud a:hover {
    
    color: #ff8800;
    
  }
  .tag-cloud a.router-link-active {
    color: #ff8800;
    font-weight: bold;
  }
</style>
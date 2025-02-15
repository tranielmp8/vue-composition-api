<template>
  <div>
    <h3>{{ post.title }}</h3>
    <p>{{ snippet}}</p>
  </div>
</template>

<script setup>
import {computed} from 'vue'
  const props = defineProps({
    post: Object
  })

  // create a snippet for partial post.body, in the script setup you have to use props. 
  const snippet = computed(() => {
    return props.post.body.substring(0, 100) + '...'
  })

</script>

<style >

</style>
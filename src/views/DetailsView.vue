<template>
  <div v-if="error" >{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre" >{{ post.body }}</p>
  </div>
  <div v-else >
    <Spinner />
  </div>
</template>

<script setup>
  import getPost from '@/composables/getPost';
  import Spinner from '@/components/Spinner.vue';
  import { useRoute } from 'vue-router';

  const props = defineProps({
    id: Number
  })

    // another way to get post.id if we don't have props
  const route = useRoute()

  const { post, error, load } = getPost(route.params.id)
  load()

</script>


<style scoped>
  .post {
    max-width: 1200px;
    margin: 0 auto;
  }
  .post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
  }
  .pre {
    white-space: pre-wrap;
  }
</style>
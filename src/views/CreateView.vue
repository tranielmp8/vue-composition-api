<template>
  <div class="create">
    <form @submit.prevent="handleSubmit">
      <label for="">Title:</label>
      <input v-model="title" type="text" required>
      <label for="">Content:</label>
      <textarea v-model="body" required></textarea>
      <label >Tags (hit enter to add tag)</label>
      <input 
        v-model="tag" 
        type="text"
        @keydown.enter.prevent="handleKeydown"
        >
      <div v-for="tag in tags" :key="tag" class="pill" >#{{ tag }}</div>
      <button>Create Post</button>
    </form>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'


  const title = ref('')
  const body = ref('')
  const tag = ref('')
  const tags = ref([])

  const router = useRouter()

  const handleKeydown = () => {
    if (!tags.value.includes(tag.value)){
      tag.value = tag.value.replace(/\s/, ''); //removes all whitespaces
      tags.value.push(tag.value);
    }
    tag.value = ''
  }

  const handleSubmit = async () => {
    const post = {
      title: title.value,
      body: body.value,
      tags: tags.value
    }

    await fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(post)
    })

  
    router.push({name: 'Home'})
  

  }
  
</script>

<style>
  form {
    max-width: 480px;
    margin: 0 auto;
    text-align: left;
  }
  input, textarea {
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #eee;
  }
  textarea {
    height: 160px;
  }
  label {
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    color: white;
    margin-bottom: 10px;
  }
  label::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1.5deg);
  }
  button {
    display: block;
    margin-top: 30px;
    background: #ff8800;
    color: white;
    border: none;
    border-radius: 7px;
    padding: 8px 16px;
    font-size: 18px;
    cursor: pointer;
  }
  .pill {
    display: inline-block;
    margin: 10px 10px 0 0;
    color: #444;
    background: #ddd;
    padding: 8px;
    border-radius: 20px;
    font-size: 14px;
  }
</style>
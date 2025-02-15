
<template>
 <div class="home">
  <h1>Home</h1>
  <p>Computed</p>
  <input type="text" v-model="search" >
  <p>Search Term: {{ search }}</p>
  <!-- <div v-for="name in names" :key="name" >{{ name }}</div> -->
  <div v-for="name in matchingNames" :key="name" >{{ name }}</div>
 </div>
</template>

<script setup>
  import {ref, computed} from 'vue'
  console.log('Computed')
  const search = ref('')

  const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'peach', 'koopa', 'bowser'])

  const matchingNames = computed(() => {
    return names.value.filter((name) => name.includes(search.value))
  })

</script>

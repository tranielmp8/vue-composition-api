
<template>
 <div class="home">
  <h1>Home</h1>
  <p ref="p" >My name is {{ name }} and my age is {{ age }}</p>
  <button @click="handleClick" >Click me</button>
  <button @click="age++" >Add 1 to age</button>
  <input type="text" v-model="name" >
 </div>
</template>

<script setup>
  import {ref} from 'vue'
  console.log('reactive')

  // reactive values
  const name = ref('mario')
  const age = ref(30)

  const handleClick = () => {
    console.log('reactivity')
    name.value = 'luigi'
    age.value = 25
  }

  // old composition API we would need to return variables and methods, but we do not need to do that anymore

  

</script>


<template>
 <div class="home">
  <h1>Home</h1>
  <p ref="p" >My name is {{ name }} and my age is {{ age }}</p>
  <button @click="handleClick" >Click me</button>
 </div>
</template>

<script setup>
  import {ref} from 'vue'
  console.log('setup not needed inside script tag anymore')

  let name = ref('mario')
  let age = ref(30)

  const p = ref(null)

  const handleClick = () => {
    console.log(p.value)
    p.value.classList.add('test')
    p.value.textContent = 'hello, ninjas'
  }

  // old composition API we would need to return variables and methods, but we do not need to do that anymore

  

</script>

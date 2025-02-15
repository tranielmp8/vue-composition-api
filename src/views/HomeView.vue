
<template>
 <div class="home">
  <h1>Home</h1>
  <p  >{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
  <button @click="updateNinjaOne" >Update Ninja One</button>
  <h2>Reactive</h2>
  <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
  <button @click="updateNinjaTwo" >Update Ninja Two</button>

 </div>
</template>

<script setup>
// remember reactive cannot be used with primitive values
  import {ref, reactive} from 'vue'
  console.log('Reactive : used for objects')
  console.log('Reactive : cannot use for primitive values')

  const ninjaOne = ref({name: 'mario', age: 30})
  const ninjaTwo = reactive({name: 'luigi', age: 35})

  const updateNinjaOne = () => {
    ninjaOne.value.age = 40
  }

  // using reactive you do not need to use .value to get the values
  
  const updateNinjaTwo = () => {
    ninjaOne.age = 45
  }

</script>

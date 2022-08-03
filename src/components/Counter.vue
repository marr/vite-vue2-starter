<script setup>
import { onMounted } from 'vue'
import { useCount } from '~/stores/counter';

// reactive state
const { localCount: count } = useCount(); 

// functions that mutate state and trigger updates
function increment() {
  count.value++
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <button @click="increment">Local count is: {{ count }}</button>
</template>
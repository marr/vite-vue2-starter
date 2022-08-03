<template>
  <div>

    <h1>{{ msg }}</h1>

    <p>
      <a
        href="https://vitejs.dev/guide/features.html"
        target="_blank"
      >Vite Documentation</a> |
      <a
        href="https://vuejs.org/v2/guide/"
        target="_blank"
      >Vue 2 Documentation</a>
    </p>

    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
  </div>
</template>

<script setup>

defineProps(['msg']);
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
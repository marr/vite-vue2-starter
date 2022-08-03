<template>
  <div id="app">
    <img
      alt="Vue logo"
      src="./assets/logo.png"
    />
    <HelloWorld msg="Hello Composition API" />
    <button @click="count++">Global count {{ count }}</button>
    <ol style="list-style:none; padding:0">
      <li><counter /></li>
      <li><counter /></li>
    </ol>
  </div>
</template>

<script setup>
import Counter from './components/Counter.vue';
import HelloWorld from "./components/HelloWorld.vue";
import { useCount } from '~/stores/counter';

const { count } = useCount();
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
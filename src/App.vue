<script setup>
import { RouterView } from 'vue-router'
import TodoHeader from './components/TodoHeader.vue';
</script>

<template>
  <TodoHeader/>
  <RouterView />
</template>

<style lang="scss">
  * {
    font-family: "Rubik", sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 10px;
  }
</style>

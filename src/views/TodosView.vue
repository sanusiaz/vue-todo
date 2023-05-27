
<template>
  <main>
    <h1>Create Todo</h1>
    <TodoCreator :localStorageTodos="todos"  @activeTodos="recentActiveTodos"/>

    <Todos @reloadTodos="reload" :localStorageTodos="todos"/>
  </main>
</template>

<script>
import { toRaw } from 'vue'
import TodoCreator from '../components/includes/TodoCreator.vue'
import Todos from '../components/Todos.vue'

export default {
  name: 'TodosView',
  data() {
    return {
      todos: []
    }
  },
  mounted() {
    let localStorageTodos = JSON.parse(localStorage.getItem("todos"));
    if ( localStorageTodos !== null && localStorageTodos !== undefined && localStorageTodos !== ""  ) {
        this.todos = localStorageTodos;
    }

  },
  methods: {
    recentActiveTodos(value) {
      this.todos = value
    },
    reload(value) {
      if ( value === true ) {
        this.todos = JSON.parse(localStorage.getItem('todos'))
      }
    }
  },
  components: {TodoCreator, Todos}
}

</script>

<style lang="scss" scoped>

main {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 16px;

  h1 {
    margin-bottom: 16px;
    text-align: center;
  }
}
</style>
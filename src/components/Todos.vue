<template>
    <div>
        <div v-for="(todo, index) in localStorageTodos" :key="todo.id">
            <TodoItem @triggerDelete="reloadAllItems" :todo="todo" :index="index + 1" @triggerUpdate="updateTodos"/>
        </div>
    </div>
</template>

<script>
import { toRaw } from 'vue';
import TodoItem from './TodoItem.vue';

    export default {
    name: "Todos",
    props: {
        localStorageTodos: {
            type: Object,
            required: true
        }
    },
    methods: {
        updateTodos(value) {         
            console.log(this.localStorageTodos)   
            let __rawData = toRaw( this.localStorageTodos );
            localStorage.setItem('todos', JSON.stringify(__rawData))
        },

        reloadAllItems(value) {
            if ( value === true ) {
                this.$emit('reloadTodos', true)
            }
        }
    },
    components: { TodoItem }
}
</script>

<style lang="scss" scoped>

</style>
<template>
    <li :class="{ 'completed' : this.todo.isCompleted, 'edit' : this.todo.isEditing }">
        <div style="color: black; margin: auto; display: block; padding-left: 10px;"> {{ index }}</div>
       
        <div class="inner">
            <div class="todo">
                <input type="text" @change="this.todo.isEditing = false; this.$emit('triggerUpdate', this.todo.name)" @keyup="triggerNameChange" v-model="todo.name">
                <span>
                    Time Created: {{ new Date(todo.timeCreated * 1000) }}
                </span>
            </div>


            <!-- Mark Completed and redo -->
            <div class="todo-actions">
                <!-- Completed Icon -->
                <Icon icon="ph:check-circle" v-show="!this.todo.isCompleted" @click="this.todo.isCompleted = !this.todo.isCompleted; this.$emit('triggerUpdate', this.todo.isCompleted)"  color="#41b080" width="22"/>

                <!-- Reload Icon -->
                <Icon icon="ion:reload-circle" v-show="this.todo.isCompleted" @click="this.todo.isCompleted = !this.todo.isCompleted; this.$emit('triggerUpdate', this.todo.isCompleted)"  color="#41b080" width="22"/>

                <!-- Delete Icon -->
                <Icon icon="ph:trash" @click="removeCurrentList(this.todo.id), this.$emit('triggerDelete', true)"  color="#41b080" width="22"/>
            </div>
        </div>
    </li>
</template>

<script>
import {Icon} from '@iconify/vue'
import { reactive, toRaw } from 'vue';
    export default {
        name: 'TodoItem',
        props: {
            todo: {
                type: Object,
                required: true
            },
            index: {
                required: true,
                default: 1
            }
        },
        methods: {
            triggerNameChange() {
                this.todo.isEditing = true
                this.$emit('triggerUpdate', this.todo.name)
            },
            removeCurrentList(__todoID) {
                let __allLocalStorageTodos = localStorage.getItem('todos');
                    __allLocalStorageTodos = JSON.parse(__allLocalStorageTodos);

                let __newTodos = [];
                __newTodos =  __allLocalStorageTodos.filter( (a) => {return a.id !== __todoID})
                localStorage.setItem("todos",JSON.stringify(__newTodos)) 
            }
        },
        components: {Icon}
    }
</script>

<style lang="scss" scoped>
.edit {
    background-color: #697e8f !important;
}
.completed {
    background-color: rgb(236, 217, 217);
}
    li {
        background-color: #e9eef2;
        color: white;
        margin: 10px 0px;
        padding: 10px;
        border-radius: 5px;
        display: flex;
        gap: 10px;

        .inner {
            width: 100%;
            padding: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;

            .todo-actions {
                display: flex;
                gap: 2px;
                align-content: center;
            }

            .todo {
                span {
                    color: black;
                    font-weight: bold;
                    font-size: 10px;
                }
            }
            .todo input {
                color: black;
                padding: 10px;
                width: 100%;
                display: block;
                position: relative;
                background: none;
                border: 1px solid #ccc;
                border-radius: 2px;
                outline: none;
            }
            &:focus {
                outline: none;
                border: none;
            }
        }
    }
</style>
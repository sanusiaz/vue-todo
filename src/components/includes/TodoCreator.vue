
<template>
    <div>
        <div class="input-wrap">
            <input  :class="invalidTodo ? 'invalid-todo' : '' "  v-model="todo" type="text" name="" id="">
            <ButtonComponent @click.prevent="addTaskToTodo()"/>

        </div>
        <div class="invalid-group" v-if="invalidTodo === true && this.errorMessage !== ''">
            {{ this.errorMessage }}
        </div>
    </div>
</template>

<script>
import { reactive, toRaw } from "vue"
import { uid } from  "uid"
import ButtonComponent from "./ButtonComponent.vue"

   export default {
    name: "TodoCreator",
    data() {
        return {
            todo: "",
            allTodos: [],
            invalidTodo: false,
            errorMessage: "",
            storedTodos: []
        };
    },
    props: {
        localStorageTodos: {
            required: true
        }
    },
    methods: {
        addTaskToTodo() {
            if (this.todo !== "") {

               let __newData = [
                    {
                        id: uid(),
                        name: this.todo,
                        timeCreated: Date.now(),
                        isCompleted: false,
                        isEditing: false
                    }
                ];

                this.localStorageTodos.push(...__newData)
                this.allTodos = this.localStorageTodos
                let __rawData = toRaw(this.allTodos)
                localStorage.setItem("todos",JSON.stringify(__rawData)) 
                    
                this.$emit("activeTodos", this.localStorageTodos)
            }
            else {
                this.errorMessage = "Todo Cannot Be empty"
                this.invalidTodo = true
            }
        }
    },
    watch: {
        todo(value) {
            if (value !== "") {
                this.errorMessage = "";
                this.invalidTodo = false;
            }
        }
    },
    components: { ButtonComponent }
}
</script>

<style lang="scss" scoped>

    .invalid-form-group .input-wrap {
        border-color: red;
    }
    .invalidTodo {
        border: 1px solid red;
    }

    .invalid-group {
        text-align: left;
        font-size: 10px;
        color: red;
    }

.input-wrap {
    display: flex;
    transition: 250ms ease;
    border: 2px solid #41be8e;
    &:focus-within {
        box-shadow: 0 -4px 6px -1px rgb(0 0 0 / 0.1);
    }

    input {
        width: 100%;
        padding: 8px 6px;
        border: none;
        &:focus {
            outline: none;
        }
    }

    button {
        padding: 8px 16px;
    }
}
</style>
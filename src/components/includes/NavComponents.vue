<template>
    <ul class="nav-routes">
        <li>
            <a href="https://github.com/sanusiaz" target="_blank">Github</a>
        </li>
    </ul>
</template>

<script>
import { RouterLink } from 'vue-router'

    export default {
        setup() {
            return {};
        },
    }
</script>

<style lang="scss" scoped>
    .nav-routes {
        display: flex;
        flex: 1;
        justify-content: flex-end;
        gap: 30px;
        list-style: none;

        li, a {
            font-size: 15.5px;
        }

        a {
            text-decoration: none;
            color: inherit;
        }
    }

</style>
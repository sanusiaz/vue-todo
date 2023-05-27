<template>
    <ul class="nav-routes">
        <RouterLink :to="{ name: 'home' }">Home Page</RouterLink>
        <RouterLink :to="{ name: 'about' }"> About</RouterLink>
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
        gap: 12px;
        list-style: none;

        a {
            text-decoration: none;
            color: inherit;
        }
    }

</style>
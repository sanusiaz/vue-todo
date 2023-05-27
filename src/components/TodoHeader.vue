<template>
    <header>
        <nav class="container">
            <div class="branding">
                <span class="logo">
                    <Logo />
                </span>
                <h1>Vue Todos</h1>
            </div>

            <!-- Navigation Header -->
            <NavComponents></NavComponents>
        </nav>
    </header>
</template>

<script>
import Logo from './Icons/Logo.vue'
import NavComponents from './includes/NavComponents.vue';
export default {
    setup() {
        return {};
    },
    components: {
        Logo,
        NavComponents
    },
}
</script>

<style lang="scss" scoped>

header {
    background-color: #f1f1f1;

    nav {
        display: flex;
        align-items: center;
        padding: 25px 16px;

        .branding {
            display: flex;
            align-items: center;
            gap: 8px;

            .logo {
                max-width: 50px;
                display: flex;
                align-items: center;
                align-content: center;
            }

            h1 {
                font-size: 24px;
            }
        }

       
    }
}
</style>
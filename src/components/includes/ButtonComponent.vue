<template>
    <button :type="type">
        <slot>Create</slot>
    </button>
</template>

<script>
    export default {
        name: 'ButtonComponent',
        props: {
            type: {
                type: String,
                default: 'submit'
            }
        }
    }
</script>

<style lang="scss" scoped>
    button {
        cursor:pointer;
    }
</style>
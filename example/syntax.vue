<template>

<span :class="type">
    <slot></slot>
</span>

</template>

<script>

export default {
    props: {
        type: {
            type: String,
            default: ''
        }
    }
}

</script>

<style scoped>

.operator { color: #a71d5d; }
.string { color: #183691; }
.variable { color: #0086b3; }

</style>
<template>
    <div class="LineModule bg-white">
        <h1>{{ msg }} 👋 </h1>
        <p class="otm">奥特曼</p>
    </div>
</template>

<script>
export default {
    name: 'LineModule',
    props: {
        msg: {
            type: String,
            default: "slap"
        }
    }
}
</script>

<style scoped>
@import url('./index.less');
</style>
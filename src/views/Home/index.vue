<template>
    <div>
        <h1>这是一个GIT练习的项目</h1>
        <router-link to="/git">Git</router-link>
        <router-link to="/branch">Branch</router-link>
        <router-link to="/remote"></router-link>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>
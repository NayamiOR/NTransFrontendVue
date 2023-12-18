<script setup>
import { ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { defineStore } from 'pinia'

const target = useTarget()
const link = ref(target.link)
watch(link, (newVal) => {
    target.setLink(newVal)
})

</script>

<script>
export const useTarget = defineStore('target', () => {
    const link = ref('localhost:18080')
    function setLink(newVal) {
        link.value = newVal
    }
    return {
        link,
        setLink
    }
})
</script>

<template>
    <div class="box">
        <h1>Public端（有公网ip）</h1>

        <div style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
            <p>Target Link</p>
            <span style="width: 20px;"></span>
            <input type="text" id="ATarget" v-model="link">
        </div>

        <div>
            <nav>
                <RouterLink to="/sendfile">发送文件</RouterLink>
                <RouterLink to="/sendmessage">发送消息</RouterLink>
            </nav>
        </div>
    </div>
</template>

<style scoped></style>
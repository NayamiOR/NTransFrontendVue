<script setup>
import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

const target = useTarget()
const link = ref(target.link)
watch(link, (newVal) => {
    target.setLink(newVal)
})

function goFileList() {
    let link = 'http://' + target.link + '/files'
    // 打开一个链接在后台页面
    window.open(link, '_blank')
}
function goMessage() {
    let messageLink = 'http://' + target.link + '/messages'
    // 打开一个链接在后台页面
    window.open(messageLink, '_blank')
}
</script>

<script>
export const useTarget = defineStore('Btarget', () => {
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
    <h1>Private端（无公网ip）</h1>
    <div style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
        <p>Target Link</p>
        <span style="width: 20px;"></span>
        <input type="text" id="BTarget" v-model="link">
    </div>
    <div>
        <nav>
            <RouterLink to="/sendfile">发送文件</RouterLink>
            <RouterLink to="/sendmessage">发送消息</RouterLink>
        </nav>
    </div>
    <span style="height: 20px;"></span>
    <div style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
        <button type="button" @click="goFileList" class="fileList">File list</button>
        <span style="width: 20px;"></span>
        <button type="button" @click="goMessage" class="fileList">Message</button>
    </div>
</template>


<style scoped>
h1 {
    width: fit-content;
}

.fileList {
    width: 100px;
    height: 30px;
    border-radius: 10px;
    background-color: #00a1d6;
    color: white;
    font-size: 20px;
    border: none;
    outline: none;
    cursor: pointer;
}
</style>
<script setup>
import { ref } from 'vue'

const target = ref('localhost:18080')
function goFileList() {
    let link = 'http://' + target.value + '/files'
    // 打开一个链接在后台页面
    window.open(link, '_blank')
}
function goMessage() {
    let link = 'http://' + target.value + '/messages'
    // 打开一个链接在后台页面
    window.open(link, '_blank')
}
</script>


<template>
    <h1>Private端（无公网ip）</h1>
    <div style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
        <p>Target Link</p>
        <span style="width: 20px;"></span>
        <input type="text" id="BTarget" v-model="target">
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
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useTarget } from '@/components/BClient.vue';

const fileList = ref([])
// const target = ref('localhost:18080')
// const link = ref('localhost:18080')
const target = useTarget()
const link = ref(target.link)
function sendFile(e) {
    e.preventDefault()
    // form-data
    // key: file
    // value: files selected in the input
    axios.post('http://' + link.value + '/receivefiles', new FormData(e.target))
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    // 清空input
    fileList.value = []
    const input = document.querySelector('input[type=file]')
    input.value = ''
    alert('发送成功')
}

function fileChange(e) {
    const files = e.target.files
    this.fileList = Array.from(files)
}
</script>


<template>
    <main>
        <h1>发送文件</h1>
        <p>target: {{ target.link }}</p>
        <!-- <p v-model="target">{{ target.value }}</p> -->
        <form method="post" enctype="multipart/form-data" @submit="sendFile">
            <input type="file" name="file" multiple @change="fileChange($event)" />
            <button type="submit">Send</button>
        </form>
        <!-- <div>
            <ul>
                <li v-for=" file in fileList" :key="file.name">{{ file.name }}</li>
            </ul>
        </div> -->
        <div class="file-list">
            <div v-for="file in fileList" :key="file.name" class="file-item">
                {{ file.name }}
            </div>
        </div>
    </main>
</template>

<style scoped>
.file-list {
    max-height: 400px;
    overflow-y: auto;
}

.file-item {
    height: 25px;
    line-height: 25px;
}
</style>

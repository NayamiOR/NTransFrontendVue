<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useTarget } from '@/components/AClient.vue';

const fileList = ref([])
const target = useTarget()
const link = ref(target.link)
function sendFile(e) {
    e.preventDefault()
    // form-data
    // key: file
    // value: files selected in the input
    axios.post('http://' + link.value + '/uploadfiles', new FormData(e.target))
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
    alert('挂载成功')
}

function fileChange(e) {
    const files = e.target.files
    this.fileList = Array.from(files)
}
</script>


<template>
    <main>
        <h1>挂载文件</h1>
        <p>target: {{ target.link }}</p>
        <form method="post" enctype="multipart/form-data" @submit="sendFile">
            <input type="file" name="file" multiple @change="fileChange($event)" />
            <button type="submit">Send</button>
        </form>

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

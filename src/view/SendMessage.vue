<script setup>
import { useTarget } from '@/components/BClient.vue';
import { ref } from 'vue'
import axios from 'axios'

const target = useTarget()
const message = ref('')

function submit(e) {
    e.preventDefault()
    axios.post('http://' + target.link + '/receivemessage', new FormData(e.target))
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    message.value = ''
    alert('发送成功')
}
</script>

<template>
    <h1>发送消息</h1>
    <div>
        <p>target: {{ target.link }}</p>
        <form id="myForm" autocomplete="on" method="post" @submit="submit">
            <input type="text" id="message" name="text" placeholder="输入要发送的信息···" v-model="message">
            <button type="submit">Send</button>
        </form>
    </div>
</template>

<style scoped></style>
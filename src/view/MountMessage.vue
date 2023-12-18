<script setup>
import { useTarget } from '@/components/AClient.vue';
import axios from 'axios'
import { ref } from 'vue'

const target = useTarget()
const message = ref('')
function submit(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    formData.append('message', message.value)
    axios.post('http://' + target.link + '/uploadmessage', formData)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}
</script>

<template>
    <h1>挂载消息</h1>
    <div>
        <p>target: {{ target.link }}</p>
        <form id="myForm" autocomplete="on" method="post" @submit="submit">
            <input type="text" id="message" name="text" placeholder="输入要发送的信息···" v-model="message">
            <button type="submit">Send</button>
        </form>
    </div>
</template>

<style scoped></style>
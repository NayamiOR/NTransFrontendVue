<script setup>
import { useTarget } from '@/components/AClient.vue';
import axios from 'axios'

const target = useTarget()

function submit(e) {
    e.preventDefault()
    axios.post('http://' + target.link + '/receivemessage', new FormData(e.target))
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}
</script>

<template>
    <h1>Message Sender</h1>
    <div>
        <p>target: {{ target.link }}</p>
        <form id="myForm" autocomplete="on" method="post" @submit="submit">
            <input type="text" id="message" name="text" placeholder="输入要发送的信息···">
            <button type="submit">Send</button>
        </form>
    </div>
</template>

<style scoped></style>
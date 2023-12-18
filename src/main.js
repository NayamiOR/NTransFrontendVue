import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

const app = createApp(App);
const piana = createPinia();

app.use(router);
app.use(piana);

app.mount("#app");

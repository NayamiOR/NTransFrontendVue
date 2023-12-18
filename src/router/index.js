import { createRouter, createWebHistory } from "vue-router";
import SendFileVue from "../view/SendFile.vue";
import SendMessageVue from "../view/SendMessage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/sendfile",
      name: "sendfile",
      component: SendFileVue,
    },
    {
      path: "/sendmessage",
      name: "sendmessage",
      component: SendMessageVue,
    },
  ],
});

export default router;

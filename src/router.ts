import { createWebHashHistory, createRouter } from "vue-router";
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc', component: Doc,
      children: [
        { path: '', component: () => import("./components/DocDemo.vue") },
        { path: 'switch', component: () => import("./components/SwitchDemo.vue") },
        { path: 'button', component: () => import("./components/ButtonDemo.vue") },
        { path: 'dialog', component: () => import("./components/DialogDemo.vue") },
        { path: 'tabs', component: () => import("./components/TabsDemo.vue") },
      ]
    },
  ]
});
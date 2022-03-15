import { createWebHashHistory, createRouter } from "vue-router";
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Markdown from './components/Markdown.vue'
import { h } from "vue";

const md = (fileName) => h(Markdown, { path: `../markdown/${fileName}.md`, key: fileName })

const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc', component: Doc,
      children: [
        { path: '', component: () => import("./components/DocDemo.vue") },
        { path: 'intro', component: md('intro') },
        { path: 'install', component: md('install') },
        { path: 'get-started', component: md('get-started') },
        { path: 'switch', component: () => import("./components/SwitchDemo.vue") },
        { path: 'button', component: () => import("./components/ButtonDemo.vue") },
        { path: 'dialog', component: () => import("./components/DialogDemo.vue") },
        { path: 'tabs', component: () => import("./components/TabsDemo.vue") },
      ]
    },
  ]
});
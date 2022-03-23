import { createWebHashHistory, createRouter } from "vue-router";
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Markdown from './components/Markdown.vue'
import Intro from './markdown/intro.md'
import Install from './markdown/install.md'
import GetStarted from './markdown/get-started.md'
import { h } from "vue";

const md = (string) => h(Markdown, { content: string, key: string })

const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc', component: Doc,
      children: [
        { path: '', component: () => import("./components/DocDemo.vue") },
        { path: 'intro', component: md(Intro) },
        { path: 'install', component: md(Install) },
        { path: 'get-started', component: md(GetStarted) },
        { path: 'switch', component: () => import("./components/SwitchDemo.vue") },
        { path: 'button', component: () => import("./components/ButtonDemo.vue") },
        { path: 'dialog', component: () => import("./components/DialogDemo.vue") },
        { path: 'tabs', component: () => import("./components/TabsDemo.vue") },
      ]
    },
  ]
});
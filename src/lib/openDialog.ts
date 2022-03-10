import { createApp, h } from 'vue'
import Dialog from './Dialog.vue'


export const openDialog = (options) => {
  const { title, content, closeOnClickOverlay, ok, cancel } = options
    const div = document.createElement('div')
    document.body.appendChild(div)
    const close = () => {
        app.unmount()
        div.remove()
    }
    const app = createApp({
        render() {
            return h(
                Dialog, {
                visible: true,
                closeOnClickOverlay: closeOnClickOverlay,
                'onUpdate:visible': (newVisible) => {
                    if (newVisible === false) {
                        close()
                    }
                },
                ok, cancel
            }, {
              title: () => h('div', title),
              content: () => h('div', content) })
        }
    })
    app.mount(div)
}
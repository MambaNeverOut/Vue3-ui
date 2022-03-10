<template>
  <div class="">dialog示例</div>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
  <!-- <Dialog :visible="visible" @update:visible="visible = $event"></Dialog> -->
  <Dialog v-model:visible="visible" :ok="ok" :cancel="cancel">
    <template v-slot:title>
      <h1>标题</h1>
    </template>
    <template v-slot:content>
      <p>我是内容</p>
      <p>我是内容</p>
    </template>
  </Dialog>
  <h1>示例2</h1>
  <Button @click="showDialog">show</Button>
</template>

<script>
import { ref } from "vue";
import Button from "../lib/Button.vue";
import Dialog from "../lib/Dialog.vue";
import { openDialog } from "../lib/openDialog";

export default {
  components: {
    Button,
    Dialog,
  },
  setup() {
    const visible = ref(false);
    const toggle = () => {
      visible.value = !visible.value;
    };
    const ok = () => {
      return false;
    };
    const cancel = () => {};
    const showDialog = () => {
      openDialog({
        title: "标题",
        content: "我是内容",
        ok() {
          console.log("ok");
        },
        cancel() {
          console.log("cancel");
        },
      });
    };
    return { visible, toggle, ok, cancel, showDialog };
  },
};
</script>

<style lang='' scoped>
</style>

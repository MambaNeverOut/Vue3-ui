<template>
  <div class="">dialog示例</div>
  <h1>示例</h1>
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
</template>

<script>
import { ref } from "vue";
import Button from "../lib/Button.vue";
import Dialog from "../lib/Dialog.vue";
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
      return false
    };
    const cancel = () => {
    };
    return { visible, toggle, ok, cancel };
  },
};
</script>

<style lang='' scoped>
</style>

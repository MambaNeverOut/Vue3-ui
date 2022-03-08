<template>
  <div>button示例</div>
  <h1>示例1</h1>
  <div>
    <Button
      @click="onClick"
      @focus="onFocus"
      @mouseover="onMouseOver"
      size="small"
      >按钮</Button
    >
    <Button theme="link">按钮</Button>
    <Button theme="link">按钮</Button>
    <Button>按钮</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },
  setup() {
    const onClick = () => {
      console.log("click");
    };
    const onFocus = () => {
      console.log("focus");
    };
    const onMouseOver = () => {
      console.log("mouseover");
    };
    return { onClick, onFocus, onMouseOver };
  },
};
</script>

<style lang="" scoped></style>

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
    <Button theme="button">按钮</Button>
    <Button theme="link">按钮</Button>
    <Button theme="text">按钮</Button>
  </div>
  <h1>示例2</h1>
  <div>
    <Button size="big">大大按钮</Button>
    <Button>正常按钮</Button>
    <Button size="small">小小按钮</Button>
  </div>
   <h1>示例3</h1>
  <div>
    <Button size="big">大大按钮</Button>
    <Button>正常按钮</Button>
    <Button size="small">小小按钮</Button>
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

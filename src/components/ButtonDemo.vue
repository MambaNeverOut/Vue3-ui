<template>
  <div>button示例</div>
  <Demo :component="Button1Demo" />
  <Demo :component="Button2Demo" />
  <Demo :component="Button3Demo" />
  <Demo :component="Button4Demo" />
  <Demo :component="Button5Demo" />
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Button1Demo from "../code/Button1.demo.vue";
import Button2Demo from "../code/Button2.demo.vue";
import Button3Demo from "../code/Button3.demo.vue";
import Button4Demo from "../code/Button4.demo.vue";
import Button5Demo from "../code/Button5.demo.vue";
export default {
  components: { Demo, Button1Demo, Button2Demo, Button4Demo, Button5Demo },
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
    return {
      onClick,
      onFocus,
      onMouseOver,
      Button1Demo,
      Button2Demo,
      Button3Demo,
      Button4Demo,
      Button5Demo,
    };
  },
};
</script>

<style lang="" scoped></style>

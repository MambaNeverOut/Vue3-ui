<template>
  <h1>dialog示例</h1>
  <Demo :component="Dialog1Demo" />
  <Demo :component="Dialog2Demo" />
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Dialog1Demo from "../code/Dialog1.demo.vue";
import Dialog2Demo from "../code/Dialog2.demo.vue";
export default {
  components: {
    Demo,
    Dialog1Demo,
    Dialog2Demo,
  },
  setup() {
    return { Dialog1Demo, Dialog2Demo };
  },
};
</script>

<style lang="" scoped></style>

<template>
  <article class="markdown-body" v-html="content"></article>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  props: {
    content: {
      content: String,
      required: true,
    },
  },
  // setup(props, context) {
  //   const content = ref<string>(null);
  //   import(props.path).then((result) => {
  //     content.value = result.default;
  //   });
  //   return { content };
  // },
};
</script>

<style lang="" scoped></style>

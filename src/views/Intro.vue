<template>
  <article class="markdown-body" v-html="md"></article>
</template>

<script>

import md from "../markdown/intro.md";
export default {
  components: {},
  data() {
    return { md };
  },
  methods: {},
};
</script>

<style lang="" scoped></style>

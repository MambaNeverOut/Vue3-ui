<template>
  <article class="markdown-body" v-html="md"></article>
</template>

<script>

import md from "../markdown/install.md";
export default {
  components: {},
  data() {
    return { md };
  },
  methods: {},
};
</script>

<style lang="" scoped></style>

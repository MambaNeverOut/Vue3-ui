<template>
  <div>
    <Switch :value="value" @input="value = $event" />
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import Switch from "../lib/Switch.vue";
export default {
  components: {
    Switch,
  },
  setup() {
    const value = ref(false);

    return { value };
  },
};
</script>

<style lang='' scoped>
</style>

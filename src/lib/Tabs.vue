<template>
  <div class="imperfect-tabs">
    <div class="imperfect-tabs-nav" ref="container">
      <div
        class="imperfect-tabs-nav-item"
        :class="{ selected: t === selected }"
        v-for="(t, index) in titles"
        :key="index"
        @click="select(t)"
        :ref="
          (el) => {
            if (t === selected) selectedItem = el;
          }
        "
      >
        {{ t }}
      </div>
      <div class="imperfect-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="imperfect-tabs-content">
      <component class="imperfect-tabs-content-item" :is="current" :key="current.props.title"></component>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, onMounted, ref, watchEffect } from "vue";
import Tab from "./Tab.vue";
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const container = ref<HTMLDivElement>(null);
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs 字标签必须是Tab");
      }
    });
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    const current = computed(() => {
      return defaults.filter((tag) => tag.props.title === props.selected)[0];
    });
    const select = (title: string) => {
      context.emit("update:selected", title);
    };
    onMounted(() => {
      watchEffect(() => {
        const { width, left: left2 } =
          selectedItem.value.getBoundingClientRect();
        const { left: left1 } = container.value.getBoundingClientRect();

        indicator.value.style.width = width + "px";
        indicator.value.style.left = left2 - left1 + "px";
      });
    });

    return {
      container,
      selectedItem,
      indicator,
      defaults,
      current,
      titles,
      select,
    };
  },
};
</script>
<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.imperfect-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>

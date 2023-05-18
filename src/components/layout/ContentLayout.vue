<script setup>
import HeaderLayout from "./HeaderLayout.vue";
import MenuLayout from "@/components/layout/MenuLayout.vue";
import { ref } from "vue";
const collapsed = ref(false);

const openMenu = (e) => {
  collapsed.value = e;
};

const isMobile = window.matchMedia("(max-width: 600px)");
isMobile.onchange = (e) => {
  if (e.matches) {
    collapsed.value = true;
  } else {
    collapsed.value = false;
  }
};
</script>
<template>
  <a-layout>
    <MenuLayout :collapsed="collapsed" />
    <a-layout>
      <HeaderLayout @openMenu="openMenu" />
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          overflowY: 'scroll',
        }"
      >
        <slot></slot>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style>
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}
</style>

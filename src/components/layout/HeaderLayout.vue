<script setup>
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";
import { defineEmits } from "vue";

const emit = defineEmits(["openMenu"]);
</script>
<template>
  <a-layout-header style="background: #fff; padding: 0">
    <menu-unfold-outlined
      v-if="collapsed"
      class="trigger"
      @click="() => emit('openMenu', (collapsed = !collapsed))"
    />
    <menu-fold-outlined
      v-else
      class="trigger"
      @click="() => emit('openMenu', (collapsed = !collapsed))"
    />
  </a-layout-header>
</template>

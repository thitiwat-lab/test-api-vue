<script setup>
// import { UserOutlined } from "@ant-design/icons-vue";
import { ref, defineProps } from "vue";
import routes from "@/router";

const props = defineProps({ collapsed: Boolean });
const selectedKeys = ref([1]);
</script>

<template>
  <a-layout-sider :collapsed="props.collapsed" :trigger="null" collapsible>
    <div class="logo content-center">
      <h1 style="color: #191b30c7">Logo</h1>
    </div>
    <a-menu
      v-for="(ele, i) in routes.options.routes"
      :key="i"
      v-model:selectedKeys="selectedKeys"
      theme="dark"
      mode="inline"
    >
      <a-menu-item :key="i + 1">
        <router-link :to="`${ele?.path}`">{{ ele.name }}</router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

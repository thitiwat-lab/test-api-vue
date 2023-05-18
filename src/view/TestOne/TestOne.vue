<script setup>
import { onBeforeMount } from "vue";
import { ref } from "vue";

const dataSult = ref([]);
const isSpinning = ref(false);
onBeforeMount(() => {
  isSpinning.value = true;
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => (dataSult.value = json))
    .finally(() => (isSpinning.value = false));
});
</script>

<template>
  <a-spin :spinning="isSpinning">
    <div style="height: 100vh">
      <h1 class="mb-4">Test 1</h1>
      <a-row :gutter="[16, 16]">
        <a-col
          :xs="{ span: 24 }"
          :md="{ span: 8 }"
          :lg="{ span: 6 }"
          v-for="(v, i) in dataSult"
          :key="i"
        >
          <a-card
            class="card-custom card-customs"
            :title="v.title"
            style="height: 220px"
          >
            {{ v.body }}
          </a-card>
        </a-col>
      </a-row>
    </div>
  </a-spin>
</template>

<style>
.card-custom.ant-card-bordered {
  border-radius: 16px;
}
.card-custom:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>

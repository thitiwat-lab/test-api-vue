<script setup>
import { onBeforeMount } from "vue";
import { ref } from "vue";

const dataSult = ref([]);
const isSpinning = ref(false);
const value = ref();

const getData = () => {
  isSpinning.value = true;
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => (dataSult.value = json))
    .finally(() => (isSpinning.value = false));
};

onBeforeMount(() => {
  getData();
});

const onSearch = (searchValue) => {
  isSpinning.value = true;
  dataSult.value = dataSult.value.filter((ele) => ele.title === searchValue);
  if (!searchValue) {
    getData();
  }
  isSpinning.value = false;
};

const columns = [
  {
    title: "No.",
    dataIndex: "id",
  },
  {
    title: "Name",
    dataIndex: "title",
  },
  {
    title: "descriptions",
    dataIndex: "body",
  },
];
</script>

<template>
  <a-spin :spinning="isSpinning">
    <a-input-search
      v-model:value="value"
      placeholder="Search Name"
      style="width: 200px; margin-bottom: 20px"
      @search="onSearch"
    />
    <a-table size="small" :dataSource="dataSult" :columns="columns" />
  </a-spin>
</template>

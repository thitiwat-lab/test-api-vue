<script setup>
import { onBeforeMount } from "vue";
import { ref } from "vue";

const dataSult = ref();
const isSpinning = ref(false);
onBeforeMount(() => {
  isSpinning.value = true;
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((json) => (dataSult.value = json))
    .finally(() => (isSpinning.value = false));
});
</script>

<template>
  <a-spin :spinning="isSpinning">
    <div>
      <h1 class="mb-4">Test 2</h1>
      <div
        style="
          height: 380px;
          background-image: url('https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&w=1201&h=676&crop=1');
        "
        title="Woman holding a mug"
      ></div>
      <div class="content-center">
        <div>
          <span class="text-weight-size">
            {{ dataSult?.title }}
          </span>
          <div class="content-center">
            <p>{{ dataSult?.body }}</p>
          </div>
        </div>
      </div>
    </div>
  </a-spin>
</template>

<style>
.button-preview.ant-btn {
  border-color: green;
  color: green;
  border-radius: 16px;
}
.button-preview.ant-btn:hover {
  border-color: rgb(111, 141, 241);
  color: rgb(111, 141, 241);
}
</style>

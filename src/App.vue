<script setup>
import { reactive } from "vue";
const state = reactive({
  message: "hello world",
});
</script>

<template>
  <div class="hello-world">
    {{ state.message }}
  </div>
</template>

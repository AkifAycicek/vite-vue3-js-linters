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

<style lang="scss">
@import "bootstrap/scss/reboot";

.hello-world {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow-x: auto;
  font-family: "Courier New", Courier, monospace;
  font-size: 3rem;
  color: black;
  text-align: center;
  background-color: rgb(209 206 19);
  transition: color 1s, background-color 1s;

  @include media-breakpoint-down(sm) {
    color: white;
    background-color: tomato;
  }
}
</style>

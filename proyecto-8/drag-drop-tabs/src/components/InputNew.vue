<script setup>
import { ref, defineEmits } from "vue";

const text = ref("");
const emits = defineEmits(["onNewItem"]);

function handleSubmit() {
  if (text !== "") {
    //mandar a llamar el emit
    emits("onNewItem", text);
    text.value = "";
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input
      class="bg-white outline-none border-0 rounded h-7 mt-1.5 mb-2.5 focus:border-2 focus:border-green-500"
      type="text"
      v-model="text"
    />
  </form>
</template>

<style scoped></style>

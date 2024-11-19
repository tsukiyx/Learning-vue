<template>
  <h1 class="m-4">
    What's up
    <input class="border-0" type="text" v-model="userName" placeholder="Enter your name here" />
  </h1>
</template>

<script setup lang="ts">
import { useTodo } from '@/composable/UseTodo';

const { userName } = useTodo();
</script>

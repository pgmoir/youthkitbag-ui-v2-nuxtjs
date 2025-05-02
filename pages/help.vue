<script setup lang="ts">
const { data: help } = await useAsyncData(() =>
  queryCollection('content').path('/').first()
);

useSeoMeta({
  title: help.value?.title,
  description: help.value?.description,
});
</script>

<template>
  <ContentRenderer v-if="help" :value="help" />
  <div v-else>Help not found</div>
</template>

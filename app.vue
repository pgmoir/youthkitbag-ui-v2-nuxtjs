<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: { 'data-theme': 'nord' },
  titleTemplate: (titleChunk) =>
    titleChunk
      ? `${titleChunk} · YouthKitbag Nuxt`
      : 'YouthKitbag Nuxt - Inventory, Trade, Aquire, Reporting for all your youth kit',
  meta: [
    {
      name: 'description',
      content: 'Your ultimate toolkit for youth activities.',
    },
  ],
});
</script>

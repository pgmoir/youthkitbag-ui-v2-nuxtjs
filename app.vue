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
  titleTemplate: (titleChunk) =>
    titleChunk
      ? `${titleChunk} · YouthKitbag Nuxt`
      : 'YouthKitbag Nuxt - Inventory, Trade, Aquire, Reporting for all your youth kit',
});
</script>

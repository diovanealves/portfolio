<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <div
    class="inline-flex animate-pulse items-center gap-2 rounded-xl bg-green-100 px-3 py-2 text-green-900 transition-all hover:bg-green-200 dark:bg-green-900 dark:text-green-100"
  >
    <div
      class="h-2 w-2 animate-ping rounded-full bg-green-700 dark:bg-green-300"
    />
    <h1>{{ t("hero.available") }}</h1>
  </div>
</template>

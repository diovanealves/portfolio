<script setup lang="ts">
import { NuxtLink } from "#components";

const { t } = useI18n();
</script>

<template>
  <BaseCard :title="t('social.title')">
    <template #icon
      ><Icon
        name="lucide:external-link"
        class="text-2xl text-blue-500 dark:text-blue-400"
    /></template>

    <template #content>
      <div class="flex items-center justify-center gap-2">
        <NuxtLink
          to="https://www.linkedin.com/in/alvdiovane/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          class="inline-flex items-center rounded-lg border-2 border-blue-500 p-1 text-blue-500 hover:bg-blue-500/10 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400/10"
        >
          <Icon
            name="lucide:linkedin"
            size="30"
            class="text-blue-600/80 dark:text-blue-400/80"
        /></NuxtLink>

        <NuxtLink
          to="https://github.com/diovanealves"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
          class="inline-flex items-center rounded-lg border-2 border-blue-500 p-1 text-blue-500 hover:bg-blue-500/10 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400/10"
        >
          <Icon
            name="lucide:github"
            size="30"
            class="text-blue-600/80 dark:text-blue-400/80"
          />
        </NuxtLink>

        <NuxtLink
          to="https://www.instagram.com/diovanealv/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          class="inline-flex items-center rounded-lg border-2 border-blue-500 p-1 text-blue-500 hover:bg-blue-500/10 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400/10"
        >
          <Icon
            name="lucide:instagram"
            size="30"
            class="text-blue-600/80 dark:text-blue-400/80"
          />
        </NuxtLink></div></template
  ></BaseCard>
</template>

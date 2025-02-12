<script setup lang="ts">
import { NuxtLink } from "#components";

const props = defineProps<{ to?: string; title: string }>();
const { locale } = useI18n();

const computedPath = computed(() => {
  return props.to ? `/${locale.value}${props.to}` : null;
});
</script>

<template>
  <component
    :is="computedPath ? NuxtLink : 'div'"
    :to="computedPath"
    :aria-label="title"
    role="link"
  >
    <div
      class="group relative z-0 block cursor-pointer overflow-hidden border border-blue-100/20 bg-gradient-to-b from-white to-blue-50/50 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md dark:from-zinc-900 dark:to-blue-950/20"
    >
      <div
        class="bg-grid-blue-500/[0.02] dark:bg-grid-white-500/[0.02] absolute inset-0 [mask-image:linear-gradient(0deg,transparent,black)]"
      />

      <div class="relative p-6 sm:p-8">
        <div class="group mb-6 flex items-center justify-between gap-4">
          <div class="relative flex items-center gap-2">
            <div
              class="absolute inset-0 rounded-full bg-blue-100 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-90 dark:bg-blue-500/20"
            />
            <slot name="icon" />

            <h2
              class="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-xl font-semibold text-transparent dark:from-blue-400 dark:to-blue-300"
            >
              {{ title }}
            </h2>
          </div>
          <Icon
            v-if="computedPath"
            name="lucide:move-up-right"
            class="my-auto flex transform items-center text-blue-500 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
            size="20"
          />
        </div>

        <div class="space-y-3">
          <slot name="content" />
        </div>
      </div>
      <div
        class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"
      />
    </div>
  </component>
</template>

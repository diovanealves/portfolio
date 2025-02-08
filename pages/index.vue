<script setup lang="ts">
const { locale } = useI18n();

useHead({
  title: "Diovane Alves",
  htmlAttrs: {
    lang: locale.value,
  },
  meta: [
    {
      name: "description",
      content:
        "Desenvolvedor Full Stack apaixonado por transformar ideias em experiências digitais memoráveis. Especializado em soluções web de alta performance.",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      hid: "robots",
      name: "robots",
      content: "index, follow",
    },
  ],
});
</script>

<template>
  <main class="mx-auto mt-12 w-11/12 max-w-5xl px-4">
    <HeroSection />

    <AboutMe />
  </main>
</template>

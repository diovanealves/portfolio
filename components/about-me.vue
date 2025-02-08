<script setup lang="ts">
import { BaseCard } from "#components";
</script>

<template>
  <div class="relative">
    <BaseCard to="/about-me" title="Sobre Mim">
      <template #icon>
        <Icon
          name="lucide:sparkles"
          class="text-2xl text-blue-500 dark:text-blue-400"
        />
      </template>

      <template #content>
        <p class="leading-relaxed text-zinc-600 dark:text-zinc-300">
          Com mais de 3 anos de experiência no desenvolvimento web,
          especializei-me em criar aplicações robustas e escaláveis. Minha
          jornada começou com uma paixão por resolver problemas complexos e
          evoluiu para uma carreira dedicada a construir experiências digitais
          excepcionais.
        </p>
        <p class="leading-relaxed text-zinc-600 dark:text-zinc-300">
          Atualmente, sou desenvolvedor full stack, com foco principal na
          criação de soluções web de alta performance. Tenho experiência em
          tecnologias como Vue.js, React, Node.js, Java e Tailwind CSS, entre
          outras.
        </p>
        <p class="leading-relaxed text-zinc-600 dark:text-zinc-300">
          Sou um eterno aprendiz, sempre atento às últimas tendências e melhores
          práticas do setor. Acredito no poder da tecnologia para transformar
          negócios e vidas, e essa é minha maior motivação diária.
        </p>
      </template>
    </BaseCard>
  </div>
</template>

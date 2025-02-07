<template>
  <header class="flex items-start justify-between">
    <div>
      <StatusBadge />
      <h1
        class="mb-3 mt-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-6xl font-bold text-transparent dark:from-blue-300 dark:to-blue-500"
      >
        Diovane Alves
      </h1>
      <p class="max-w-2xl text-xl text-gray-700 dark:text-gray-300">
        Desenvolvedor Full Stack apaixonado por transformar ideias em
        experiências digitais memoráveis. Com um olhar aguçado para design e
        performance, crio soluções que não só funcionam, mas encantam.
      </p>

      <a
        href="/CurriculoDiovane.pdf"
        download
        rel="noopener"
        class="mt-3 inline-flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-gray-900 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
      >
        <Icon name="lucide:download" class="h-5 w-5" />
        Baixar Currículo
      </a>
    </div>

    <button
      class="inline-flex items-center justify-center rounded-md border-2 p-2 transition-all duration-300 ease-in-out hover:border-zinc-300 hover:bg-zinc-300/60 active:scale-95 dark:border-zinc-700 dark:hover:border-zinc-600 dark:hover:bg-zinc-800/60"
      aria-label="Alternar tema"
      type="button"
    >
      <Icon
        name="lucide:sun"
        class="h-5 w-5 text-gray-900 transition-colors dark:text-white"
      />
    </button>
  </header>
</template>

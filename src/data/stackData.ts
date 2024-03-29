import * as backEnd from "@/assets/stack/back-end/index";
import * as database from "@/assets/stack/database/index";
import * as frontEnd from "@/assets/stack/front-end/index";
import * as infra from "@/assets/stack/infra/index";
import type { stackProps } from "@/types/stack.interface";

export const stackData: stackProps[] = [
  {
    image: frontEnd.javascript,
    title: "JavaScript",
    href: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
  },
  {
    image: frontEnd.typescript,
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
  },
  {
    image: frontEnd.react,
    title: "React",
    href: "https://react.dev/",
  },
  {
    image: frontEnd.tailwindCss,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
  },
  {
    image: frontEnd.radixUi,
    title: "Radix UI",
    href: "https://www.radix-ui.com/",
    classname: "dark:invert",
  },
  {
    image: frontEnd.nextjs,
    title: "Next.js",
    href: "https://nextjs.org/",
    classname: "dark:invert",
  },
  {
    image: frontEnd.tanstackQuery,
    title: "Tanstack Query",
    href: "https://tanstack.com/query/latest",
  },
  {
    image: frontEnd.vitejs,
    title: "Vite.js",
    href: "https://vitejs.dev/",
  },

  {
    image: backEnd.nodeJS,
    title: "Node.js",
    href: "https://nodejs.org/en",
  },
  {
    image: backEnd.nestJS,
    title: "Nest.js",
    href: "https://nestjs.com/",
  },
  {
    image: backEnd.expressJS,
    title: "Express.js",
    href: "https://expressjs.com/",
    classname: "dark:invert",
  },
  {
    image: backEnd.fastify,
    title: "Fastify",
    href: "https://fastify.dev/",
    classname: "dark:invert",
  },
  {
    image: backEnd.prismaOrm,
    title: "Prisma ORM",
    href: "https://www.prisma.io/",
    classname: "dark:invert",
  },
  {
    image: backEnd.drizzleOrm,
    title: "Drizzle ORM",
    href: "https://orm.drizzle.team/",
    classname: "dark:invert",
  },

  {
    image: infra.docker,
    title: "Docker",
    href: "https://www.docker.com/",
  },
  {
    image: infra.supabase,
    title: "Supabase",
    href: "https://supabase.com/",
  },
  {
    image: database.mongoDb,
    title: "MongoDB",
    href: "https://www.mongodb.com/pt-br",
  },
  {
    image: database.postgreesql,
    title: "PostgreSQL",
    href: "https://www.postgresql.org/",
  },
];

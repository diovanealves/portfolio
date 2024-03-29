import { projectQuery } from "@/graphql/project.query";

export default async function fetchProjects({
  language,
}: {
  language: string;
}) {
  const response = await fetch(
    import.meta.env.HYGRAPH_ENDPOINT,
    projectQuery(language),
  );
  const json = await response.json();
  return json.data.projects;
}

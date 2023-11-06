import { About } from "@/types/About";
import { createClient, groq } from "next-sanity";

export async function getAboutData(): Promise<About[]> {
  const client = createClient({
    projectId: "nyy5s5jb",
    dataset: "production",
    apiVersion: "2023-11-06",
  });

  return client.fetch(
    groq`*[_type == "about"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "icon": icon.asset->url,
            content
        }`
  );
}

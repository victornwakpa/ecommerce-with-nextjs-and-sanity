// import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url"


export const client = createClient({
    projectId: "rg0avo4b",
    dataset: "production",
    apiVersion: "2022-03-07",
    useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
}
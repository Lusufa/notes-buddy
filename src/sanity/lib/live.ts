// src/sanity/lib/live.ts
import { client } from "@/sanity/lib/client";

// Simple fetch function you can use anywhere
export const sanityFetch = client.fetch.bind(client);

// Optional: create a configured client if you want a specific API version
export const liveClient = client.withConfig({
  apiVersion: "2025-01-01", // replace with the API version you want
});

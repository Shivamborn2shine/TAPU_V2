export async function fetchAPI(query: string, { variables }: { variables?: any } = {}) {
  const headers: any = { "Content-Type": "application/json" };
  const wpUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

  if (!wpUrl) {
    console.warn("NEXT_PUBLIC_WORDPRESS_API_URL is not set.");
    return null;
  }

  const res = await fetch(wpUrl, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  });

  const json = await res.json();
  
  if (json.errors) {
    console.error("GraphQL Errors:", json.errors);
    throw new Error("Failed to fetch API");
  }
  
  return json.data;
}

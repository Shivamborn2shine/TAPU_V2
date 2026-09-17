import { brands } from "../data/brands";
import { journalArticles } from "../data/journal";
import { fetchAPI } from "./api";

// This file serves as the abstraction layer to fetch content from WordPress.

export async function getBrands() {
  try {
    // Attempt to fetch from WPGraphQL (Assuming standard Pages or a Custom Post Type 'Brand')
    // If you don't use CPTs, we can query Pages with a specific category.
    // For now, we fallback to static data if WPGraphQL is not yet active.
    const data = await fetchAPI(`
      query GetBrands {
        brands {
          nodes {
            slug
            title
            content
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    `);
    
    if (data?.brands?.nodes?.length > 0) {
      return data.brands.nodes.map((node: any) => ({
        id: node.slug,
        slug: node.slug,
        name: node.title,
        description: node.content,
        imageUrl: node.featuredImage?.node?.sourceUrl || "/brands/placeholder.jpg",
      }));
    }
  } catch (error) {
    // Silently fallback to static data
  }
  return brands;
}

export async function getBrandBySlug(slug: string) {
  // Similar logic can be added here
  return brands.find((b) => b.slug === slug);
}

export async function getJournalArticles() {
  try {
    const data = await fetchAPI(`
      query GetPosts {
        posts(first: 10) {
          nodes {
            id
            title
            slug
            excerpt
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    `);
    
    if (data?.posts?.nodes?.length > 0) {
      return data.posts.nodes.map((post: any) => ({
        id: post.id,
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt?.replace(/<[^>]+>/g, ''), // Strip basic HTML
        category: "Journal", // Hardcoded fallback category
        imageUrl: post.featuredImage?.node?.sourceUrl || "/journal/default.jpg",
        date: new Date(post.date).toLocaleDateString(),
      }));
    }
  } catch (error) {}
  
  return journalArticles;
}

export async function getJournalArticleBySlug(slug: string) {
  return journalArticles.find((a) => a.slug === slug);
}

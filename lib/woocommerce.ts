import { fetchAPI } from "./api";

// This file serves as the abstraction layer to fetch commerce data from WooCommerce.

export interface Product {
  id: string; // Database ID needed for add-to-cart URL
  name: string;
  price: string;
  sku: string;
  databaseId?: number;
}

export async function getProductBySku(sku: string): Promise<Product | null> {
  try {
    const data = await fetchAPI(`
      query GetProduct($sku: String) {
        product(id: $sku, idType: SKU) {
          id
          databaseId
          name
          sku
          ... on SimpleProduct {
            price
          }
          ... on VariableProduct {
            price
          }
        }
      }
    `, { variables: { sku } });

    if (data?.product) {
      return {
        id: data.product.id,
        databaseId: data.product.databaseId,
        name: data.product.name,
        price: data.product.price?.replace(/<[^>]+>/g, ''), // Clean HTML from price string if any
        sku: data.product.sku,
      };
    }
  } catch (error) {
    // Fallback to static mock data during transition
  }

  // Mock data for now:
  if (sku === "tapu-signature-250") {
    return {
      id: "prod_1",
      databaseId: 101, // Mock DB ID
      name: "TAPU Signature Assam Blend",
      price: "1200",
      sku: "tapu-signature-250",
    };
  }
  return null;
}

// Generate the redirect URL for WooCommerce
export const getCheckoutUrl = (productId: number, quantity: number = 1) => {
  // Directly add the product to the WooCommerce cart and skip to checkout
  return `https://shop.xowad.in/checkout/?add-to-cart=${productId}&quantity=${quantity}`;
};

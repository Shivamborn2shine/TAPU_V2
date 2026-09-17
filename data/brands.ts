export interface Brand {
  id: string;
  name: string;
  description: string;
  slug: string;
}

export const brands: Brand[] = [
  {
    id: "tapu",
    name: "TAPU",
    description: "The first major consumer expression of XOWAD. Signature Assam tea, designed to make the everyday ritual feel unmistakably of its place.",
    slug: "tapu",
  },
  {
    id: "cha",
    name: "CHA",
    description: "A premium Assam tea direction within the house — reserved for a distinct expression, collection or audience.",
    slug: "cha",
  },
  {
    id: "xah",
    name: "XAH",
    description: "A future-facing brand space for another chapter of the XOWAD tea and food universe.",
    slug: "xah",
  },
];

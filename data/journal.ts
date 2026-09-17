export interface JournalArticle {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  slug: string;
}

export const journalArticles: JournalArticle[] = [
  {
    id: "field-note-1",
    category: "Assam · Field Note",
    title: "What place leaves behind.",
    excerpt: "Stories, landscapes and observations from the places that shape XOWAD.",
    slug: "what-place-leaves-behind",
  },
  {
    id: "craft-1",
    category: "Tea · Craft",
    title: "The ritual of a cup.",
    excerpt: "A closer look at the details behind a familiar everyday moment.",
    slug: "the-ritual-of-a-cup",
  },
  {
    id: "people-1",
    category: "People · Making",
    title: "Hands behind the experience.",
    excerpt: "Human connection, making and the work that should never disappear behind a label.",
    slug: "hands-behind-the-experience",
  },
];

// Our "database" for now. In a real app this data would come from MySQL or an API.

export type MenuItem = {
  slug: string; // used in the URL: /menu/butter-chicken
  name: string;
  emoji: string;
  category: "Starters" | "Mains" | "Breads" | "Drinks" | "Desserts";
  price: number;
  veg: boolean;
  description: string;
};

const menu: MenuItem[] = [
  {
    slug: "samosa",
    name: "Samosa (2 pcs)",
    emoji: "🥟",
    category: "Starters",
    price: 8.9,
    veg: true,
    description: "Crispy pastry filled with spiced potatoes and peas, served with mint and tamarind chutney.",
  },
  {
    slug: "paneer-tikka",
    name: "Paneer Tikka",
    emoji: "🧀",
    category: "Starters",
    price: 16.9,
    veg: true,
    description: "Cottage cheese cubes marinated in yoghurt and spices, chargrilled in the tandoor.",
  },
  {
    slug: "butter-chicken",
    name: "Butter Chicken",
    emoji: "🍛",
    category: "Mains",
    price: 22.9,
    veg: false,
    description: "Tender tandoori chicken simmered in a rich, creamy tomato and butter sauce.",
  },
  {
    slug: "chicken-biryani",
    name: "Chicken Biryani",
    emoji: "🍚",
    category: "Mains",
    price: 21.9,
    veg: false,
    description: "Fragrant basmati rice layered with spiced chicken, saffron and fried onions.",
  },
  {
    slug: "masala-dosa",
    name: "Masala Dosa",
    emoji: "🥞",
    category: "Mains",
    price: 15.9,
    veg: true,
    description: "Crispy rice and lentil crepe stuffed with spiced potato, served with sambar and chutney.",
  },
  {
    slug: "garlic-naan",
    name: "Garlic Naan",
    emoji: "🫓",
    category: "Breads",
    price: 4.5,
    veg: true,
    description: "Soft tandoor-baked bread brushed with garlic butter and coriander.",
  },
  {
    slug: "mango-lassi",
    name: "Mango Lassi",
    emoji: "🥭",
    category: "Drinks",
    price: 6.5,
    veg: true,
    description: "Chilled yoghurt drink blended with sweet Alphonso mango.",
  },
  {
    slug: "masala-chai",
    name: "Masala Chai",
    emoji: "☕",
    category: "Drinks",
    price: 4.9,
    veg: true,
    description: "Traditional Indian tea brewed with milk, ginger, cardamom and spices.",
  },
  {
    slug: "gulab-jamun",
    name: "Gulab Jamun",
    emoji: "🍮",
    category: "Desserts",
    price: 7.9,
    veg: true,
    description: "Warm milk dumplings soaked in rose and cardamom syrup.",
  },
];

// These functions are "async" to mimic a real database call (like $model->find() in Yii2).
// Later you can swap the inside for a real DB query without changing the pages.

export async function getMenu(): Promise<MenuItem[]> {
  return menu;
}

export async function getMenuItem(slug: string): Promise<MenuItem | undefined> {
  return menu.find((item) => item.slug === slug);
}

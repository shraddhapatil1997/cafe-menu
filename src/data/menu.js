export const MENU_ITEMS = [
  {
    id: 'espresso',
    name: 'Espresso',
    category: 'Coffee',
    description: 'Rich and bold single shot of espresso.',
    price: 2.5,
    image:
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    category: 'Coffee',
    description: 'Espresso with steamed milk and foam.',
    price: 3.9,
    image:
      'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'latte',
    name: 'Latte',
    category: 'Coffee',
    description: 'Smooth espresso with steamed milk.',
    price: 4.2,
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'iced-tea',
    name: 'Iced Tea',
    category: 'Tea',
    description: 'Freshly brewed tea with lemon.',
    price: 2.8,
    image: new URL('../assets/iced-tea.webp', import.meta.url).href,
  },
  {
    id: 'matcha-latte',
    name: 'Matcha Latte',
    category: 'Tea',
    description: 'Creamy matcha with steamed milk.',
    price: 4.4,
    image: new URL('../assets/Matcha-Latte.jpg', import.meta.url).href,
  },
  {
    id: 'croissant',
    name: 'Butter Croissant',
    category: 'Bakery',
    description: 'Flaky croissant baked daily.',
    price: 3.2,
    image:
      'https://images.unsplash.com/photo-1464347744102-11db6282f854?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'muffin',
    name: 'Blueberry Muffin',
    category: 'Bakery',
    description: 'Soft muffin with real blueberries.',
    price: 3.5,
    image:
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'sandwich',
    name: 'Chicken Sandwich',
    category: 'Savory',
    description: 'Grilled chicken with fresh greens.',
    price: 6.5,
    image: new URL('../assets/Chicken-Sandwich.jpg', import.meta.url).href,
  },
];

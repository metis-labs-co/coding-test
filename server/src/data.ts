export interface Item {
  id: number;
  name: string;
  category: string;
  price: number;
  inStock: boolean;
}

export const items: Item[] = [
  { id: 1, name: "Mechanical Keyboard", category: "Electronics", price: 89.99, inStock: true },
  { id: 2, name: "Wireless Mouse", category: "Electronics", price: 29.5, inStock: true },
  { id: 3, name: "Standing Desk", category: "Furniture", price: 349, inStock: false },
  { id: 4, name: "Desk Lamp", category: "Furniture", price: 24.99, inStock: true },
  { id: 5, name: "Notebook (A5)", category: "Stationery", price: 6.75, inStock: true },
  { id: 6, name: "Fountain Pen", category: "Stationery", price: 42, inStock: false },
  { id: 7, name: "USB-C Hub", category: "Electronics", price: 45.0, inStock: true },
  { id: 8, name: "Ergonomic Chair", category: "Furniture", price: 219.99, inStock: true },
];

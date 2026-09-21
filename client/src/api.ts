import type { Item } from "./types";

export async function fetchItems(search = ""): Promise<Item[]> {
  const res = await fetch(`/api/items?search=${encodeURIComponent(search)}`);
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.json();
}

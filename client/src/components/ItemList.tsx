import { useEffect, useState } from "react";
import { fetchItems } from "@/api";
import type { Item } from "@/types";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function ItemList() {
  const [items, setItems] = useState<Item[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchItems(search)
      .then(setItems)
      .catch((e: Error) => setError(e.message))
      .finally(() => setLoading(false));
  }, [search]);

  return (
    <div className="space-y-4">
      <Input
        type="text"
        placeholder="Search items..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {error && (
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {loading && (
        <div className="space-y-3">
          {[0, 1, 2].map((n) => (
            <Skeleton key={n} className="h-20 w-full" />
          ))}
        </div>
      )}

      {!loading && !error && items.length === 0 && (
        <p className="text-muted-foreground">No items found.</p>
      )}

      {!loading && (
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item.id}>
              <Card>
                <CardHeader className="flex flex-row items-start justify-between">
                  <div>
                    <CardTitle>{item.name}</CardTitle>
                    <CardDescription>{item.category}</CardDescription>
                  </div>
                  <Badge variant={item.inStock ? "default" : "secondary"}>
                    {item.inStock ? "In stock" : "Out of stock"}
                  </Badge>
                </CardHeader>
                <CardContent className="font-medium">{new Intl.NumberFormat("en-AU", { style: "currency", currency: "AUD" }).format(item.price)}</CardContent>
              </Card>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

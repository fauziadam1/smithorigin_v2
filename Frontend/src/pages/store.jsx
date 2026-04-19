import { ProductCard } from "@/components/product-card";
import { Card, CardContent } from "@/components/ui/card";

export default function Store() {
  return (
    <div className="w-full min-h-screen py-5 px-30 space-y-10">
      <Card>
        <CardContent>
          <div className="flex items-center justify-center py-10">
            <h1 className="font-bold text-4xl">
              Welcome King, Have a look around.
            </h1>
          </div>
        </CardContent>
      </Card>
      <div>
        <ProductCard />
      </div>
    </div>
  );
}

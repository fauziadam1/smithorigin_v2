import { Card, CardContent, CardHeader } from "./ui/card";

export function ProductCard() {
  return (
    <Card className="w-70">
      <img
        src="/vortexseries.png"
        alt="Event cover"
        className="relative w-full h-70 z-20 aspect-video object-cover"
      />
      <CardContent>
        <div>
            <h1></h1>
        </div>
      </CardContent>
    </Card>
  );
}

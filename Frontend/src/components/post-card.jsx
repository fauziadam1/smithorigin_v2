import { ThumbsUp } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

export function PostCard() {
  return (
    <Card>
      <CardContent>
        <img
          src="/post.jpg"
          alt="Event cover"
          className="relative w-full h-70 z-20 aspect-video object-cover rounded-lg border"
        />
        <div className="mt-5 space-y-2">
          <h1 className="font-semibold text-xl">Apa itu Keyboard?</h1>
          <p className="text-muted-foreground line-clamp-3 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            deserunt numquam nulla maiores repellendus magnam modi iure aut
            accusantium dignissimos, temporibus nam rerum! Natus, atque nihil
            aspernatur eveniet aliquid omnis.
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant="secondary" size="lg">
          <ThumbsUp />
        </Button>
      </CardFooter>
    </Card>
  );
}

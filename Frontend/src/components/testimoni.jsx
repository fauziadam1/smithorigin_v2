import { Star } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "./ui/avatar";
import { Card, CardContent } from "./ui/card";

export default function Testimoni() {
  return (
    <div className="flex flex-col items-center gap-12 border-t-2 border-dashed border-b-2 w-full bg-background py-10">
      <div className="flex flex-col items-center text-center space-y-2 px-10">
        <h1 className="text-muted-foreground -tracking-tighter text-sm">
          OUR RATING STORE
        </h1>
        <h1 className="font-bold text-3xl sm:text-4xl">
          Start shopping at <span className="text-primary">smithorigin.</span>
        </h1>
        <p className="text-muted-foreground text-lg sm:text-xl max-w-xl">
          Join thousands of engineers who traded fighting their tools for
          shipping features.
        </p>
      </div>
      <div className="flex flex-col items-center gap-6">
        <div className="inline-flex flex-col items-center gap-3">
          <AvatarGroup>
            <Avatar size="lg">
              <AvatarFallback className="bg-blue-100 text-blue-600 font-medium text-xs">
                JD
              </AvatarFallback>
            </Avatar>
            <Avatar size="lg">
              <AvatarFallback className="bg-rose-100 text-rose-600 font-medium text-xs">
                AS
              </AvatarFallback>
            </Avatar>
            <Avatar size="lg">
              <AvatarFallback className="bg-emerald-100 text-emerald-600 font-medium text-xs">
                RK
              </AvatarFallback>
            </Avatar>
            <Avatar size="lg">
              <AvatarFallback className="bg-amber-100 text-amber-600 font-medium text-xs">
                ML
              </AvatarFallback>
            </Avatar>
            <Avatar size="lg">
              <AvatarGroupCount className="bg-muted text-muted-foreground text-[10px] font-bold">
                +7.4k
              </AvatarGroupCount>
            </Avatar>
          </AvatarGroup>
          <h1 className="text-muted-foreground">
            Trusted by{" "}
            <span className="font-semibold text-foreground">7,417+</span>{" "}
            customers
          </h1>
        </div>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className="fill-amber-400 text-amber-400 size-5"
            />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Card>
          <CardContent>
            <div className="flex flex-col items-center gap-2 px-20 py-5">
              <p className="text-sm text-muted-foreground">RATING</p>
              <h1 className="font-bold text-4xl">4.9/5</h1>
              <p className="text-muted-foreground text-sm">7,417 reviewers</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="flex flex-col items-center gap-2 px-20 py-5">
              <p className="text-sm text-muted-foreground">PERFORMANCE</p>
              <h1 className="font-bold text-4xl">54k sold</h1>
              <p className="text-muted-foreground text-sm">54rb produk terjual</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

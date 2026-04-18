import Logo from "./svgs/logo";
import { Link } from "react-router";
import { Search } from "lucide-react";
import { Item } from "./item-navigation";
import { Separator } from "./ui/separator";
import { ModeToggle } from "./mode-toggle";
import { NavLink } from "react-router";
import { SocialMedia } from "./link-social-media";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";

export function Header() {
  return (
    <div className="w-full border-b flex items-center justify-between py-3.5 px-30 sticky z-50 bg-background top-0">
      <Link to={"/"} className="flex items-center gap-2">
        <Logo className="size-7 text-[#930819]" />
        <h1 className="font-bold text-[18px]">Smith Origin</h1>
      </Link>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-5">
          {Item.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => (
                "inline-flex transition-colors hover:text-foreground",
                isActive
                  ? "text-foreground font-medium"
                  : "text-muted-foreground"
              )}
            >
              <h1 className="text-sm">{item.title}</h1>
            </NavLink>
          ))}
        </div>
        <Separator orientation="vertical" />
        <div className="flex items-center gap-3">
          <InputGroup className="min-w-sm">
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
              <Search />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
          </InputGroup>
          <ModeToggle />
        </div>
        <Separator orientation="vertical" />
        <SocialMedia />
      </div>
    </div>
  );
}

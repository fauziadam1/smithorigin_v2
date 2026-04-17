import { Search } from "lucide-react";
import { Link } from "react-router";
import Logo from "./svgs/logo";
import { Separator } from "./ui/separator";
import { ModeToggle } from "./mode-toggle";
import { SocialMedia } from "./link-social-media";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";

export function Header() {
  return (
    <div className="w-full border-b flex items-center justify-between py-3.5 px-30 fixed z-50 bg-background">
      <Link to={"/"} className="flex items-center gap-2">
        <Logo className="size-7 text-[#930819]" />
        <h1 className="font-bold text-[18px]">Smith Origin</h1>
      </Link>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-5">
          <Link
            to={"/"}
            className="inline-flex text-muted-foreground text-sm hover:text-foreground dark:hover:text-foreground"
          >
            Home
          </Link>
          <Link
            to={"/"}
            className="inline-flex text-muted-foreground text-sm hover:text-foreground dark:hover:text-foreground"
          >
            Product
          </Link>
          <Link
            to={"/"}
            className="inline-flex text-muted-foreground text-sm hover:text-foreground dark:hover:text-foreground"
          >
            Blog
          </Link>
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

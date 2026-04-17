import { Home, HomeIcon, Newspaper, Users2Icon } from "lucide-react";
import { Link } from "react-router";
import { Button } from "./ui/button";

export function Header() {
  return (
    <div className="w-full border-b flex items-center justify-between py-4 px-5 fixed">
      <Link to={"/"} className="flex items-center gap-2">
        <img src="/logo.png" alt="smithorigin" className="w-7" />
        <h1 className="font-semibold tracking-[1px]">Smith Origin</h1>
      </Link>
      <div className="flex items-center gap-5">
        <Link to={"/"} className="inline-flex font-medium">
          <Button variant="ghost">Home</Button>
        </Link>
        <Link to={"/blog"} className="inline-flex font-medium">
          <Button variant="ghost">Blog</Button>
        </Link>
        <Link to={"/about"} className="inline-flex font-medium">
          <Button variant="ghost">About Us</Button>
        </Link>
      </div>
      <div>
        <Link to={'/'}>
          <Button size="icon" variant="ghost">
            <Home />
          </Button>
        </Link>
      </div>
    </div>
  );
}

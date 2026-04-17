import { Link } from "react-router";
import Instagram from "./svgs/instagram";
import Tiktok from "./svgs/tiktok";
import Youtube from "./svgs/youtube";

export function SocialMedia() {
  return (
    <div className="inline-flex items-center gap-2">
      <Link
        to={"/"}
        className="text-muted-foreground hover:text-foreground dark:hover:text-foreground"
      >
        <Instagram className="size-6" />
      </Link>
      <Link
        to={"/"}
        className="text-muted-foreground hover:text-foreground dark:hover:text-foreground"
      >
        <Tiktok className="size-5" />
      </Link>
      <Link
        to={"/"}
        className="text-muted-foreground hover:text-foreground dark:hover:text-foreground"
      >
        <Youtube className="size-6" />
      </Link>
    </div>
  );
}

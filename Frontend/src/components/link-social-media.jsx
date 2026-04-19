import { Link } from "react-router";
import Instagram from "./svgs/instagram";
import Tiktok from "./svgs/tiktok";
import Youtube from "./svgs/youtube";

export function SocialMedia() {
  return (
    <div className="inline-flex items-center gap-2">
      <Link
        to={"https://www.instagram.com/smithorigin.id/"}
        className="text-muted-foreground hover:text-foreground dark:hover:text-foreground"
      >
        <Instagram className="size-5.5" />
      </Link>
      <Link
        to={"https://www.tiktok.com/@smithorigin"}
        className="text-muted-foreground hover:text-foreground dark:hover:text-foreground"
      >
        <Tiktok className="size-4.5" />
      </Link>
      <Link
        to={"https://www.youtube.com/@smithorigin"}
        className="text-muted-foreground hover:text-foreground dark:hover:text-foreground"
      >
        <Youtube className="size-5" />
      </Link>
    </div>
  );
}

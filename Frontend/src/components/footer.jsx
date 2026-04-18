import { Link } from "react-router";
import Logo from "./svgs/logo";
import { Button } from "./ui/button";
import { Globe } from "lucide-react";

export function Footer() {
  return (
    <div className="border-t flex flex-col items-center pt-10 mt-30 space-y-15">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          <Logo className="size-7 text-[#930819]" />
          <h1 className="font-bold text-lg">Smith Origin</h1>
        </div>
        <p className="text-muted-foreground max-w-lg text-center text-lg">
          Smith Origin menyediakan gaming gear berkualitas tinggi untuk performa
          maksimal di setiap permainan.
        </p>
      </div>
      <div className="flex items-start justify-between w-full px-30">
        <span className="flex flex-col gap-2">
          <h1 className="font-semibold text-lg">Category</h1>
          <Link to={'/'}>
            <Button variant="link" className="p-0 text-muted-foreground text-lg font-normal">Keyboard</Button>
          </Link>
          <Link to={'/'}>
            <Button variant="link" className="p-0 text-muted-foreground text-lg font-normal">Mouse</Button>
          </Link>
          <Link to={'/'}>
            <Button variant="link" className="p-0 text-muted-foreground text-lg font-normal">Headset</Button>
          </Link>
          <Link to={'/'}>
            <Button variant="link" className="p-0 text-muted-foreground text-lg font-normal">Keyboard Mechanical</Button>
          </Link>
        </span>
         <span className="flex flex-col gap-2">
          <h1 className="font-semibold text-lg">Links</h1>
          <Link to={'/'}>
            <Button variant="link" className="p-0 text-muted-foreground text-lg font-normal">Home</Button>
          </Link>
          <Link to={'/'}>
            <Button variant="link" className="p-0 text-muted-foreground text-lg font-normal">Store</Button>
          </Link>
          <Link to={'/'}>
            <Button variant="link" className="p-0 text-muted-foreground text-lg font-normal">Blog</Button>
          </Link>
          <Link to={'/'}>
            <Button variant="link" className="p-0 text-muted-foreground text-lg font-normal">About Us</Button>
          </Link>
        </span>
        <span className="flex flex-col gap-2">
          <h1 className="font-semibold text-lg">Social Media</h1>
          <Link to={'https://www.tiktok.com/@smithorigin'}>
            <Button variant="link" className="p-0 text-muted-foreground text-lg font-normal">Tiktok</Button>
          </Link>
          <Link to={'https://www.instagram.com/smithorigin.id/'}>
            <Button variant="link" className="p-0 text-muted-foreground text-lg font-normal">Instagram</Button>
          </Link>
          <Link to={'https://www.youtube.com/@smithorigin'}>
            <Button variant="link" className="p-0 text-muted-foreground text-lg font-normal">Youtube</Button>
          </Link>
        </span>
        <span className="flex flex-col gap-2">
          <h1 className="font-semibold text-lg">Marketplace</h1>
          <Link to={'https://www.tokopedia.com/smithorigin'}>
            <Button variant="link" className="p-0 text-muted-foreground text-lg font-normal">Tokopedia</Button>
          </Link>
          <Link to={'https://shopee.co.id/smithorigin'}>
            <Button variant="link" className="p-0 text-muted-foreground text-lg font-normal">Shopee</Button>
          </Link>
        </span>
        <span className="flex flex-col gap-2">
          <h1 className="font-semibold text-lg">Community</h1>
          <Link to={'https://discord.gg/ME4EeXzr'}>
            <Button variant="link" className="p-0 text-muted-foreground text-lg font-normal">Discord</Button>
          </Link>
        </span>
      </div>
      <div className="border-t-2 border-dashed flex items-center justify-between w-full px-30 py-5">
        <h1 className="text-muted-foreground">
          © 2026{" "}
          <span className="font-medium text-foreground">Smith Origin</span>. All
          rights reserved.
        </h1>
        <span className="inline-flex items-center gap-2 text-muted-foreground"><Globe className="size-4"/>Indonesia, Tangerang</span>
      </div>
    </div>
  );
}

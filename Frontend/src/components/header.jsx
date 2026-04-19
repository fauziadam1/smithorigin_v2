/* eslint-disable no-unused-vars */
import Logo from "./svgs/logo";
import { useState } from "react";
import { Button } from "./ui/button";
import Discord from "./svgs/discord";
import { motion } from "motion/react";
import { Item } from "./item-navigation";
import { ChevronDown } from "lucide-react";
import { Separator } from "./ui/separator";
import { ModeToggle } from "./mode-toggle";
import { Link, NavLink } from "react-router";
import { AnimatePresence } from "framer-motion";
import { SocialMedia } from "./link-social-media";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full z-50">
      <div className="w-full border-b flex items-center justify-between py-3.5 px-10 lg:px-30 sticky z-50 bg-background/90 backdrop-blur-lg top-0">
        <Link to={"/"} className="flex items-center gap-2">
          <Logo className="size-7 text-[#930819]" />
          <h1 className="font-bold text-[18px]">Smith Origin</h1>
        </Link>
        <div className="hidden lg:flex items-center gap-4">
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
            <ModeToggle />
          </div>
          <Separator orientation="vertical" />
          <SocialMedia />
          <Separator orientation="vertical" />
          <Link to={"https://discord.com/invite/ME4EeXzr"}>
            <Button className="bg-[#5865F2] hover:bg-[#4752C4]">
              <Discord /> Forum
            </Button>
          </Link>
        </div>
        <div className="lg:hidden flex items-center gap-2">
          <ModeToggle />
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full"
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <ChevronDown className="size-5" />
            </motion.div>
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%", opacity: 1 }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{
              duration: 0.4,
              ease: [0.33, 1, 0.68, 1],
            }}
            className="absolute top-full left-0 w-full bg-background/90 backdrop-blur-lg border-b z-40 py-8 px-6 flex flex-col gap-6 lg:hidden"
          >
            <div className="flex flex-col gap-5">
              {Item.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-lg transition-colors hover:text-foreground ${
                      isActive
                        ? "text-foreground font-medium"
                        : "text-muted-foreground"
                    }`
                  }
                >
                  {item.title}
                </NavLink>
              ))}
            </div>
            <Separator />
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">
                  Social Media
                </span>
                <SocialMedia />
              </div>
              <Link to={"https://discord.com/invite/ME4EeXzr"}>
                <Button className="bg-[#5865F2] hover:bg-[#4752C4] w-full" size="lg">
                  <Discord /> Join Discord Forum
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

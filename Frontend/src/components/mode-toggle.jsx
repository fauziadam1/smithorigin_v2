import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Tabs value={theme} onValueChange={(v) => setTheme(v)}>
      <TabsList className="rounded-full h-9">
        <TabsTrigger value="light" className="rounded-full cursor-pointer">
          <Sun className="h-4 w-4" />
        </TabsTrigger>
        <TabsTrigger value="dark" className="rounded-full cursor-pointer">
          <Moon className="h-4 w-4" />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

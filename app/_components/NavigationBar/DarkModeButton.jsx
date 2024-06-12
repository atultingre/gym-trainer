"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function DarkModeButton() {
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    // setTheme("dark");
  }, [theme]);

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <Sun className="h-[1rem] w-[1rem] transition-all" />
      ) : (
        <Moon className="h-[1rem] w-[1rem] transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

"use client";
import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const THEME_MODE = {
  light: "light",
  dark: "dark",
  system: "system",
};

export function ModeToggle() {
  const { setTheme } = useTheme();
  const { toast } = useToast();

  function toggleTheme(theme: string) {
    switch (theme) {
      case THEME_MODE.light:
        setTheme("light");
        break;
      case THEME_MODE.dark || THEME_MODE.system:
        setTheme("dark");
        break;
      default:
        setTheme("dark");
    }
    return toast({
      title: "Thème mdifié",
      description: ` Vous avez changé le thème du site en mode ${
        theme === "light" ? "clair" : "sombre"
      }.  `,
      action: <ToastAction altText="Try again">Compris.</ToastAction>,
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className="hover:cursor-pointer"
          onClick={() => toggleTheme(THEME_MODE.light)}
        >
          Clair
        </DropdownMenuItem>
        <DropdownMenuItem
          className="hover:cursor-pointer"
          onClick={() => toggleTheme(THEME_MODE.dark)}
        >
          Sombre
        </DropdownMenuItem>
        <DropdownMenuItem
          className="hover:cursor-pointer"
          onClick={() => toggleTheme(THEME_MODE.system)}
        >
          Selon le système
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

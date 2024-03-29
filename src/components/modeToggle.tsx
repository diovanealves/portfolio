import { Settings } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslations } from "@/i18n/utils";

export function ModeToggle({
  language,
  currentUserURL,
}: {
  language: "pt-br" | "en";
  currentUserURL: string;
}) {
  const t = useTranslations(language);
  const [theme, setThemeState] = React.useState<
    "theme-light" | "dark" | "system"
  >("theme-light");

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setThemeState(isDarkMode ? "dark" : "theme-light");
  }, []);

  React.useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Settings className="h-[1.2rem] w-[1.2rem] transition-all hover:animate-spin" />
          <span className="sr-only">{t("settings.toggle")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <h1 className="my-1 text-center font-medium">{t("settings.theme")}</h1>
        <DropdownMenuItem onClick={() => setThemeState("theme-light")}>
          {t("settings.light")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeState("dark")}>
          {t("settings.dark")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeState("system")}>
          {t("settings.system")}
        </DropdownMenuItem>

        <DropdownMenuSeparator className="my-2" />

        <h1 className="my-1 text-center font-medium">
          {t("settings.language")}
        </h1>
        <DropdownMenuItem>
          <a href={`/en/${currentUserURL}`}>{t("settings.english")}</a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href={`/pt-br/${currentUserURL}`}>{t("settings.pt-br")}</a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

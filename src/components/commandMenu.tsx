import {
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useTranslations } from "@/i18n/utils";
import { ArrowRight, Command, Computer, Home, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export function CommandMenu({ language }: { language: "pt-br" | "en" }) {
  const t = useTranslations(language);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setOpen(true)}
        aria-label="button to open Command
"
      >
        <Command className="h-[1.2rem] w-[1.2rem]" />
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder={t("command.input")} />
        <CommandList>
          <CommandEmpty>{t("command.empty")}</CommandEmpty>
          <CommandItem className="justify-between">
            <a
              href={`/${language}/`}
              className="flex w-full items-center justify-between"
            >
              <div className="flex items-center">
                <Home className="mr-2 h-4 w-4" />
                <span>{t("command.home")}</span>
              </div>
              <ArrowRight />
            </a>
          </CommandItem>
          <CommandItem className="justify-between">
            <a
              href={`/${language}/project`}
              className="flex w-full items-center justify-between"
            >
              <div className="flex items-center">
                <Star className="mr-2 h-4 w-4" />
                <span>{t("command.project")}</span>
              </div>
              <ArrowRight />
            </a>
          </CommandItem>
          <CommandItem className="justify-between">
            <a
              href={`/${language}/stack`}
              className="flex w-full items-center justify-between"
            >
              <div className="flex items-center">
                <Computer className="mr-2 h-4 w-4" />
                <span>{t("command.stack")}</span>
              </div>
              <ArrowRight />
            </a>
          </CommandItem>
        </CommandList>
      </CommandDialog>
    </>
  );
}

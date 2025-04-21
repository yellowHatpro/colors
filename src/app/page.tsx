"use client";

import Button from "@/components/Button";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const themes = [
  "theme-gruvbox-light",
  "theme-gruvbox-dark",
  "theme-nord-light",
  "theme-nord-dark",
  "theme-catppuccin-light",
  "theme-catppuccin-dark",
  "theme-monokai-light",
  "theme-monokai-dark",
  "theme-pine-dark",
  "theme-rosepine-light",
];

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const root = document.documentElement;
    let index = 0;

    const cycle = () => {
      root.classList.remove(...themes);
      root.classList.add(themes[index]);
      index = (index + 1) % themes.length;
    };

    const interval = setInterval(cycle, 1000);
    cycle();

    return () => {
      clearInterval(interval);
      root.classList.remove(...themes);
      root.classList.add("theme-rosepine-light");
    };
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans mx-auto">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <h1 className="text-5xl font-bold">Colors</h1>
        <p className="text-sm">
          A simple, easy-to-use color palette generator.
        </p>
        <Button
          className={"transition-colors duration-1000"}
          onClick={() => router.push("/pallete")}
        >
          Try
        </Button>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        yellowhatpro
      </footer>
    </div>
  );
}

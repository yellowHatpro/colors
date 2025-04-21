"use client";

import { themes } from "@/utils/themes";
import { useEffect, useState } from "react";
import Card from "@/components/Card";

export default function PalletePage() {
  const [activeTheme, setActiveTheme] = useState<string>("");

  useEffect(() => {
    const root = document.documentElement;
    if (activeTheme) {
      root.classList.remove(...themes.map((t) => t.className));
      root.classList.add(activeTheme);
    }
  }, [activeTheme]);

  const handleExport = (theme: (typeof themes)[0]) => {
    console.log("Exporting theme:", theme);
  };

  return (
    <div className="min-h-screen p-8 font-sans bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-8 text-primary">Color Palettes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {themes.map((theme) => (
          <Card
            key={theme.className}
            onClick={() => setActiveTheme(theme.className)}
            onExport={() => handleExport(theme)}
          >
            <h2 className="text-xl font-semibold mb-4 text-secondary">
              {theme.name}
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(theme.colors).map(([key, color]) => (
                <div key={key} className="flex items-center gap-2">
                  <div
                    className="w-6 h-6 rounded-full border border-border"
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-sm text-muted-foreground">{key}</span>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

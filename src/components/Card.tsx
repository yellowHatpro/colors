import { Download } from "lucide-react";
import { useState } from "react";
import Dialog from "./Dialog";
import { Theme } from "@/utils/themes";

interface CardProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  onExport?: () => void;
  theme?: Theme;
}

export default function Card({
  children,
  onClick,
  className = "",
  onExport,
  theme,
}: CardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleExport = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDialogOpen(true);
    onExport?.();
  };

  const handleDownload = () => {
    if (!theme) return;
    const blob = new Blob([JSON.stringify(theme, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${theme.name.toLowerCase().replace(/\s+/g, "-")}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <div
        onClick={onClick}
        className={`
          bg-card text-card-foreground
          border border-border
          rounded-lg p-4
          ${onClick ? "cursor-pointer hover:shadow-lg" : ""}
          transition-all duration-200
          relative
          ${className}
        `}
      >
        {children}
        <button
          onClick={handleExport}
          className="absolute top-2 right-2 p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
        >
          <Download size={16} />
        </button>
      </div>
      <Dialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title="Export Theme"
      >
        <div className="space-y-4">
          <pre className="bg-muted p-4 rounded-lg overflow-auto max-h-[200px] text-sm">
            {theme && JSON.stringify(theme, null, 2)}
          </pre>
          <button
            onClick={handleDownload}
            className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:opacity-90 transition-opacity"
          >
            Download JSON
          </button>
        </div>
      </Dialog>
    </>
  );
}

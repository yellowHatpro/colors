import { Download } from "lucide-react";
import { useState } from "react";
import Dialog from "./Dialog";

interface CardProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  onExport?: () => void;
}

export default function Card({
  children,
  onClick,
  className = "",
  onExport,
}: CardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleExport = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDialogOpen(true);
    onExport?.();
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
        title="Export Colors"
      >
        <div className="text-muted-foreground">
          Export options will be added here...
        </div>
      </Dialog>
    </>
  );
}

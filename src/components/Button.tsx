interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function Button({ onClick, children, className }: ButtonProps) {
  return (
    <button
      className={`bg-card-foreground text-card px-4 py-1 rounded-2xl cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

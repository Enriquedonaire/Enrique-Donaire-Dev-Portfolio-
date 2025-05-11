import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "outline" | "solid";
  className?: string;
}

export const Badge = ({ variant = "outline", className = "", children, ...props }: BadgeProps) => {
  const base =
    "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border transition-colors duration-200";
  const outline =
    "bg-transparent border-current text-current";
  const solid =
    "bg-gradient-to-r from-purple-500 to-cyan-500 text-white border-0";
  return (
    <span
      className={`${base} ${variant === "outline" ? outline : solid} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

import React from "react";

export const Card = ({ className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`relative rounded-2xl bg-black/40 border border-gray-800 shadow-xl overflow-hidden ${className}`}
    {...props}
  >
    {children}
  </div>
);

export const CardHeader = ({ className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`p-6 pb-2 ${className}`} {...props}>{children}</div>
);

export const CardTitle = ({ className = "", children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={`text-xl md:text-2xl font-bold ${className}`} {...props}>{children}</h3>
);

export const CardContent = ({ className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`px-6 pb-6 ${className}`} {...props}>{children}</div>
);

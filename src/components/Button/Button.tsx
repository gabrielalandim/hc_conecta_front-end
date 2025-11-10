import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode; 
  onClick?: () => void; 
  variant?: 'primary' | 'secondary'; 
}

export function Button({ children, onClick, variant = 'primary' }: ButtonProps) {
  
  const baseStyle = "py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantStyles = {
    primary: "text-white bg-sky-600 hover:bg-sky-700 focus:ring-sky-500",
    secondary: "text-gray-700 bg-gray-200 hover:bg-gray-300 focus:ring-gray-400",
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyle} ${variantStyles[variant]}`}
    >
      {children}
    </button>
  );
}
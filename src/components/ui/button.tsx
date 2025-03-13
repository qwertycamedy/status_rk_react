

import { clsx } from "clsx";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: string;
  children: ReactNode;
}

export const Button: FC<IProps> = ({
  className,
  variant = "light",
  children,
  ...props
}) => {
  return (
    <button
      className={clsx(
        `flex items-center justify-center text-center rounded-full text-[16px] py-[15px] px-[25px] transition-colors duration-200 ease-linear ${className}`,
        {
          "bg-white text-black hover:bg-[#1880fa] hover:text-white active:bg-[#054fa5]": variant === "light",
          "text-white bg-[#1880fa]": variant === "active",
        }
      )}
      {...props}
    >
      {children}
    </button>
  );
};

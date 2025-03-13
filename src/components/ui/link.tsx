import { clsx } from "clsx";
import { FC, LinkHTMLAttributes, ReactNode } from "react";

interface IProps extends LinkHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  variant?: string;
  href: string;
  children: ReactNode;
}

export const MyLink: FC<IProps> = ({
  className,
  variant,
  href,
  children,
  ...props
}) => {
  return (
    <a
      href={href}
      className={clsx(
        `flex items-center justify-center text-center gap-[6px] py-[8px] px-[14px] transition-colors duration-200 ease-linear ${className}`,
        {
          "bg-white rounded-full text-black hover:bg-[#1880fa] hover:text-white active:bg-[#054fa5]":
            variant === "bg-light",
          "border border-white rounded-full hover:bg-white hover:text-black":
            variant === "border",
          "hover:text-[#1880fa]": variant === "text-blue",
        }
      )}
      {...props}
    >
      {children}
    </a>
  );
};

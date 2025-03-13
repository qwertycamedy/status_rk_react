import { FC, ReactNode } from "react";

interface IProps {
  className?: string;
  children: ReactNode;
}

export const Page: FC<IProps> = ({ className, children }) => {
  return (
    <div
      className={`antialiased text-[12px] lg:text-[14px] tracking-[-0.03em] overflow-x-hidden ${className}`}
    >
      {children}
    </div>
  );
};

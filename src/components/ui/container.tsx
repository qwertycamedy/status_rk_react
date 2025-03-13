import { FC, ReactNode } from "react";

interface IProps {
  className?: string;
  children: ReactNode;
}

export const Container: FC<IProps> = ({ className, children }) => {
  return (
    <div className={`max-w-[1366px] px-4 mx-auto w-full ${className}`}>
      {children}
    </div>
  );
};

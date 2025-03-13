import { FC, ReactNode } from "react";

interface IProps {
  className?: string;
  label?: string;
  children: ReactNode;
}

export const Label: FC<IProps> = ({ className, label, children }) => {
  return (
    <label className={`flex flex-col gap-[10px] w-full font-medium ${className || ""}`}>
      {label && <span className="ml-[10px]">{label}</span>}
      {children}
    </label>
  );
};

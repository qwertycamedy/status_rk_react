import { FC, InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input: FC<IProps> = ({ className, ...props }) => {
  return (
    <input
      {...props}
      className={`w-full p-[20px] text-[12px] font-medium bg-transparent border rounded-[14px] placeholder:text-[#fff3] ${className || ""}`}
    />
  );
};

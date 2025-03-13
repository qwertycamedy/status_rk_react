import { clsx } from "clsx";
import { ElementType, FC, ReactNode } from "react";

interface IProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

export const Title: FC<IProps> = ({ as: Tag = "h1", className, children }) => {
  return (
    <Tag
      className={clsx(`tracking-tighter ${className}`, {
        "text-[40px] leading-[92%] xl:leading-[150%] xl:text-[101px] xl:text-nowrap text-center animate-show-with-translate max-w-[305px] xl:max-w-[100%] mx-auto ": Tag === "h1",
        "text-[40px] xl:text-[95px] font-medium": Tag === "h2",
        "text-[30px] xl:text-[37px]": Tag === "h3",
        "text-[20px] leading-[95%] lg:text-[28px] lg:leading-[140%]": Tag === "h4",
      })}
    >
      {children}
    </Tag>
  );
};

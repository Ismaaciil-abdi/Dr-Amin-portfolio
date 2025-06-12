import { cva } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

const classes = cva(
  "border h-12 rounded-lg px-6 font-medium text-sm font-sans overflow-hidden transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary: "bg-zinc-800 text-zinc-200  border-zinc-300",
        secondary:
          "border-zinc-800 text-zinc-800 bg-transparent hover:bg-zinc-800 hover:text-zinc-200 transition-colors duration-300 cursor-pointer",
      },
      size: {
        sm: "h-10",
        md: "h-12",
      },
    },
  }
);

export default function Button(
  props: {
    variant: "primary" | "secondary";
    size?: "sm" | "md";
  } & ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { variant, size, className, ...rest } = props;
  return <button className={classes({ variant, size, className })} {...rest} />;
}

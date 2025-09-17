import { Button as AriaButton, type ButtonProps } from "react-aria-components";

type ButtonVariants = "danger" | "primary" | "secondary";

interface Props extends ButtonProps {
  variant?: ButtonVariants;
}

export default function Button({ variant = "primary", ...rest }: Props) {
  return (
    <AriaButton
      className="bg-yellow-500 p-3 font-bold uppercase hover:cursor-pointer rounded-sm"
      {...rest}
    />
  );
}

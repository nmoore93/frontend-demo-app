import clsx from "clsx";
import {
  Link as AriaLink,
  type LinkProps as AriaLinkProps,
} from "react-aria-components";

interface LinkProps extends AriaLinkProps {}

export const Link = ({ children, ...rest }: LinkProps) => {
  return (
    <AriaLink
      className={({ isPressed, isHovered, isFocused }) =>
        clsx(
          "flex gap-2 items-center",
          isHovered && "underline",
          isFocused && "underline",
        )
      }
      {...rest}
    >
      {children}
    </AriaLink>
  );
};

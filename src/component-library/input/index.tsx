import clsx from "clsx";
import {
  Input as AriaInput,
  FieldError,
  Label,
  Text,
  TextField,
  type TextFieldProps,
  type ValidationResult,
} from "react-aria-components";

interface InputProps extends TextFieldProps {
  description?: string;
  errorMessage?: ((validation: ValidationResult) => string) | string;
  label?: string;
  placeholder?: string;
}

export const Input = ({
  description,
  errorMessage,
  label,
  placeholder,
  ...props
}: InputProps) => {
  return (
    <TextField
      className={() => clsx("flex flex-col w-fit text-[var(--text-color)]")}
      {...props}
    >
      <Label>{label}</Label>
      <AriaInput
        className={() => clsx("p-1 m-0 border rounded-md text-base")}
        placeholder={placeholder}
      />
      {description && (
        <Text
          className="text-[var(--text-color-placeholder)] text-sm"
          slot="description"
        >
          {description}
        </Text>
      )}
      <FieldError>{errorMessage}</FieldError>
    </TextField>
  );
};

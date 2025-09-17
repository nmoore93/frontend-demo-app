import {
  Select as AriaSelect,
  Button,
  FieldError,
  Label,
  ListBox,
  ListBoxItem,
  type ListBoxItemProps,
  Popover,
  type SelectProps,
  SelectValue,
  Text,
  type ValidationResult,
} from "react-aria-components";

import ChevronIcon from "../../assets/chevron-icon.svg";

interface MySelectProps<T extends object>
  extends Omit<SelectProps<T>, "children"> {
  children: ((item: T) => React.ReactNode) | React.ReactNode;
  description?: string;
  errorMessage?: ((validation: ValidationResult) => string) | string;
  items?: Iterable<T>;
  label?: string;
}

export function Select<T extends object>({
  children,
  description,
  errorMessage,
  items,
  label,
  ...props
}: MySelectProps<T>) {
  return (
    <AriaSelect
      {...props}
      className="text-[var(--text-color)] max-w-64 w-fit m-1"
    >
      <Label className="text-sm">{label}</Label>
      <Button className="rounded-sm shadow-sm flex items-center w-full p-1 border border-gray-600">
        <SelectValue className="text-[var(--text-color)] data-[placeholder]:text-[var(--text-color-placeholder)]" />
        <span aria-hidden="true" className="bg-yellow-400 ml-4 rounded-sm">
          <ChevronIcon />
        </span>
      </Button>
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
      <Popover className="min-w-[var(--trigger-width)]">
        <ListBox
          className="bg-white rounded-sm p-1 border border-gray-400 flex flex-col"
          items={items}
        >
          {children}
        </ListBox>
      </Popover>
    </AriaSelect>
  );
}

export function SelectItem(props: ListBoxItemProps) {
  return (
    <ListBoxItem
      {...props}
      className={({ isFocused, isPressed, isSelected }) =>
        `p-1 ${isFocused ? "bg-yellow-300" : ""} ${isSelected ? "bg-[unset]" : ""} ${isPressed ? "bg-yellow-300" : ""}`
      }
    />
  );
}

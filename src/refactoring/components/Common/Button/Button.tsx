import { StyledButton } from "./buttonStyles";

interface Props {
  children?: React.ReactNode;
  onClick: () => void;
  label: string;
  variant?: "secondary" | "danger" | "primary";
  isDisabled?: boolean;
  fullWidth?: boolean;
}

export const Button = ({
  onClick,
  label,
  variant = "secondary",
  isDisabled = false,
  fullWidth = false,
  children,
}: Props) => {
  return (
    <StyledButton
      variant={variant}
      onClick={onClick}
      disabled={isDisabled}
      fullWidth={fullWidth}
    >
      {children || label}
    </StyledButton>
  );
};

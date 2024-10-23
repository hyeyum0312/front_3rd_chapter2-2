import styled from "styled-components";

interface Props {
  onClick: () => void;
  label: string;
  variant?: "default" | "danger";
}
const StyledButton = styled.button<{ variant: "default" | "danger" }>`
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  cursor: pointer;

  border-radius: 0.25rem;
  cursor: pointer;

  ${({ variant }) =>
    variant === "danger"
      ? `
          background-color: #EF4444;
          color: #fff;
          
          &:hover {
            background-color: #c53030;
          }
        `
      : `
          background-color: #D1D5DB; 
          color: #333;
  
          &:hover {
            background-color: #d0d0d0;
          }
        `}
`;

export const Button = ({ onClick, label, variant = "default" }: Props) => {
  return (
    <StyledButton variant={variant} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

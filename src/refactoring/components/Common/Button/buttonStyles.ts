import styled from "styled-components";

export const StyledButton = styled.button<{
  variant: "primary" | "danger" | "secondary" | "success";
  fullWidth: boolean;
}>`
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  cursor: pointer;
  border-radius: 0.25rem;
  cursor: pointer;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};

  ${({ variant }) =>
    variant === "danger" &&
    `
    background-color: #EF4444;
    color: #fff;
    
    &:hover {
      background-color: #c53030;
    }
  `}

  ${({ variant }) =>
    variant === "primary" &&
    `
    background-color: #3B82F6;
    color: #fff;

    &:hover {
      background-color: #2563EB;
    }
    `}

  ${({ variant }) =>
    variant === "secondary" &&
    `
    background-color: #D1D5DB;
    color: #1F2937;

    &:hover {
      background-color: #9CA3AF;
    }
    `}

    ${({ variant }) =>
    variant === "success" &&
    `
      background-color: #22C55E;
      color: #1F2937;
  
      &:hover {
        background-color: #16A94A;
      }
      `}
`;

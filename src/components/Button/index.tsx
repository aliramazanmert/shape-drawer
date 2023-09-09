import { StyledButton } from "./styles";

interface Props {
  onClick: () => void;
  children: React.ReactNode;
  color?: string;
}

const Button = ({ onClick, children, color }: Props) => {
  return (
    <StyledButton color={color} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;

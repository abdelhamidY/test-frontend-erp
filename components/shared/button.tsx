import { Button as FlowbiteButton } from "flowbite-react";

const Button = ({ }: {
    loading?: boolean
    disabled?: boolean
    onClick?: () => void
    children?: React.ReactNode
    className?: string
    
}) => {
  return <FlowbiteButton></FlowbiteButton>;
};

export default Button;

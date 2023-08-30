import { FC, MouseEventHandler } from "react";

interface ButtonProps {
	className: string;
	type?: "button" | "submit" | "reset" | undefined;
    action: MouseEventHandler<HTMLButtonElement>;
    children: any;}

const Button:FC<ButtonProps> = ({ className, type, action, children }) => {
	return (
		<button type={type} className={className} onClick={action}>
			{children} 
		</button>
	);
};

export default Button;

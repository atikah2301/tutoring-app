import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  // question mark after declaring a new prop indicates that it is optional
  // do this when you have passed a default value into the component
  // you can also limit the options to certain values, as shown,
  // instead of declaring it as just any string.
  // This will help catch errors if you try to use a colour not defined in Bootstrap
  colour?: "primary" | "secondary" | "success";
  onButtonClick: () => void;
}

const Button = ({
  children,
  colour = "primary",
  onButtonClick,
}: ButtonProps) => {
  return (
    <button className={"btn btn-" + colour} onClick={onButtonClick}>
      {children}
    </button>
  );
};

export default Button;

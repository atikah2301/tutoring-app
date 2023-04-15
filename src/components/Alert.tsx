// using the ES7+ extension, type rafce (react arrow function component export)
// to autogenerate the boilerplate code for a new tsx component

import { ReactNode } from "react";

interface AlertProps {
  // using the var name children allows us to write text into our Alert compoennt,
  // from within the App component, without needing quotation marks
  // we can also had XML / HTML content if we declare the type as ReactNode
  // instead of string
  children: ReactNode;
}

const Alert = ({ children }: AlertProps) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;

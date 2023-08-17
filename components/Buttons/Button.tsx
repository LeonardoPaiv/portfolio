import React, { ReactNode } from "react";

const Button = ({
  color,
  type,
  children,
}: {
  color: string;
  type: "submit" | "button" | "reset";
  children: ReactNode;
}) => {
  return (
    <button
      className={`bg-${color}-600 hover:bg-${color}-700 p-2 rounded-xl w-1/3`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;

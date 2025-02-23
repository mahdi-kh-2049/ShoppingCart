import React, { ComponentProps } from "react";
type TVariant = "primary" | "secondary" | "danger" | "warning" | "succes";

type TButton = ComponentProps<"button"> & {
  variant?: TVariant;
};
function Button({ children, variant, style, ...rest }: TButton) {
  return (
    <button {...rest} style={{borderRadius:"4px",padding:"4px 8px" ,...style, ...checkVariant(variant) }}>
      {children}
    </button>
  );
}

export default Button;

function checkVariant(variant?: TVariant) {
  if (variant === "primary") {
    return { backgroundColor: "#008bff", color: "white" };
  } else if (variant === "secondary") {
    return { backgroundColor: "gray", color: "black" };
  } else if (variant === "danger") {
    return { backgroundColor: "red", color: "white" };
  } else if (variant === "succes") {
    return { backgroundColor: "green", color: "white" };
  } else if (variant === "warning") {
    return { backgroundColor: "yellow", color: "white" };
  }
}

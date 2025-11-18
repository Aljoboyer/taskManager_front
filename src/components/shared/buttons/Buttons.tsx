import React, {  type MouseEventHandler } from "react";
import { Button, type ButtonProps } from "@mui/material";
import { COLORS } from "../../../theme/colors";

interface ButtonsProps {
  onClickHandler?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  title?: string;
  bgColor?: string;
  textColor?: string;
  variant?: ButtonProps["variant"];
  icon?: any;
  other_style?: Record<string, any>;
  type?: "button" | "submit" | "reset" | undefined;
  isLoading?: boolean;
  disabled?: boolean;
}

export const Buttons: React.FC<ButtonsProps> = ({
  onClickHandler,
  title = "",
  bgColor = COLORS.overlay,
  textColor = COLORS.maroon,
  variant = "contained",
  icon = "",
  other_style = {},
  type = "button",
  isLoading = false,
  disabled = false,
}) => {
  return (
    <Button
      disabled={disabled || isLoading}
    //   component={component}
      type={type}
      onClick={onClickHandler}
      variant={variant}
      fullWidth
      sx={{
        ...other_style,
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      {/* Optional loading indicator */}
      {isLoading ? "Loading..." : title}

      {/* Icon if provided */}
      {!isLoading && icon}
    </Button>
  );
};

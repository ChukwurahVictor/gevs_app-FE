"use client";

import { Button, ButtonProps } from "@chakra-ui/react";
import themes from "@/utils/themes";
import { ReactNode } from "react";

interface PropType extends ButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  variant?:
    | "primary"
    | "secondary"
    | "danger"
    | "danger-outline"
    | "outline"
    | "grey"
    | "primary-outline";
  width?: string;
  loading?: boolean;
  style?: React.CSSProperties;
}

const AppButton = ({
  children,
  type,
  onClick,
  disabled,
  variant = "primary",
  width,
  loading,
  style,
  ...rest
}: PropType) => {
  return (
    <Button
      isLoading={loading}
      onClick={onClick}
      w={width}
      type={type}
      style={style}
      disabled={disabled}
      isDisabled={disabled}
      fontSize={themes.fontSizes.label}
      fontWeight="500"
      padding="1.2rem"
      h={variant === "outline" ? "4.0rem" : "4.0rem"}
      background={
        variant === "primary"
          ? "#9C0D38"
          : "primary-outline"
          ? "#F1FAFF"
          : variant === "danger"
          ? "#EB6969"
          : variant === "danger-outline"
          ? "#FEEBE14D"
          : variant === "secondary"
          ? "#F1FAFF"
          : variant === "grey"
          ? "#F9F9FB"
          : ""
      }
      _hover={{}}
      color={
        variant === "primary"
          ? "white"
          : variant === "primary-outline"
          ? "#34D1BF"
          : variant === "danger"
          ? "white"
          : variant === "danger-outline"
          ? "#EB6969"
          : variant === "secondary"
          ? "#0738B7"
          : variant === "grey"
          ? "#4B506D"
          : variant === "outline"
          ? "#9C0D38"
          : ""
      }
      borderRadius={variant === "outline" ? "4rem" : ".6rem"}
      border={
        variant === "danger-outline"
          ? "1px solid #EB6969"
          : variant === "primary-outline"
          ? "#34D1BF"
          : variant === "outline"
          ? "1px solid #9C0D38"
          : ""
      }
      {...rest}
    >
      {children}
    </Button>
  );
};

export default AppButton;

import React, { Fragment } from "react";
import classNames from "classnames";
import TextFormatter from "./TextFormatter";
import "./button.scss";
const Button = ({
  className,
  disabled,
  href,
  icon,
  iconPosition,
  onClick,
  outline,
  size,
  text,
  type,
  children,
}) => {
  console.log("xxx Button:", children);
  const componentClass = "Button";
  const WrapperComponent = href ? "a" : "div";
  const prefix = icon && iconPosition !== "right" ? icon : "";
  const suffix = icon && iconPosition === "right" ? icon : "";
  const componentClassNames = classNames(
    {
      [className]: className,
      [`${componentClass}__outline`]: outline,
      [`${componentClass}__${size}`]: size,
      [`${componentClass}__${type}`]: type,
    },
    componentClass
  );

  const handleOnClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick && onClick();
    }
  };

  return (
    <WrapperComponent
      className={componentClassNames}
      disabled={disabled}
      href={href}
      onClick={handleOnClick}
      type="button"
    >
      {children ? (
        children
      ) : (
        <TextFormatter
          className={`${componentClass}__text`}
          prefix={prefix}
          suffix={suffix}
          text={text}
        />
      )}
    </WrapperComponent>
  );
};

export default Button;

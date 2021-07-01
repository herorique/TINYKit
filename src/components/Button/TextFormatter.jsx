import React, { Fragment } from "react";
import classNames from "classnames";

const TextFormatter = ({ className, prefix, text, suffix }) => {
  return (
    <>
      {prefix}
      <span className={className}>{text}</span>
      {suffix}
    </>
  );
};

export default TextFormatter;

import React from "react";
import { Alert as ReactStrapAlert } from "reactstrap";

// type Type = "error" | "success"

interface Props {
  type?: "error" | "success";
}

const Alert: React.FC<Props> = props => {
  const typeArray = { error: "danger", success: "success" };
  if (props.type) {
    const type = typeArray[props.type];
    return <ReactStrapAlert color={type}>{props.children}</ReactStrapAlert>;
  }
  return <ReactStrapAlert>{props.children}</ReactStrapAlert>;
};

export default Alert;

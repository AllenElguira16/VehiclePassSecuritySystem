import React from "react";
import { Alert as ReactStrapAlert } from "reactstrap";

interface Props {
  type?: "error" | "success";
}

/**
 * Alert Func Component
 *
 * This Component Handles the Alerts
 */
const Alert: React.FC<Props> = props => {
  // An array that stores the equivalent of color
  const colorArray = { error: "danger", success: "success" };
  // Render
  return props.type ? (
    <ReactStrapAlert color={colorArray[props.type]}>
      {props.children}
    </ReactStrapAlert>
  ) : (
    <ReactStrapAlert>{props.children}</ReactStrapAlert>
  );
};

export default Alert;

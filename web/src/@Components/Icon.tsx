import React, { CSSProperties } from "react";

interface Props {
  name: string;
  size: number;
}

/**
 * Icon Component
 *
 * For easy icon integrationg with material-icons package
 * @param props Props from parent
 */
const Icon = (props: Props) => {
  // Styles
  const styles: CSSProperties = {
    fontSize: props.size
  };
  // Render
  return (
    <i className="material-icons" style={styles}>
      {props.name}
    </i>
  );
};

export default Icon;

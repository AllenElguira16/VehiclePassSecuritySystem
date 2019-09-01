import React from "react";

interface Props{
  name: string,
  size: number
}

export default (props: Props) => {
  const styles: React.CSSProperties = {
    fontSize: props.size
  };

  return <i className="material-icons" style={styles}>{props.name}</i>
}
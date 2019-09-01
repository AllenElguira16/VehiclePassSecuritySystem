import React from "react";

interface iLinkProps extends React.HTMLProps<HTMLAnchorElement> {
  children: any;
}

export default (props: iLinkProps) => {
  return (
    <a {...props}>
      <em className="font-weight-bold">{props.children}</em>
    </a>
  );
};

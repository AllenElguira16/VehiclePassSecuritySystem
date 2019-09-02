import React, { FunctionComponent } from "react";

interface iLinkProps extends React.HTMLProps<HTMLAnchorElement> {
  children: any;
}

const ItalicLink: FunctionComponent<iLinkProps> = props => {
  return (
    <a {...props}>
      <em className="font-weight-bold">{props.children}</em>
    </a>
  );
};

export default ItalicLink;

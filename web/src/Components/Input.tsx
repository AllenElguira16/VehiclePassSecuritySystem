import React from "react";
import {
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";
import Types from "types";

export default (props: Types.InputComponentProps) => {
  if (props.value === undefined) {
    throw new Error("Value should not be undefined");
  }

  return (
    <FormGroup>
      <InputGroup>
        <Input
          tabIndex={props.tabIndex}
          type={props.type}
          placeholder={props.placeholder}
          id={props.placeholder}
          name={props.name}
          onChange={props.onChange}
          value={props.value}
          autoComplete="off"
        />
        {props.icon && (
          <InputGroupAddon addonType={props.icon.position}>
            <InputGroupText>
              <i className="material-icons px-1">{props.icon.iconName}</i>
            </InputGroupText>
          </InputGroupAddon>
        )}
      </InputGroup>
    </FormGroup>
  );
};

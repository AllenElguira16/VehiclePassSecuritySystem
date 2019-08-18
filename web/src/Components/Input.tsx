import React, { useState } from "react";
import { FormGroup, Input, FormGroupProps, Label } from "reactstrap";

export default (props: FormGroupProps) => {
  const [state, setState] = useState(false);

  const onClick = () => {
    setState(true);
  };

  const onClose = () => {
    if (props.value === "" || props.value === undefined) setState(false);
  };

  if (props.value === undefined) {
    throw new Error("Value should not be undefined");
  }

  return (
    <FormGroup
      className={`bmd-form-group${state === true ? " is-focused" : ""}`}
      onFocus={onClick}
      onBlur={onClose}
    >
      <Label for={props.label} className="bmd-label-floating">
        {props.label}
      </Label>
      <Input
        tabIndex={props.tabIndex}
        type={props.type as any}
        id={props.label}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
        autoComplete="off"
        placeholder={props.placeholder}
      />
    </FormGroup>
  );
};

import React, { useState } from 'react';
import { FormGroup, Input, FormGroupProps, Label } from 'reactstrap';

export default (props: FormGroupProps) => {
  const [state, setState] = useState(false);
  
  const onClick = () => {
    setState(true);
  }

  const onClose = () => {
    if(props.value === '') setState(false);
  }
  
  console.log(props.value);
  let className = `bmd-form-group ${state === true && "is-focused"}`;
  
  return (
    <FormGroup className={className} onFocus={onClick} onBlur={onClose}>
      <Label for={props.placeholder} className="bmd-label-floating">{props.placeholder}</Label>
      <Input type={props.type as any} id={props.placeholder} name={props.name} onChange={props.onChange} value={props.value}/>
    </FormGroup>
  )
}
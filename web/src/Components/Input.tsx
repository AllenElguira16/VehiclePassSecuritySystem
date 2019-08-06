import React, { useState, useEffect, FormEvent } from 'react';
import { FormGroup, Input, FormGroupProps, Label } from 'reactstrap';

export default (props: any) => {
  const [state, setState] = useState<{isFloating?: boolean, value?: string}>({
    isFloating: false,
    value: ''
  });
  
  const onClick = () => {
    setState({isFloating: true});
  }

  const onClose = () => {
    if(state.value !== '') setState({isFloating: true});
  }

  let onChange = (e: FormEvent<HTMLDivElement>) => {
    if(e !== undefined) props.onChange(e);
  }

  let className = `bmd-form-group ${state.isFloating === true && "is-focused"}`;
  
  return (
    <FormGroup className={className} onFocus={onClick}>
      <Label for={props.placeholder} className="bmd-label-floating">{props.placeholder}</Label>
      <Input id={props.placeholder} onChange={onChange} value={state.value} name={props.name} onBlur={onClose}/>
    </FormGroup>
  )
}
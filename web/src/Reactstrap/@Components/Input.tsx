import React, { FC } from 'react'
import { FormGroup, Input as FormInput, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap'
import { InputComponentProps } from 'types'
/**
 * A Input Component with mix-ins
 *
 * Very simple to integrate with Icons
 * @param props Props from parent component
 */
const Input: FC<InputComponentProps> = props => {
  // Checks value if its undefined then will throw error
  if (props.value === undefined) {
    throw new Error('Value should not be undefined')
  }

  return (
    <FormGroup>
      <InputGroup>
        <FormInput
          tabIndex={props.tabIndex}
          type={props.type}
          placeholder={props.placeholder}
          id={props.placeholder}
          name={props.name}
          onChange={props.onChange}
          value={props.value}
          autoComplete="off"
          defaultValue={props.defaultValue}
        >
          {props.children}
        </FormInput>
        {props.icon && (
          <InputGroupAddon addonType={props.icon.position}>
            <InputGroupText>
              <i className="material-icons px-1">{props.icon.iconName}</i>
            </InputGroupText>
          </InputGroupAddon>
        )}
      </InputGroup>
    </FormGroup>
  )
}

export default Input

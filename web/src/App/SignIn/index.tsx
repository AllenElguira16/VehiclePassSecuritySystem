import React, { useState, FormEvent } from 'react';
import { Form, FormGroup, Row, Label } from 'reactstrap';
import Input from 'Components/Input';

export default () => {
  let [inputState, setInputState] = useState<IUser>({
    username: '',
    password: ''
  });
  
  const onInputChange = (e: FormEvent<HTMLInputElement>) => {
    let { name, value } = e.currentTarget;
    setInputState({[name]: value});
  }

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  console.log(inputState);

  return (
    <>
      <Form onSubmit={onFormSubmit}>
        <Row form="true">
          <Input placeholder="Username" name="username" onChange={onInputChange} value={inputState.username}/>
          <Input placeholder="Password" name="password" onChange={onInputChange} value={inputState.password}/>
        </Row>
      </Form>
    </>
  )
}
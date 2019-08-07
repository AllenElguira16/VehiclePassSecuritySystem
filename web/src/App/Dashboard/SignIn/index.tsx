import React, { useState, FormEvent } from 'react';
import { Form, Row, Container } from 'reactstrap';
import Input from 'Components/Input';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { getUser } from 'Actions';

// const mapStateToProps = 

const SignIn = (props: any) => {
  
  let [inputState, setInputState] = useState<IUser>({
    username: '',
    password: ''
  });
  
  const onInputChange = (e: FormEvent<HTMLInputElement>) => {
    let { name, value } = e.currentTarget;
    setInputState({...inputState, [name]: value});
  }
  
  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }
  
  console.log(props.user);
  return (
    <Container>
      <Form onSubmit={onFormSubmit}>
        <Row>
          <Input type="text" placeholder="Username" name="username" onChange={onInputChange} value={inputState.username}/>
          <Input type="password" placeholder="Password" name="password" onChange={onInputChange} value={inputState.password}/>
        </Row>
      </Form>
    </Container>
  )
}

export default connect((state: any) => {
  return {
    user: state.user
  } 
}, (dispatch) => {
  return {
    getUser: (user: any) => disp
  }
})(SignIn);
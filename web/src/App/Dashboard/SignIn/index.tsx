import React, { useState, FormEvent } from "react";
import Input from "Components/Input";
import {
  Form,
  CardBody,
  Container,
  Button,
  FormGroup,
  Card,
  Col,
  CardHeader
} from "reactstrap";
import { connect } from "react-redux";
import { signIn } from "Actions";
import { RouteComponentProps } from "react-router";
// import { Route } from 'react-router-dom';

const SignIn: React.FC<SignInProps & RouteComponentProps> = props => {
  let [inputState, setInputState] = useState<IUser>({
    username: "",
    password: ""
  });

  const onInputChange = (e: FormEvent<HTMLInputElement>) => {
    let { name, value } = e.currentTarget;
    setInputState({ ...inputState, [name]: value });
  };

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.signIn(inputState, error => {
      if (!error) {
        props.history.push("/dashboard");
      }
    });
  };

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Col lg="6">
        <Card>
          <CardHeader tag="h6">Dashboard Sign-in</CardHeader>
          <CardBody>
            <Form onSubmit={onFormSubmit}>
              <Input
                type="text"
                placeholder="Username"
                name="username"
                onChange={onInputChange}
                value={inputState.username}
              />
              <Input
                type="password"
                placeholder="Password"
                name="password"
                onChange={onInputChange}
                value={inputState.password}
              />
              <FormGroup>
                <Button type="submit" color="primary" className="btn-raised">
                  Send
                </Button>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Container>
  );
};

export default connect(
  (state: combinedReducerInterface) => {
    return {
      isLoggedIn: state.auth.isLoggedIn
    };
  },
  { signIn }
)(SignIn);

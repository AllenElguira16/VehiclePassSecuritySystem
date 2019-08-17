import React, { useState, FormEvent } from "react";
import Input from "Components/Input";
import {
  Form,
  CardBody,
  Button,
  FormGroup,
  Card,
  Col,
  CardHeader
} from "reactstrap";
import { connect } from "react-redux";
import { signIn } from "Redux/Actions";
import { RouteComponentProps } from "react-router";
import Axios from "axios";
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

  const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let { data } = await Axios.post("/user", inputState);
    if (!data.error) {
      props.signIn();
    }
  };

  return (
    // <Container className="mt-5 d-flex horizontal-center">
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
              tabIndex={1}
            />
            <Input
              type="password"
              placeholder="Password"
              name="password"
              onChange={onInputChange}
              value={inputState.password}
              tabIndex={2}
            />
            <FormGroup>
              <Button
                type="submit"
                color="primary"
                className="btn-raised"
                tabIndex={3}
              >
                Send
              </Button>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    </Col>
    // </Container>
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

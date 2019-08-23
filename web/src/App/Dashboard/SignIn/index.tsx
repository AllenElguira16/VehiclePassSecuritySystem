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
import Types from "types";
// import { Route } from 'react-router-dom';

const SignIn: React.FC<Types.SignInProps & RouteComponentProps> = props => {
  let [inputState, setInputState] = useState<Types.IUser>({
    username: "",
    password: ""
  });

  const onInputChange = (e: FormEvent<HTMLInputElement>, prop: string) => {
    let { value } = e.currentTarget;
    setInputState({ ...inputState, [prop]: value });
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
              onChange={e => onInputChange(e, "username")}
              value={inputState.username}
              tabIndex={1}
              icon={{
                position: "prepend",
                iconName: "people"
              }}
            />
            <Input
              type="password"
              placeholder="Password"
              onChange={e => onInputChange(e, "password")}
              value={inputState.password}
              tabIndex={2}
              icon={{
                position: "prepend",
                iconName: "vpn_key"
              }}
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
  (state: Types.combinedReducerInterface) => {
    return {
      isLoggedIn: state.auth.isLoggedIn
    };
  },
  { signIn }
)(SignIn);

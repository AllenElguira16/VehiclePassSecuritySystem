import React, { useState, FormEvent, useContext } from "react";
import { Input } from "Reactstrap/@Components";
import {
  Form,
  CardBody,
  Button,
  FormGroup,
  Card,
  Col,
  CardHeader
} from "reactstrap";
import { IUser } from "types";
import { AppStore } from "Reactstrap/Store";
import { observer } from "mobx-react-lite";

const SignIn: React.FC = observer(() => {
  const { login } = useContext(AppStore);
  let [inputState, setInputState] = useState<IUser>({
    username: "",
    password: ""
  });

  const onInputChange = (e: FormEvent<HTMLInputElement>, prop: string) => {
    let { value } = e.currentTarget;
    setInputState({ ...inputState, [prop]: value });
  };

  const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(inputState);
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
});

export default SignIn;

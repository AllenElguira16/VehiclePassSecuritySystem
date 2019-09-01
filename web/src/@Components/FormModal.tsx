import React, { FormEvent } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  Form,
  ModalBody,
  Row,
  Col
} from "reactstrap";
interface Props {
  onSubmit(e: FormEvent<HTMLFormElement>): void;
  toggle: boolean;
  toggler(): void;
  title: string;
}
const FormModal: React.FC<Props> = props => {
  return (
    <>
      <Modal isOpen={props.toggle} toggle={props.toggler}>
        <ModalHeader toggle={props.toggler}>{props.title}</ModalHeader>
        <ModalBody tag={Form} onSubmit={props.onSubmit}>
          {props.children}
          <Row className="justify-content-between">
            <Col>
              <Button
                type="submit"
                color="outline-info"
                className="p-align-items-end d-flex"
              >
                <span>Submit</span>
                <i className="material-icons pl-2">send</i>
              </Button>
            </Col>
            <Col>
              <Button
                onClick={props.toggler}
                color="outline-danger"
                className="float-right align-items-end d-flex"
              >
                <span>Close</span>
                <i className="material-icons pl-2">close</i>
              </Button>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </>
  );
};

export default FormModal;

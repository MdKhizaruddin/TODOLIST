import React, { useState } from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";

export const AddTodo = ({ handleAdd }) => {
  const [newtodo, setnewtodo] = useState("");
  return (
    <Card className="addtodo">
      <Row>
        <Col md={10}>
          <Form.Control
            type="text"
            value={newtodo}
            onChange={(e) => setnewtodo(e.target.value)}
          ></Form.Control>
        </Col>
        <Col>
          <Button
            onClick={() => {
              handleAdd(newtodo);
              setnewtodo("");
            }}
            disabled={newtodo === ""}
          >
            Add
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

import React, { useState } from "react";
import { ToDolist } from "./ToDolist";
import { ToDoitem } from "./ToDoitem";
import { AddTodo } from "./AddTodo";
import { Row, Col, Card } from "react-bootstrap";
import "./TODO.css";

export const Home = () => {
  const [todoitems, settodoitems] = useState([
    "learning react ",
    "having lucnch",
    "Namaz",
  ]);
  const handleAdd = (newtodo) => {
    settodoitems([...todoitems, newtodo]);
  };
  return (
    <Card className="home">
      <Row>
        <Col>
          <AddTodo handleAdd={handleAdd} />
        </Col>
        <Col>
          <ToDolist todoitems={todoitems} />
        </Col>
      </Row>
    </Card>
  );
};

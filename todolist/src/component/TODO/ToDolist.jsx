import React from "react";
import { Card } from "react-bootstrap";
import { ToDoitem } from "./ToDoitem";
import "./TODO.css";

export const ToDolist = ({ todoitems }) => {
  return (
    <Card className="todolist">
      {todoitems.map((item) => (
        <ToDoitem item={item} />
      ))}
    </Card>
  );
};

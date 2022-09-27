import { title } from "process";
import React, { ChangeEvent, useState } from "react";

import TodoForm from "./components/TodoForm";
import { ITodo } from "./components/types";

function App() {
  return (
    <div>
      <TodoForm />
    </div>
  );
}

export default App;

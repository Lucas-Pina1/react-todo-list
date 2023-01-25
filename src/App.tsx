import { useState } from "react";
import * as C from "./App.styles";

import { Item } from "./@types/Item";

import { ListItem } from "./components/ListItem";
import { AddArea } from "./components/AddArea";

export const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Comprar frutas", done: false },
    { id: 2, name: "Comprar frango", done: false },
  ]);

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de tarefas</C.Header>

        <AddArea />

        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </C.Area>
    </C.Container>
  );
};

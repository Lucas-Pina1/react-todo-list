import { useState, KeyboardEvent } from "react";
import * as C from "./styles";

type Props = {
  onEnter: (taskName: string) => void;
};

export const AddArea = ({ onEnter }: Props) => {
  const [inputText, setInputText] = useState("");

  const handleKeyUp = (event: KeyboardEvent) => {
    const keyEnterOrNotNull = event.code === "Enter" && inputText !== "";

    if (keyEnterOrNotNull) {
      onEnter(inputText);
    }
  };

  return (
    <C.Container>
      <div className="image">➕</div>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
        onKeyUp={handleKeyUp}
      />
    </C.Container>
  );
};

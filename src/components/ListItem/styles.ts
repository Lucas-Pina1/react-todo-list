import styled from "styled-components";

type ContainerProps = {
  done: boolean;
};

export const Container = styled.div(
  ({ done }: ContainerProps) =>
    `
  display: flex;
  align-items: center;
  background-color: #20212C;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;

  input {
    width: 20px;
    height: 20px;
    margin-right: 50px;
  }

  label {
    color: #ccc;
    text-decoration: ${done ? "line-through" : "initial"}
  }
`
);

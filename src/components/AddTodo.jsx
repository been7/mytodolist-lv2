import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import uuid from "react-uuid";
import { addTodo } from "../redux/modules/todos";

// todo 추가하기
function AddTodo() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const todos = useSelector((state) => state.todos.todos);

  const dispatch = useDispatch();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    // 입력값 없을 때 추가하지 않음
    if (title === "" || contents === "")
      return alert("제목과 내용을 입력하세요.");

    dispatch(
      addTodo({
        id: uuid(),
        title,
        contents,
        isDone: false,
      })
    );
    setTitle("");
    setContents("");
  };

  return (
    <FormBox onSubmit={handleOnSubmit}>
      <div>
        제목 :{" "}
        <input
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        내용 :{" "}
        <input
          type="text"
          value={contents}
          onChange={(event) => {
            setContents(event.target.value);
          }}
        />
      </div>
      <div>
        <button>추가하기</button>
      </div>
    </FormBox>
  );
}

// 스타일 컴포넌트
const FormBox = styled.form`
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  margin: 10px;
  padding: 10px;
`;

export default AddTodo;

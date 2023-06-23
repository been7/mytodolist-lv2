import React from "react";
import styled from "styled-components";
import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";

// 메인화면
function Home() {
  return (
    <>
      <Container>
        <HeaderBox>
          <div>My Todo List</div>
          <div>React</div>
        </HeaderBox>
        <main>
          <AddTodo />
          <TodoList type="working" title="Working" />
          <TodoList type="done" title="Done" />
        </main>
        <footer></footer>
      </Container>
    </>
  );
}

// 스타일 컴포넌트
const Container = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0px auto;
`;

const HeaderBox = styled.header`
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  margin: 10px;
  padding: 10px;
`;

export default Home;

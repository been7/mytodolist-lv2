import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

// 상세보기 누르면 넘어가는 페이지
function DetailPage() {
  const navigate = useNavigate();

  const params = useParams();

  const todos = useSelector((state) => state.todos.todos);

  const foundTodo = todos.find((item) => {
    return item.id === params.id;
  });

  return (
    <Container>
      <div>
        <Header>
          <h6>ID : {foundTodo.id}</h6>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            이전으로
          </button>
        </Header>
      </div>
      <Main>
        <h3>{foundTodo.title}</h3>
        <div>{foundTodo.contents}</div>
      </Main>
    </Container>
  );
}

// 스타일 컴포넌트
const Container = styled.div`
  border: 1px solid gray;
  padding: 10px;
  width: 10%;
  height: 40vh;
  max-width: 1200px;
  min-width: 800px;
  margin: 250px auto;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Main = styled.main`
  margin-top: 50px;
`;

export default DetailPage;

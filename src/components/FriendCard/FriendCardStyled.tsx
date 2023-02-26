import styled from "styled-components";

export const FriendCardStyled = styled.article`
  box-sizing: border-box;
  height: 300px;
  width: 200px;
  border-radius: 15px;
  background-color: #1f1d2b;
  text-align: center;
  color: #ffff;
  margin: 80px 10px -10px 15px;
  border: 3px solid black;

  .info {
    display: flex;
    flex-direction: column;
    background-color: #403b57;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-radius: 13px 13px 0 0;
    border-bottom: 3px solid black;
  }
  img {
    height: 196px;
    width: 194px;
    border-radius: 0 0 13px 13px;
  }
`;

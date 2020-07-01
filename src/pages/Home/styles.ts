import styled from "styled-components";
import { Button } from "@material-ui/core";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #003973, #e5e5be);
  > div:first-child {
    display: flex;
    > input {
      border-radius: 5px;
      width: 300px;
      height: 45px;
      border: 1px solid #8e8e8e;
      padding: 10px;
      font-size: 16px;
      margin-top: 10px;
      margin-right: 5px;
    }
    > input:hover {
      border-color: #1b1b1b;
    }
    > input:focus {
      border-color: #1b1b1b;
    }
  }
  > div:last-child {
    display: flex;
    flex-direction: column;

    border-radius: 20px;
    width: 250px;
    height: 90px;
    padding: 10px;
    > h2 {
      font-size: 30px;
      margin-bottom: 5px;
    }
    > p {
      font-size: 35px;
      margin-bottom: 10px;
    }
    > div {
      > span {
        font-size: 20px;
        margin-right: 5px;
      }
    }
  }
`;

export const StyledButton = styled(Button)`
  width: 100px !important;
  margin-top: 10px !important;
`;

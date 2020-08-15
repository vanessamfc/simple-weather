import styled from "styled-components";
import { Button } from "@material-ui/core";

function getBackground(weather: string) {
  switch (weather) {
    case "Clear": {
      return "linear-gradient(to right, #1c92d2, #f2fcfe)";
    }
    case "Rain": {
      return "linear-gradient(to left, #bdc3c7, #000c40)";
    }
    case "Snow": {
      return "linear-gradient(to left, #e0eafc, #cfdef3)";
    }
    case "Clouds" || "Mist": {
      return "linear-gradient(to right, #2c3e50, #bdc3c7);";
    }
    default:
      return "linear-gradient(to right, #286DD9, #E9E9E9);";
  }
}

export const Container = styled.div<{ weather: string }>`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease-in-out;
  background: ${({ weather }) => getBackground(weather)};
  > div:first-child {
    display: flex;
    flex-direction: row;

    > input {
      border-radius: 5px;
      width: 300px;
      height: 45px;
      border: 1px solid #3f51b5;
      
      box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.15);
      padding: 10px;
      font-size: 17px;
      margin-top: 10px;
      margin-right: 5px;
    }
    
  }
  > div:last-child {
    display: flex;
    flex-direction: column;
    margin-top:20px;
    >p{
      color:#000;
      padding:15px;
      background-color:rgb(254, 245, 245);;
      border-radius:5px;
      border:1px solid #ef5350;
      box-shadow: 0px 0px 15px 3px rgba(0,0,0,0.0);
    }
    > div {
      display:flex;
      flex-direction: column;
      border-radius: 20px;
      box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.55);
      padding: 15px;
      align-items: flex-start;
      background-color: #fff;
      > h2 {
        font-size: 30px;
        margin-bottom: 5px;
      }
      div{
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
        padding-bottom:10px;
      > svg {
        height: 35px;
        width: 35px;
        margin-left:5px;

      }
      > p {
        font-size: 35px;
        }
      } 

      > div:last-child
        > span {
          font-size: 20px;
          margin-right: 5px;
        }
      }
    }
  }
`;

export const StyledButton = styled(Button)`
  width: 100px !important;
  margin-top: 10px !important;
`;

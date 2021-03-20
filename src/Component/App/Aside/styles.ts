import styled from "styled-components";

export const Aside = styled.aside`
  background-color: whitesmoke;
  max-width: 360px;
  height: 500px;
  flex-grow: 2;
  border-right: 1px solid #d3d3d3;

  .display-none {
    .sub-menus {
      /* display: none; */
    }
  }

  header {
    display: flex;
    background-color: white;
    padding: 10px;
    flex: 1;

    div:nth-child(1) {
      display: flex;
      flex: 1;
      justify-content: flex-start;

      button {
        border: 2px solid black;
        padding: 10px;
        border-radius: 20px;
        outline: none;
        cursor: pointer;

        &:hover {
          transition: 0.3s;
          border: 2px solid black;
        }
      }
      i {
      }
    }
    div:nth-child(2) {
      display: flex;
      flex: 1;
      background-color: white;
      align-content: flex-end;
      align-items: flex-end;
      justify-items: flex-end;
      justify-content: flex-end;

      button {
        padding: 10px;
        font-weight: bold;
        cursor: pointer;
        width: 60px;
      }
    }
  }

  section {
    .item {
      background-color: white;
      display: flex;
      flex-direction: column;
      margin: 5px;
      border: 1px solid #d3d3d3;

      &:hover {
        cursor: pointer;
        background-color: whitesmoke;
      }
      div {
        margin: 5px;
      }

      .box {
        div:nth-child(1) {
          display: flex;
          flex-direction: row;
        }

        span:nth-child(2) {
          margin-left: 5px;
        }

        span {
          display: flex;
          align-self: center;
          .fas {
            font-size: 10px;
            transition: 0.3s;
          }
        }
      }
    }
    .sub-menus {
      div {
        background-color: white;
        margin-left: 40px;
        font-weight: normal;
        position: relative;

        &:hover {
          font-weight: bold;
          position: static;
        }
      }
    }
  }
`;

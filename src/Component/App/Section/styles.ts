import styled from "styled-components";

export const Section = styled.section`
  background: white;
  flex-grow: 6;

  header {
    background-color: white;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    input {
      width: 100%;
      padding: 5px;
    }

    section {
      display: flex;
      flex-direction: row;
      align-items: center;
      div:nth-child(1) {
        width: 30px;
      }

      div:nth-child(2) {
        margin-top: 5px;

        button {
          margin: 0px 5px;
          padding: 5px;
          cursor: pointer;
          border: 1px solid #d3d3d3;
          outline: none;
        }
      }
    }
  }

  .hiden {
    visibility: hidden;
    display: none !important;
  }

  .item {
    background-color: white;
    border: 1px solid #d3d3d3;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;

    &:hover {
      background-color: whitesmoke;
      cursor: pointer;
    }

    .icon {
      width: 40px;
      padding: 0;
      width: 50px;
      height: 50px;
      line-height: 50px;
      span {
        font-size: 10px;

        padding: 0px;
        width: 30px;
        height: 30px;
        line-height: 30px;

        display: flex;

        font-size: 12px;
        font-weight: lighter !important;
        color: #fff !important;
        text-align: center;
        white-space: nowrap;
        vertical-align: baseline;
        border-radius: 50px;
        position: relative;
        top: 10px;
        left: 5px;
        text-align: center;

        justify-content: center;
      }

      .input-checkbox {
        input {
          margin: 10px;
          &:checked {
          }

          &:hover {
            background-color: red !important;
          }
        }
      }
    }

    .details {
      width: 100%;
      display: flex;
      flex-direction: row;

      .name-and-text {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-self: center;

        flex: 5;

        div:nth-child(2) {
          display: flex;
          flex-direction: row;

          div:nth-child(1) {
            width: 100%;
          }
          .inputCheckBox {
            align-items: center;
            justify-content: flex-end;
            margin-right: 30px;
            background-color: black;
          }
        }
      }

      .item-users {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-right: 20px;
        flex: 1;
        text-align: center;

        div:nth-child(1) {
        }
        span {
          background-color: white;
          border: 0.5px solid black;
          font-size: 10px;
          border-radius: 25px;
          padding: 10px;
          right: 10px;
          margin-left: -10px;
          margin-right: -10px;
        }

        .index-0 {
          z-index: 0;
        }
        .index-1 {
          z-index: 1;
        }
        .index-2 {
          z-index: 2;
        }
        .index-3 {
          z-index: 3;
        }
        .index-4 {
          z-index: 4;
        }
      }
    }
  }
`;

import React, { useState, FormEvent, useCallback, useRef } from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";

interface ChildComponentProps extends RouteComponentProps<any> {
  /* other props for ChildComponent */
}

interface ChildComponentProps {
  history: any;
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  min-width: 600px;
  height: 100vh;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  form {
    background-color: white;
    padding: 20px;
    min-width: 300px;
    border-radius: 3px;
    border: 1px solid #d3d3d3;

    div:nth-child(1) {
      display: flex;
      align-items: center;

      i {
        cursor: pointer;
        &:hover {
          color: gray;
        }
      }
      h2 {
        text-align: center;
        font-weight: bold;

        flex: 1;
      }
    }

    div {
      padding: 10px;

      input {
        width: 100%;
        padding: 10px;
        border: 1px solid #d3d3d3d3;
        background-color: whitesmoke;
        outline: red;
      }

      button {
        width: 100%;
        padding: 10px;
        font-weight: bold;
        cursor: pointer;
      }
    }
  }

  .view-btn {
    display: flex;
    justify-content: space-around;

    padding: 20px;
    min-width: 300px;
    border-radius: 3px;

    flex-direction: row;

    button {
      cursor: pointer;
      padding: 10px;
    }

    div:nth-child(1) {
      button {
        background-color: #007bff;
        color: white;
        border: 1px solid transparent;

        &:hover {
          background-color: #0372e9;
        }
      }
    }

    div:nth-child(2) {
      button {
        background-color: #28a745;
        color: white;
        border: 1px solid transparent;

        &:hover {
          background-color: #218a39;
        }
      }
    }
  }
`;

const Login: React.FC<ChildComponentProps> = ({ history }) => {
  const [loginOrRegister, setLoginOrRegister] = useState("");
  const nameInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback((event: FormEvent, value) => {
    event.preventDefault();

    const name = nameInputRef.current;
    const password = nameInputRef.current;

    if (value === "REGISTER") {
      if (name?.value.length !== 0) {
        if (password?.value.length !== 0) {
          const dataStringfy = JSON.stringify({
            login: name?.value,
            password: password?.value,
          });

          localStorage.setItem("register", dataStringfy);
          alert("registro efetuado com sucesso");
          setLoginOrRegister("LOGIN");
        } else {
          alert("senha vazia");
        }
      } else {
        alert("nome vazio");
      }
    }

    if (value === "LOGIN") {
      if (name?.value.length !== 0) {
        if (password?.value.length !== 0) {
          const getUser = localStorage.getItem("register");
          const user = JSON.parse(getUser || "[]");
          if (user.login === name?.value) {
            if (user.password === password?.value) {
              alert("LOGADO");
              history.push("/app");
            }
          } else {
            alert("nome não existe");
          }
        } else {
          alert("senha vazia");
        }
      } else {
        alert("nome vazio");
      }
    }
  }, []);

  const ComponentLogin = () => {
    return (
      <form onSubmit={(event) => handleSubmit(event, "LOGIN")}>
        <div>
          <i
            className="fas fa-arrow-left"
            onClick={() => setLoginOrRegister("")}
          ></i>
          <h2>Login</h2>
        </div>
        <div>
          <input placeholder="Nome" type="text" ref={nameInputRef} />
        </div>
        <div>
          <input placeholder="Senha" type="password" ref={passwordInputRef} />
        </div>
        <div>
          <button>LOGIN</button>
        </div>
      </form>
    );
  };

  const ComponentRegister = () => {
    return (
      <form onSubmit={(event) => handleSubmit(event, "REGISTER")}>
        <div>
          <i
            className="fas fa-arrow-left"
            onClick={() => setLoginOrRegister("")}
          ></i>
          <h2>Registrar</h2>
        </div>
        <div>
          <input placeholder="Nome" type="text" ref={nameInputRef} />
        </div>
        <div>
          <input placeholder="Senha" type="password" ref={passwordInputRef} />
        </div>
        <div>
          <button>REGISTRAR</button>
        </div>
      </form>
    );
  };
  return (
    <Main>
      {loginOrRegister.length === 0 ? (
        <div className="view-btn">
          <div>
            <button onClick={() => setLoginOrRegister("LOGIN")}>Login</button>
          </div>
          <div>
            <button onClick={() => setLoginOrRegister("REGISTER")}>
              Registrar
            </button>
          </div>
        </div>
      ) : null}

      {loginOrRegister === "LOGIN" ? (
        <ComponentLogin />
      ) : loginOrRegister === "REGISTER" ? (
        <ComponentRegister />
      ) : null}
    </Main>
  );
};

export default Login;

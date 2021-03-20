import React, { useEffect, useState } from "react";

import axios from "axios";

import { InterfaceData, LanguageInterface } from "../../../types";
import { Aside } from "./styles";

interface ChildComponentProps {
  history: any;
  value: any;
  subMenuValues: any;
  language: any;
  languageCurrent: any;
}

const AsideComponent: React.FC<ChildComponentProps> = ({
  value,
  subMenuValues,
  history,
  language,
  languageCurrent,
}) => {
  const [data, setData] = useState<InterfaceData[]>();
  const [modal, setModal] = useState("");

  useEffect(() => {
    async function init() {
      setData(value);
    }

    init();
  }, []);

  const handleOpen = async (id: string) => {
    if (modal === id) {
      setModal("");
      subMenuValues("");
    } else {
      setModal(id);
    }
  };

  const handleShowSubMenu = async (id: string) => {
    const response = await axios.get(
      `http://my-json-server.typicode.com/workinideas/vagafrontendteste/items/${id}`
    );

    subMenuValues(response.data);
  };

  const handleLogout = () => {
    localStorage.clear();
    history.push("/login");
  };
  return (
    <Aside>
      <header>
        <div>
          <button onClick={handleLogout}>
            <i className="fas fa-door-open"></i>
          </button>
        </div>
        <div>
          <button>New</button>
        </div>
      </header>
      <section>
        {data?.map((info, index: string | number) => {
          return (
            <div key={info.id} className="item">
              <div className="box" id={info.id.toString()}>
                <div
                  className="name"
                  onClick={() => handleOpen(info.id.toString())}
                >
                  <span>
                    {modal === info.id.toString() ? (
                      <i className="fas fa-arrow-down"></i>
                    ) : (
                      <i className="fas fa-arrow-right"></i>
                    )}
                  </span>

                  <span>
                    {language === "pt"
                      ? `Conta ${info.id}`
                      : `Account ${info.id}`}
                  </span>
                </div>
                {modal === info.id.toString() ? (
                  <div className="sub-menus">
                    {info.subMenus.map((sub, otherIndex: number, all: any) => {
                      return (
                        <div
                          key={sub.id}
                          onClick={() => handleShowSubMenu(sub.id.toString())}
                        >
                          {
                            languageCurrent?.account[index][
                              otherIndex.toFixed()
                            ].name
                          }
                        </div>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </section>
    </Aside>
  );
};

export default AsideComponent;

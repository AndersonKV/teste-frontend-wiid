import React, { useEffect, useState, useRef, useCallback } from "react";
import { SubMenu, LanguageInterface } from "../../../types";

import { Section } from "./styles";

type Props = {
  value: any;
  handleChangeLanguage: (value: string) => void;
  language: any;
  languageCurrent: LanguageInterface;
};

const SectionComponent: React.FC<Props> = ({
  value,
  languageCurrent,
  language,
  handleChangeLanguage,
}) => {
  const [dataSubMenu, setDataSubMenu] = useState<SubMenu>();
  const [changeInput, setChangeInput] = useState("");

  const [individualShowInput, setIndividualShowInput] = useState("");
  const [file, setFile] = useState([]);
  const [colors, setColors] = useState<any>([
    ["#00FFFF"],
    ["#8A2BE2"],
    ["#A52A2A"],
    ["#D2691E"],
    ["#FF7F50"],
    ["#6495ED"],
    ["#20B2AA"],
    ["#2c3e50"],
    ["#86A8E7"],
    ["#240b36"],
    ["#c31432"],
    ["#38ef7d"],
    ["#11998e"],
    ["#2948ff"],
    ["#6f0000"],
  ]);
  const inputRef = useRef<any[]>();

  useEffect(() => {
    async function init() {
      setDataSubMenu(value);

      inputRef.current = [];
    }

    init();
  }, [value]);

  const handleFile = useCallback(() => {
    const values = inputRef.current;

    if (!values) {
      return;
    }

    values.forEach((element) => {
      if (document.getElementById(`item-${element.id}`)) {
        document.getElementById(`item-${element.id}`)?.classList.add("hiden");
      }
    });

    inputRef.current = [];
    setIndividualShowInput("");
    setChangeInput("");
  }, []);

  const handleChangeInput = useCallback((value: string) => {
    const arr: any = [{ id: value }];

    if (inputRef.current === undefined) {
      inputRef.current = arr;
    } else {
      const newArr: any = [];
      let verify;

      inputRef.current.forEach((element) => {
        if (element.id === value) {
          verify = true;
        } else {
          newArr.push(element);
        }
      });

      if (verify === true) {
        inputRef.current = newArr;
      } else {
        const newValue = newArr.concat(arr);
        inputRef.current = newValue;
      }
    }
  }, []);

  const randomDate = () => {
    const d = new Date();
    return "lorem ipsum, " + d.toString().split(" ")[4];
  };

  const handleHoverChangeInput = (id: string) => {
    if (
      inputRef.current?.length === undefined ||
      inputRef.current?.length === 0
    ) {
      setIndividualShowInput(id);
    }
  };

  const handleLeaveHoverChangeInput = useCallback(() => {
    if (
      inputRef.current?.length === undefined ||
      inputRef.current?.length === 0
    ) {
      setChangeInput("");
      setIndividualShowInput("");
    } else {
      setChangeInput("active");
    }
  }, []);

  return (
    <Section>
      <header>
        <div>
          <input placeholder={languageCurrent.inputSearch.input} />
        </div>
        <section>
          <div>
            <input type="checkbox" />
          </div>
          <div>
            <button>{languageCurrent?.buttons.btn1}</button>
            <button onClick={handleFile}>
              {languageCurrent?.buttons.btn2}
            </button>
            <button>{languageCurrent?.buttons.btn3}</button>
          </div>
          <div>
            <select
              value={language}
              onChange={(event) => handleChangeLanguage(event.target.value)}
            >
              <option value="pt">pt</option>
              <option value="en">en</option>
            </select>
          </div>
        </section>
      </header>

      <div>
        {dataSubMenu?.subMenuItems?.map((sub) => {
          return (
            <div
              key={sub.id}
              className="item"
              id={`item-${sub.id}`}
              onMouseEnter={() => handleHoverChangeInput(sub.id)}
              onMouseLeave={handleLeaveHoverChangeInput}
            >
              <div className="icon">
                {individualShowInput === sub.id.toString() ? (
                  <div className="input-checkbox">
                    <input
                      type="checkbox"
                      onChange={() => handleChangeInput(sub.id)}
                    />
                  </div>
                ) : changeInput === "active" ? (
                  <div className="input-checkbox">
                    <input
                      type="checkbox"
                      onChange={() => handleChangeInput(sub.id)}
                    />
                  </div>
                ) : (
                  <span style={{ backgroundColor: `${colors[sub.id]}` }}>
                    {sub.owner}
                  </span>
                )}
              </div>
              <div className="details">
                <div className="name-and-text">
                  <div>{sub.name}</div>
                  <div>
                    <div>{sub.subject}</div>
                  </div>
                </div>
                <div className="item-users">
                  <div>
                    <div>{randomDate()}</div>
                  </div>
                  <div>
                    {sub.users.map((user, index: number) => {
                      return (
                        <span className={`index-${index}`} key={index}>
                          {user}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default SectionComponent;

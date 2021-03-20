import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";

import axios from "axios";
import Aside from "./Aside";
import Section from "./Section";

import en from "../../assets/locale/en/translation.json";
import pt from "../../assets/locale/pt/translation.json";

import { LanguageInterface } from "../../types/index";

interface ChildComponentProps extends RouteComponentProps<any> {
  /* other props for ChildComponent */
}

interface ChildComponentProps {
  history: any;
}

const SectionComponent: React.FC<ChildComponentProps> = ({ history }) => {
  const [data, setData] = useState([]);
  const [dataSubMenu, setDataSubMenu] = useState([]);
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState("pt");
  const [languageCurrent, setLanguageCurrent] = useState<any>();

  useEffect(() => {
    async function init() {
      const getUser = localStorage.getItem("register");
      const user = JSON.parse(getUser || "[]");

      if (user.length !== 0) {
        if (user.login.length !== 0 && user.password.length !== 0) {
        } else {
          history.push("/login");
        }
      } else {
        history.push("/login");
      }

      const response = await axios.get(
        "http://my-json-server.typicode.com/workinideas/vagafrontendteste/menus"
      );

      setData(response.data);
      setLanguageCurrent(pt);
      setLoading(true);
    }
    init();
  }, []);

  const handleSubMenuValues = (param: any) => {
    setDataSubMenu(param);
  };

  const handleChangeLanguage = (event: string) => {
    setLanguage(event);

    if (event === "pt") {
      setLanguageCurrent(pt);
    } else {
      setLanguageCurrent(en);
    }
  };

  return (
    <>
      {loading !== false ? (
        <>
          <Aside
            value={data}
            subMenuValues={handleSubMenuValues}
            history={history}
            language={language}
            languageCurrent={languageCurrent}
          />
          <Section
            value={dataSubMenu}
            handleChangeLanguage={handleChangeLanguage}
            language={language}
            languageCurrent={languageCurrent}
          />
        </>
      ) : null}
    </>
  );
};

export default SectionComponent;

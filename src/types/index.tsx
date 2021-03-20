export interface InterfaceData {
  id: number;
  name: string;
  subMenus: SubMenus[];
}

interface SubMenus {
  id: number;
  name: string;
  map: any;
}

export interface SubMenu {
  id: number;
  subMenuItems: SubMenuItems[];
}

interface SubMenuItems {
  id: string;
  name: string;
  owner: string;
  subject: string;
  users: Users[];
  map: any;
}

interface Users {
  [state: string]: string; //indexer
}

type NameLanguage = {
  name: string;
};

export type LanguageInterface = {
  // account: {
  //   [0]: {
  //     [0]: NameLanguage;
  //     [1]: NameLanguage;
  //   };
  //   [1]: {
  //     [0]: NameLanguage;
  //   };
  //   [2]: {
  //     [0]: NameLanguage;
  //     [1]: NameLanguage;
  //     [2]: NameLanguage;
  //   };
  // };
  buttons: {
    btn1: string;
    btn2: string;
    btn3: string;
  };
  inputSearch: {
    input: string;
  };
};

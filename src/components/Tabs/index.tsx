import React from "react";
import classNames from "classnames";

import s from "./Tabs.module.scss";

const ThemeContext = React.createContext({
  activeTab: 0,
  changeTab: (key: number) => {},
});

type TabProps = {
  active?: boolean;
  key?: number;
};

export const Tab: React.FC<TabProps> = ({
  active = false,
  key = 0,
  children,
}) => {
  return (
    <ThemeContext.Consumer>
      {({ activeTab, changeTab }) => {
        const isActiveTab = activeTab === key;

        return (
          <button
            type="button"
            className={classNames(s.tab, isActiveTab && s.active)}
            onClick={() => {
              changeTab(key);
            }}
          >
            {children}
          </button>
        );
      }}
    </ThemeContext.Consumer>
  );
};

interface OnChangeFunc {
  (activeTab: number): any;
}

type TabsProps = {
  onChange?: OnChangeFunc;
  children: React.ReactNode;
};

export const Tabs: React.FC<TabsProps> = ({ onChange, children }) => {
  let currentTab = 0;
  // @ts-ignore
  const childrenWithKeys = children?.map((item: any, idx: number) => {
    if (item.props.active) currentTab = idx;
    return {
      ...item,
      props: { ...item.props, key: idx },
    };
  });

  const [activeTab, setActiveTab] = React.useState(currentTab);

  const changeTab = (newKey: number) => {
    setActiveTab(newKey);
    if (onChange) {
      onChange(newKey);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        activeTab,
        changeTab,
      }}
    >
      {childrenWithKeys && <div className={s.root}>{childrenWithKeys}</div>}
    </ThemeContext.Provider>
  );
};

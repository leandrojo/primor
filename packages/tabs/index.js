/* eslint-disable no-unused-vars */

import React from 'react';
import {
  Tabs as TabsNative,
  TabList as TabListNative,
  Tab as TabNative,
  TabPanel as TabPanelNative,
} from 'react-tabs';
import styled, { css } from 'styled-components';
import { common, Button, ButtonGroup } from '@primer/core';

const { typeChecker } = common;

const TabsContext = React.createContext({
  position: 0,
  width: 0,
});

const Indicator = styled.div`
  width: ${props => props.width}px;
  height: 3px;
  background: ${props => props.theme.colors.primary};
  position: absolute;
  margin-top: 58px;
  margin-left: 0;
  transition: margin 0.5s ease;
  margin-left: ${props => props.position}px;
  margin-top: 48px;
`;

const StyledTabList = styled(TabListNative)`
  display: flex;
  flex: 1;
  height: 36px;
  width: 100%;
`;

// eslint-disable-next-line react/prop-types
const TabList = ({ children }) => {
  const { position, width } = React.useContext(TabsContext);
  return (
    <ButtonGroup fluid>
      <StyledTabList>
        {children}
        <Indicator position={position} width={width} />
      </StyledTabList>
    </ButtonGroup>
  );
};

TabList.tabsRole = 'TabList';

const StyledTabs = styled(TabsNative)`
  display: flex;
  flex-direction: column;
`;

const StyledTab = styled(TabNative)`
  flex: 1;
`;

const TabButton = styled(Button)`
  background-color: transparent;
  border-radius: 0px;
  box-shadow: none;
  color: ${props => props.theme.colors.grayDark};

  &:hover {
    box-shadow: none;
    color: ${props => props.theme.colors.primary};
  }

  ${props => props.selected
    && css`
      color: ${props.theme.colors.primary};
    `};
`;

// eslint-disable-next-line react/prop-types
const Tab = ({ children }) => (
  <StyledTab>
    <TabButton fluid type="link">
      {children}
    </TabButton>
  </StyledTab>
);

Tab.role = 'Tab';
Tab.tabsRole = 'Tab';

const TabPanel = styled(TabPanelNative)`
  overflow: hidden;

  &:not(:empty) {
    height: calc(100vh - 184px);
    overflow: scroll;
  }
`;

TabPanel.tabsRole = 'TabPanel';

// eslint-disable-next-line react/prop-types
const Tabs = ({ children }) => {
  const [position, setPosition] = React.useState(0);
  const [currentTab, setCurrentTab] = React.useState(0);
  const [widthTab, setWidthTab] = React.useState(0);

  const callback = (...args) => {
    // eslint-disable-next-line no-console
    console.log(args);
  };

  return (
    <TabsContext.Provider value={{ position }}>
      <StyledTabs>{children}</StyledTabs>
    </TabsContext.Provider>
  );
};

export {
  Tabs, TabList, Tab, TabPanel,
};
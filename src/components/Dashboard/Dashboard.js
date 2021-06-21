import { useState } from "react";
import React from "react";

import { Layout, Menu } from "antd";
import "antd/dist/antd.css";

import { ALL_TRANSACTIONS, TAGS, TEAMS } from "../../config/api-urls";
import { COLUMNS } from "../../constants/constants";

import useFetchData from "../../hooks/useFetchData";
import Analytics from "../Analytics/Analytics";
import Overview from "../Overview/Overview";
import Search from "../Search/Search";

const { Header, Content, Footer } = Layout;

const Dashboard = () => {
  const res = useFetchData(ALL_TRANSACTIONS);
  const tags = useFetchData(TAGS);
  const teams = useFetchData(TEAMS);

  let [userSelection, setUserSelection] = useState(0);

  const selectMenu = (key) => {
    setUserSelection(key);
  };

  return (
    res?.response && (
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item
              key="1"
              onClick={() => {
                selectMenu(0);
              }}
            >
              Overview
            </Menu.Item>
            <Menu.Item
              key="2"
              onClick={() => {
                selectMenu(1);
              }}
            >
              Search
            </Menu.Item>
            <Menu.Item
              key="3"
              onClick={() => {
                selectMenu(2);
              }}
            >
              Analytics
            </Menu.Item>
          </Menu>
        </Header>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            {userSelection === 0 && (
              <Overview data={res.response.data} columns={COLUMNS} />
            )}
            {userSelection === 1 && (
              <Search data={res.response.data} columns={COLUMNS} />
            )}
            {userSelection === 2 && tags && teams && (
              <Analytics data={res.response.data} tags={tags} teams={teams} />
            )}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created for Journal Technologies Assignment
        </Footer>
      </Layout>
    )
  );
};

export default Dashboard;

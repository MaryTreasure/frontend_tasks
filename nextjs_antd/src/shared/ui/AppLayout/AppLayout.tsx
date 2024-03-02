"use client";

import { Layout, Flex, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import React, { FC, PropsWithChildren, useState } from "react";
import styles from "./AppLayout.module.scss";
import Paragraph from "antd/lib/typography/Paragraph";
import {
  HomeOutlined,
  RobotOutlined,
  ProfileOutlined,
  MenuOutlined,
} from "@ant-design/icons";

const AppLayout: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      className={styles.AppLayout}
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: "20px" }}>
          <MenuOutlined
            onClick={() => setCollapsed(!collapsed)}
            style={{ margin: 0 }}
          />
          <p style={{ margin: 0 }} className={styles.AppLayout__header}>
            Header
          </p>
        </div>
        <div style={{display: 'flex', gap: '50px', alignItems: 'center'}}>
          <Paragraph style={{marginBottom: 0}}>Мои проекты</Paragraph>
          <Paragraph style={{marginBottom: 0}}>База знаний</Paragraph>
          <Paragraph style={{marginBottom: 0}}>Roadmap</Paragraph>
        </div>
      </Header>

      <Layout>
        <Sider collapsed={collapsed} theme="light">
          <Menu
            mode="inline"
            items={[
              {
                label: "Home",
                key: "home",
                icon: <HomeOutlined />,
                children: [
                  {
                    label: "Add profile",
                    key: "add_profile",
                  },
                  {
                    label: "All users",
                    key: "all_users",
                  },
                ],
              },
              {
                label: "About us",
                key: "about_us",
                icon: <RobotOutlined />,
              },
              {
                label: "Conditions",
                key: "conditions",
                icon: <ProfileOutlined />,
              },
            ]}
          />
        </Sider>
        <Content className={styles.AppLayout__content} style={{ flexGrow: 1 }}>
          {children}
        </Content>
      </Layout>

      <Footer>Footer</Footer>
    </Layout>
  );
};

export default AppLayout;

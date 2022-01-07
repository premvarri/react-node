import React, { useEffect } from "react";

import { Layout } from "antd";

import SideMenu from "./SideMenu";

import Header from "./Header";
import "./Layout.scss";
const { Content } = Layout;

const LayoutWithRoute = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideMenu />

      <Layout>
        <Header />
        <Layout>
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: "90%",
                backgroundColor: "white",
                display: "flex",
              }}
            >
              {children}
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
    //  <Layout>
    //     <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
    //       <div className="logo" />
    //       <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
    //         <Menu.Item key="1" icon={<UserOutlined />}>
    //           nav 1
    //         </Menu.Item>
    //         <Menu.Item key="2" icon={<VideoCameraOutlined />}>
    //           nav 2
    //         </Menu.Item>
    //         <Menu.Item key="3" icon={<UploadOutlined />}>
    //           nav 3
    //         </Menu.Item>
    //       </Menu>
    //     </Sider>
    //     <Layout className="site-layout">
    //       <Header className="site-layout-background" style={{ padding: 0 }}>
    //         {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
    //           className: 'trigger',
    //           onClick: this.toggle,
    //         })}
    //       </Header>
    //       <Content
    //         className="site-layout-background"
    //         style={{
    //           margin: '24px 16px',
    //           padding: 24,
    //           minHeight: 280,
    //         }}
    //       >
    //         Content
    //       </Content>
    //     </Layout>
    //   </Layout>
  );
};

export default LayoutWithRoute;

import React from "react";
import { Button } from "antd";
import { Layout, Row, Col } from "antd";
import { useLocation } from "react-router-dom";
import { useStateValue } from "../../util/StateProvider.jsx";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./Layout.scss";

const { Header } = Layout;
const Head = () => {
  const [getdata] = useStateValue();
  const [, dispatch] = useStateValue();
  const location = useLocation();
  return (
    <Header
      className="header"
      style={{
        padding: 0,
        backgroundColor: "#ffffff",
      }}
    >
      <Row>
        <Col span={8}>
          <Button
            type="text"
            shape="round"
            icon={getdata.sideCollapse ? <RightOutlined /> : <LeftOutlined />}
            size={"large"}
            style={{ font: "Montserrat", fontWeight: "bold" }}
            onClick={() => {
              dispatch({
                type: "SETCOLLAPSE",
                sideCollapse: !getdata.sideCollapse,
              });
            }}
          >
            &nbsp;&nbsp;
            {location.pathname.slice(1).charAt(0).toUpperCase() +
              location.pathname.slice(2)}
          </Button>
        </Col>

        <Col span={4}></Col>
        <Col span={6}></Col>
        <Col span={6}></Col>
      </Row>
    </Header>
  );
};

export default Head;

import React from "react";

import { Layout, Menu } from "antd";
import {
  FaRegHospital,
  FaRegCalendarAlt,
  FaLifeRing,
  FaChartArea,
} from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { Link } from "react-router-dom"; //, useLocation
import { useStateValue } from "../../util/StateProvider.jsx";
import logo from "../../assests/NYC_White.svg";
import smlLogo from "../../assests/logo.PNG";

const { Sider } = Layout;
// const ConnectIcon = (props) => <Icon component={connectSvg} {...props} />;
const App = () => {
  const [getdata] = useStateValue();

  return (
    <Sider
      collapsible
      collapsed={getdata.sideCollapse}
      className="sidebar"
      trigger={
        <text style={{ fontWeight: "lighter" }}>© 2022 CoherentRx, Inc</text>
      }
      style={{
        backgroundColor: "#323031",
      }}
    >
      {getdata.sideCollapse ? (
        <img
          style={{ margin: 15 }}
          src={smlLogo}
          height={50}
          alt="Logo_Small"
        />
      ) : (
        <img style={{ margin: 15 }} src={logo} alt="Logo" />
      )}

      <Menu
        mode="inline"
        defaultSelectedKeys={["/schedule"]}
        defaultOpenKeys={["/jobs", "/statistics"]}
        style={{
          paddingTop: 25,
          color: "white",
          borderRight: 0,
          backgroundColor: "#323031",
          left: "-1px",
          position: "relative",
        }}
      >
        <Menu.Item
          style={{ backgroundColor: "#323031" }}
          key="/schedule"
          icon={<FaRegCalendarAlt />}
        >
          <span>Schedule</span>
          <Link to="/schedule"></Link>
        </Menu.Item>
        <Menu.Item
          style={{ backgroundColor: "#323031" }}
          key="/clinics"
          icon={<FaRegHospital />}
        >
          <span>Clinics</span>
          <Link to="/clinics"></Link>
        </Menu.Item>

        <Menu.Item
          style={{ backgroundColor: "#323031" }}
          key="/leaves"
          icon={<FaLifeRing />}
        >
          <span>Leaves</span>
          <Link to="/leaves"></Link>
        </Menu.Item>
        <Menu.Item
          style={{ backgroundColor: "#323031" }}
          key="/message"
          icon={<MdMail />}
        >
          <span>Message</span>
          <Link to="/message"></Link>
        </Menu.Item>
        <Menu.Item
          style={{ backgroundColor: "#323031" }}
          key="/analytics"
          icon={<FaChartArea />}
        >
          <span>Analytics</span>
          <Link to="/analytics"></Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default App;

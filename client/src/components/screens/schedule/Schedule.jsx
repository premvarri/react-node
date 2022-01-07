import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { motion, useAnimation } from "framer-motion";
import "./Schedule.scss";
function Schedule() {
  const [visible, setVisible] = useState(true);
  const showDrawer = () => {
    setVisible(!visible);
  };
  const onClose = () => {
    setVisible(false);
  };
  const controls = useAnimation();
  const MotionButton = motion(Button);
  return (
    <div className="Schedule">
      <div className="calender">hello</div>
      <motion.div
        className="leavesReport"
        initial={{ x: "195%" }}
        animate={controls}
        transition={{
          duration: 0.5,
        }}
      >
        <motion.div className="trigger">
          <motion.div
            className="verticalButton"
            onClick={() => {
              console.log(visible);
              if (visible) {
                controls.start({
                  x: "100%",
                });
                setVisible(false);
              } else {
                controls.start({
                  x: "195%",
                });
                setVisible(true);
              }
            }}
          >
            {"\u00A0"} weekly report {"\u00A0"}
          </motion.div>
        </motion.div>
        <motion.div className="report"></motion.div>
      </motion.div>
    </div>
  );
}

export default Schedule;

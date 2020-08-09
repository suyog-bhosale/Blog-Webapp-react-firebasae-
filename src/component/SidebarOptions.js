import React from "react";
import "./SidebarOptions.css";

/**
 * @author
 * @function SidebarOptions
 **/

const SidebarOptions = ({ Icon, title }) => {
  return (
    <div className="sidebarOption">
      <Icon />
      <h2> {title}</h2>
    </div>
  );
};

export default SidebarOptions;

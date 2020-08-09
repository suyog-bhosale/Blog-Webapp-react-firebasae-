import React from "react";
import SidebarOptions from "./SidebarOptions";
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";

import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MessageIcon from "@material-ui/icons/Message";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ListAltIcon from "@material-ui/icons/ListAlt";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/More";
import { Button } from "@material-ui/core";
/**
 * @author
 * @function
 **/

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebarIcon" />
      <SidebarOptions Icon={HomeIcon} title="Home" />
      <SidebarOptions Icon={ExploreIcon} title="Exploer" />
      <SidebarOptions Icon={NotificationsIcon} title="Notification" />
      <SidebarOptions Icon={MessageIcon} title="Message" />
      <SidebarOptions Icon={BookmarkIcon} title="BookMark" />
      <SidebarOptions Icon={ListAltIcon} title="List" />
      <SidebarOptions Icon={AccountCircleIcon} title="Profile" />
      <SidebarOptions Icon={MoreIcon} title="More" />
      <Button svariant="outlined" fullWidth className="sidebarButton">
        Tweet
      </Button>
    </div>
  );
};

export default Sidebar;

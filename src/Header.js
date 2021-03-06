import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar, IconButton } from "@material-ui/core";


function Header() {
  return (
    <div className="header">
      <div className="headerLeft">
        <img
          src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
          alt="logo"
        />
        <div className="header_input">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>

      <div className="headerCenter">
        <div className="header_option header_option-active">
          <HomeIcon fontSize="large" />
        </div>

        <div className="header_option">
          <FlagIcon fontSize="large" />
        </div>

        <div className="header_option">
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>

        <div className="header_option">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>

        <div className="header_option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>



      </div>
      <div className="headerRight">

      <div className="header_info">
          <Avatar />
          <h4>Sanchayan</h4>
        </div>

        <IconButton>
            <AddIcon/>
        </IconButton>

        <IconButton>
            <ForumIcon/>

        </IconButton>

        <IconButton>
            <NotificationsActiveIcon/>
        </IconButton>


        <IconButton>
            <ExpandMoreIcon/>
        </IconButton>
      </div>
    </div>
  );
}

export default Header;

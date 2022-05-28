import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { store } from "../../redux/store";
import { persistStore } from "redux-persist";

export default function Topbar() {
  const history = useHistory();
  const admin =
    JSON.parse(localStorage.getItem("persist:root")) &&
    JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
      .currentUser
      ? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
          .currentUser.accessToken
      : "";

  const handleLogin = () => {
    history.push("/login");
  };

  const handleLogout = () => {
    let persistor = persistStore(store);
    persistor.purge();
    window.location.reload(false);
    history.push("/login");
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin</span>
        </div>
        <div className="topRight">
          {!admin && (
            <div
              className="topbarIconContainer"
              style={{ color: "#5050d9", marginBottom: "5px" }}
              onClick={handleLogin}
            >
              Login
            </div>
          )}
          {admin && (
            <div
              className="topbarIconContainer"
              style={{ color: "#b72a2a", marginBottom: "5px" }}
              onClick={handleLogout}
            >
              Logout
            </div>
          )}
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>

          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}

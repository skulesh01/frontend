import React from "react";
import Grid from "./Grid/Grid";
import Notifications from "./Notifications/Notifications";
import Person from "./Preson/Person";
import Search from "./Search/Search";
import Subscriptions from "./Subscriptions/Subscriptions";

function BottomBar({ children }) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "0",
        height: "10vh",
        minHeight: "30px",
        width: "100vw",
        backgroundColor: "green",
      }}
    >
      <Grid></Grid>
      <Search></Search>
      <Subscriptions></Subscriptions>
      <Notifications></Notifications>
      <Person></Person>
      {children}
    </div>
  );
}

export default BottomBar;

import React from "react";

function Sidebar({ children }) {
  return (
    <div
      className="sidebar"
      style={{
        textAlign: "center",
        position: "absolute",
        bottom: "20%",
        right: "0",
        height: "200px",
        width: "90px",
        backgroundColor: "blue",
      }}
    >
      {children}
    </div>
  );
}

export default Sidebar;

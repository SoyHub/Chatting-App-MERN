import React from "react";
import { SearchOutlined } from "@material-ui/icons";
function SidebarSearch() {
  return (
    <div className="sidebar__search">
      <div className="sidebar__searchContainer">
        <SearchOutlined />
        <input placeholder="Search or star new chat" type="text" />
      </div>
    </div>
  );
}

export default SidebarSearch;

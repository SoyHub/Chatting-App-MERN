import React from 'react'
import "./Sidebar.css"
import SidebarHeader from './SidebarHeader'
import SidebarSearch from './SidebarSearch'
import SidebarChatList from './SidebarChatList'

export const Sidebar = () => {
    return (
        <div className="sidebar">
         <SidebarHeader/>
         <SidebarSearch/>
         <SidebarChatList/>
        </div>
    )
}


import React from 'react'
import { Layout, Menu } from 'antd'
import { FaDashcube, FaUser, FaBell, FaMailBulk } from 'react-icons/fa'
const {Sider} = Layout

function SideNav(props) {
  return (
    <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
            console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
        }}
    >
        <div className="demo-logo-vertical" style={{ width: '100%', marginTop : 60, textAlign : 'center', color : '#fff', fontWeight : 'bolder', fontSize : '2rem', letterSpacing : '1px'}} >
            EDUPRO
        </div>
        <Menu
            style={{minHeight: '100vh', marginTop : 70}}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={"1"}
            items={[
                {
                    key : "1",
                    icon : <FaDashcube/>,
                    label : "Dashboard"
                },
                {
                    key : "2",
                    icon : <FaUser/>,
                    label : "Users"
                },
                {
                    key : "3",
                    icon : <FaBell/>,
                    label : "Notifications"
                },
                {
                    key : "4",
                    icon : <FaMailBulk/>,
                    label : "Send Mail"
                },
            ]}
        />
    </Sider>
  )
}

export default SideNav
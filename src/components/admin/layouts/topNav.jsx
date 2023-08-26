import React from 'react'
import { Layout, Dropdown,Space } from 'antd'
import { FaBell, FaUser, FaCaretDown, FaCog, FaSignOutAlt } from 'react-icons/fa'
const {Header} = Layout

function TopNav() {

    const items = [
        {
          label : "Settings",
          key : 0,
          icon : <FaCog/>
        },
        {
          type : "divider"
        },
        {
          label : "Sign Out",
          key : 1,
          icon : <FaSignOutAlt/>
        }
    ];

  return (
    <Header
        style={{
            padding: 0,
            background: "#E4E9F2",
            display : 'flex',
            justifyContent : 'space-between',
            paddingRight : 30,
        }}
    >
        <div></div>
        <div className='adminTopBarIcons'>
            <div className='topIco'>
                <FaBell className='topBarIcon'/>
            </div>
            <Dropdown
                className='topIco'
                menu={{items}}
                trigger={['click']}
              >
                  <Space>
                        <FaUser className='topBarIcon'/>
                        <FaCaretDown className='caretTopBar'/>
                  </Space>
              </Dropdown>
            </div>
    </Header>
  )
}

export default TopNav
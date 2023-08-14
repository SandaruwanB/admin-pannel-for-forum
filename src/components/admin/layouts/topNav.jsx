import React from 'react'
import { Layout } from 'antd'
import { FaBell, FaUser, FaCaretDown } from 'react-icons/fa'
const {Header} = Layout

function TopNav() {
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
            <div className='topIco'>
                <FaUser className='topBarIcon'/>
                <FaCaretDown className='caretTopBar'/>
            </div>
        </div>
    </Header>
  )
}

export default TopNav
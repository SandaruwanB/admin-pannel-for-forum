import React from 'react'
import { Layout } from 'antd'
import SideNav from './layouts/sideNav'
import TopNav from './layouts/topNav'
const { Content } = Layout

function Users() {
  return (
    <Layout>
        <SideNav key={1}/>
        <Layout>
            <TopNav />
            <Content
                style={{
                    margin: '24px 16px 0',
                }}
            >
            <Layout
                style={{
                padding: 24,
                minHeight: '60vh',
                background: "yellow",
                }}
            >
                <Content>

                </Content>
            </Layout>
            </Content>
        </Layout>
    </Layout>
  )
}

export default Users
import React from 'react'
import { Layout } from 'antd'
import SideNav from './layouts/sideNav'
import TopNav from './layouts/topNav'
const { Content } = Layout


function Home() {
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
            <div
                style={{
                padding: 24,
                minHeight: 360,
                background: "yellow",
                }}
            >
            content
            </div>
            </Content>
        </Layout>
    </Layout>
  )
}

export default Home
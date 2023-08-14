import React from 'react'
import { Layout } from 'antd'
import SideNav from './layouts/sideNav'
const { Header, Content } = Layout


function Home() {
  return (
    <Layout>
        <SideNav/>
        <Layout>
            <Header
                style={{
                    padding: 0,
                    background: "#E4E9F2",
                }}
            />
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
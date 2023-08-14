import React, { useEffect, useState } from 'react'
import { LineWave } from 'react-loader-spinner'
import {  Dropdown, Space, Row, Col } from 'antd'
import { FaUser, FaCaretDown, FaCopyright } from 'react-icons/fa'


function SignIn() {
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    }, 2000)
  },[setLoading]);

  const items = [
    {
      label : "Sign Up",
      key : 0,
    },
    {
      type : "divider"
    },
    {
      label : "Sign In",
      key : 1,
    }
  ];
  
  return (
    <div>
      <div>
        {loading ? 
        <div className='loader'>
          <LineWave
            height="300"
            width="300"
            radius="16"
            color="#091C7A"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
        </div>

        :
        <div className='content'>
          <div className="top">
            <div className='logo'>
              <img src="/logo.png" alt="logo" />
              <h5>EDUPRO</h5>
            </div>
            <div className='icon'>
              <Dropdown
                menu={{items}}
                trigger={['click']}
              >
                <div>
                  <Space>
                    <FaUser className='userIcon1' />
                    <FaCaretDown className='downIcon' />
                  </Space>
                </div>
              </Dropdown>
            </div>
          </div>
          <div className='mid'>
            <Row>
              <Col xs={24} sm={24} md={7} lg={7} style={{background : "red"}}>
                
              </Col>
              <Col xs={24} sm={24} md={5} lg={8} style={{background : "green"}}>
                dhjajhbdas
              </Col>
              <Col xs={24} sm={24} md={12} lg={9} style={{background : "yellow"}}>
                dhjajhbdas
              </Col>
            </Row>
          </div>
          <div className="bottom">
            <p><FaCopyright /> 2023 Copyright: <span style={{fontWeight: 'bold'}}>www.edupro.org</span></p>
          </div>
        </div>

      }
      </div>
    </div>
  )
}

export default SignIn;
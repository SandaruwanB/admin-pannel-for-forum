import React, { useEffect, useState } from 'react'
import { LineWave } from 'react-loader-spinner'
import {  Dropdown, Space } from 'antd'
import { FaUser, FaCaretDown } from 'react-icons/fa'
import { Row, Col } from 'react-bootstrap'


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
          <div className='bottom'>
            <Row>
              <Col>dhjajhbdas</Col>
              <Col>dhjajhbdas</Col>
              <Col>dhjajhbdas</Col>
            </Row>
          </div>
        </div>

      }
      </div>
    </div>
  )
}

export default SignIn;
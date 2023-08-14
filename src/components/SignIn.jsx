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
              <Col xs={24} sm={24} md={9} lg={9} className='midCont'>
                <img src="/images/bg1.png" alt="bg img" className='bgimgHome'/>
              </Col>
              <Col xs={24} sm={24} md={6} lg={6}  className='midCont2'>
                <h2>asdnjajsnd</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit ducimus facere aliquid dolor eaque. Rerum non ad error accusantium recusandae ullam, aperiam pariatur, perferendis saepe debitis, fuga laboriosam corrupti tenetur?<br /><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto perspiciatis nostrum nobis ex incidunt cupiditate voluptas reprehenderit consequuntur consectetur vitae in neque ratione temporibus rerum, veritatis aperiam itaque beatae a.</p>
              </Col>
              <Col xs={24} sm={24} md={9} lg={9} style={{background : "green"}} className='midCont'>
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
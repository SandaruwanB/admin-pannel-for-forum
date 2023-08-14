import React, { useEffect, useState } from 'react'
import { LineWave } from 'react-loader-spinner'
import {  Dropdown, Space, Row, Col, Divider, Modal } from 'antd'
import { FaUser, FaCaretDown, FaCopyright, FaUserCog, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa'


const showModal = ()=>{
  Modal.info({
    title : "Oopzz Something have to tell",
    content : (
      <p>This option is not available yet in our web.Please use android app instead.</p>
    )
  })
}

function SignIn() {
  const [loading, setLoading] = useState(true);
  const [isPassword, setIsPassword] = useState(true);
  const [userName, setUserName] = useState("");
  const [password, setPAssword] = useState("");

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    }, 2000)
  },[setLoading]);

  const submitLogin = ()=>{
    alert(userName + password);
  }

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
              <Col xs={0} sm={0} md={1} lg={1}/>
              <Col xs={24} sm={24} md={9} lg={9} className='midCont'>
                <img src="/images/bg1.png" alt="bg img" className='bgimgHome'/>
              </Col>
              <Col xs={24} sm={24} md={5} lg={5}  className='midCont2'>
                <h2>WELCOME BACK TO EDUPRO</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit ducimus facere aliquid dolor eaque. Rerum non ad error accusantium recusandae ullam, aperiam pariatur, perferendis saepe debitis, fuga laboriosam corrupti tenetur?<br /><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto perspiciatis nostrum nobis ex incidunt cupiditate voluptas reprehenderit consequuntur consectetur vitae in neque ratione temporibus rerum, veritatis aperiam itaque beatae a. <br /><br />Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem libero illo quia necessitatibus vitae tempora debitis tempore provident distinctio ea blanditiis earum deleniti accusamus nostrum dolorem veritatis nemo, ab quaerat!</p>
                </Col>
              <Col xs={24} sm={24} md={8} lg={8} className='midCont'>
                <div className='formcontent'>
                  <h1>Sign In</h1>
                  <div className="form">
                    <div className="username">
                      <label htmlFor="username">User Name</label>
                      <input type="text" id='username' placeholder='User Name' value={userName} onChange={(e)=>setUserName(e.target.value)}/>
                      <FaUserCog className='leftIcon'/>
                    </div>
                    <div className="password">
                      <label htmlFor="password">Password</label>
                      <input type={isPassword ? "password" : "text"} name="password" id="password" placeholder='Password' value={password} onChange={(e)=>setPAssword(e.target.value)}/>
                      <FaLock className='leftIcon' style={{fontSize: '1rem'}}/>
                      {isPassword ? 
                      <FaEye className='eyeIcon' onClick={()=>setIsPassword(false)}/>
                      :
                      <FaEyeSlash className='eyeIcon' onClick={()=>setIsPassword(true)}/>
                      }
                    </div>
                    <div style={{width : '78%', marginLeft : '12%', marginTop: '20px',textAlign : 'right',}}>
                      <a href="/forgot" style={{display : 'inline-block', }}>Forgot Password?</a>
                    </div>
                    <div className='buttonlogin'>
                      <button onClick={()=>submitLogin()}>Sign In</button>
                    </div>
                    <div style={{width : '80%', marginLeft : '10%', marginTop : 50}}>
                      <Divider plain>Or</Divider>
                      <p style={{textAlign : 'center', cursor : 'pointer', color : '#1677ff'}} onClick={()=>showModal()}>Create New Account</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={0} sm={0} md={1} lg={1}/>
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
import React, { useEffect, useState } from 'react'
import { LineWave } from 'react-loader-spinner'
import {  Dropdown, Space } from 'antd'
import { FaUser, FaCaretDown } from 'react-icons/fa'


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
                <p>
                  <Space>
                    <FaUser className='userIcon1' />
                    <FaCaretDown className='downIcon' />
                  </Space>
                </p>
              </Dropdown>
            </div>
          </div>
          <div className='bottom'>
            ashdkhakshd
          </div>
        </div>

      }
      </div>
    </div>
  )
}

export default SignIn;
import React, { useEffect, useState } from 'react'
import { LineWave } from 'react-loader-spinner'
import { Button } from 'antd'



function SignIn() {
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    }, 2000)
  },[setLoading]);

  
  return (
    <div>
      <div>
        {loading ? 
        <div className='loader'>
          <LineWave
            height="150"
            width="150"
            radius="16"
            color="#091C7A"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
        </div>

        :
        <div>
        <div className='test'>test text</div>
        <Button type='primary' className='button'>button</Button>
        </div>

      }
      </div>
    </div>
  )
}

export default SignIn;
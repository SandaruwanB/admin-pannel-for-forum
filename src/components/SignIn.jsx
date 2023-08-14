import React from 'react'
import { LineWave } from 'react-loader-spinner'

function SignIn() {
  return (
    <div>
      <div>
        <LineWave
          height="150"
          width="150"
          radius="16"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
        <div className='test'>test text</div>
      </div>
    </div>
  )
}

export default SignIn;
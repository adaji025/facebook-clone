import Image from 'next/image'
import React from 'react'
import { signIn } from 'next-auth/react'

const Login = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
        <Image
          src="https://links.papareact.com/5me"
          width={100}
          height={100}
          x
          layout="fixed"
        />
        <h1 className='bg-blue-500 p-4 rounded-full text-white text-center cursor-pointer table my-10'
        onClick={signIn}>Login with facebook</h1>

    </div>
  )
}

export default Login
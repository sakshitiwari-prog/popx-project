import React from 'react'
import Button from './Button';
import '../style/main.css';
import Layout from './Layout/Layout';
function Home() {
  return (
    <Layout>
    <div className='wrapper'>
    <div className='content-wrapper' >
        <h3 className='content-title'>Welcome to PopX</h3>
        <p className='content-desc'>Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit,</p>
        <Button label='Create Account' bgcolor='#766CFA' color='#FFFFFF' to='/Signup'/>
        <Button label='Already Registered? Login' bgcolor='#CEBAFB'color='#000000'to='/Signin'/>
      </div>
      </div>
      </Layout>
  )
}

export default Home
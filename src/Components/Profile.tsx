import React from 'react'
import vector from '../Images/Vector.png'
import girl from '../Images/girl.jpeg'
import '../style/profile.css'
import Layout from './Layout/Layout';
function Profile() {
  return (
    <Layout>
    <div className='profile-container'>
        <div className='profile-detail'>
            <div className='profile'>
            <div className='profile-pic-container'>
                <img className='profile-pic' src={girl} alt="" />
            </div>
            <div className='camera-icon-box'>
                <img src={vector} alt="" />
            </div>
            </div>
            
            <div className='profile-info'>
                <h3>Marry Doe</h3>
                <p>Marry@Gmail.com</p>
            
            </div>
        </div>
        <p className='profile-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing Elitr, Sed diam Nonumy Eirmod Tempor invidunt Ut Labore Et Dolore Magna Aliquyam Erat,Sed Diam</p>
    </div>
    </Layout>
  )
}

export default Profile
import React from 'react'
import Button from './Button';
import '../style/signup.css'
import Layout from './Layout/Layout';
import { TextField } from '@mui/material';
function Signin() {
  return (
    <Layout>
    <div className='signin-container'>
        <div className='signin-form-box'>

        <h3 className='signin-title'>Signin to your <br/>PopX account</h3>
        <p className='signin-desc'>Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit,</p>
        <form action="#">
        <TextField 
            sx={{
                '.css-1pysi21-MuiFormLabel-root-MuiInputLabel-root':{
                    color:'#766CFA',
                    fontSize: '.9rem;'
                },
                
            }}
            placeholder="Enter email address"
            id="outlined-basic" label="Phone number" variant="outlined" size='small'margin="dense"    fullWidth/>
           
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          placeholder='Enter password'
          fullWidth
          size='small'
          margin="dense"
        //   required
        />
        
        </form></div>
        <Button label='Login' bgcolor='#CBCBCB' color='#FFFFFF' to='/Profile'/>
    </div>
    </Layout>
  )
}

export default Signin
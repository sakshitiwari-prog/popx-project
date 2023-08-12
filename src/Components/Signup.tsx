import React from 'react'
import Button from './Button';
import '../style/signup.css'
import { FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';

import Layout from './Layout/Layout';

function Signup() {
  return (
    <Layout>
    <div className='signup-wrapper'>
        <form className='signup-form' noValidate action="/Profile">
        <div className='signup-form-fields'>
            <h3 className='signup-title'>Create your<br/>PopX account</h3>
            <TextField 
            sx={{
                '.css-1pysi21-MuiFormLabel-root-MuiInputLabel-root':{
                    color:'#766CFA',
                    fontSize: '.9rem;'
                },
                '.css-wgai2y-MuiFormLabel-asterisk ':{
                    color:'red'
                },
                '.css-80cavd-MuiFormControl-root-MuiTextField-root ':{
                    marginTop: '12px',
                    marginBottom:'0px'
                }
                // '.css-770uh1-MuiFormControl-root-MuiTextField-root':{
                //     marginTop: '2rem',
                //     marginBottom: '1rem'
                // }
            }}
            id="outlined-basic" label="Full Name" variant="outlined" size='small'margin="dense"  required fullWidth
            />
            <TextField 
            sx={{
                '.css-1pysi21-MuiFormLabel-root-MuiInputLabel-root':{
                    color:'#766CFA',
                    fontSize: '.9rem;'
                },
                '.css-wgai2y-MuiFormLabel-asterisk ':{
                    color:'red'
                }
            }}
            id="outlined-basic" label="Phone number" variant="outlined" size='small'margin="dense"   required fullWidth/>
           <TextField 
            sx={{
                '.css-1pysi21-MuiFormLabel-root-MuiInputLabel-root':{
                    color:'#766CFA',
                    fontSize: '.9rem;'
                },
                '.css-wgai2y-MuiFormLabel-asterisk ':{
                    color:'red'
                }
            }}
            id="outlined-basic" label="Email address" variant="outlined" size='small'margin="dense"   required fullWidth/>
           <TextField 
            sx={{
                '.css-1pysi21-MuiFormLabel-root-MuiInputLabel-root':{
                    color:'#766CFA',
                    fontSize: '.9rem;'
                },
                '.css-wgai2y-MuiFormLabel-asterisk ':{
                    color:'red'
                }
            }}
            id="outlined-basic" label="Password" variant="outlined" size='small'margin="dense"   required fullWidth/>
           <TextField 
            sx={{
                '.css-1pysi21-MuiFormLabel-root-MuiInputLabel-root':{
                    color:'#766CFA',
                    fontSize: '.9rem;'
                },
                '.css-wgai2y-MuiFormLabel-asterisk ':{
                    color:'red'
                }
            }}
            id="outlined-basic" label="Company name" variant="outlined" size='small'margin="dense"   required fullWidth/>
            <div className='signup-field-wrapper'>
            <FormLabel id="demo-row-radio-buttons-group-label" sx={{
                '.css-1mu2a0e-MuiFormLabel-root ':{
                    fontSize: '.8rem',
                    color: 'black',
                    margin: '0.5rem 0 0'
                },
                '.css-wgai2y-MuiFormLabel-asterisk':{
                    color:'red'
                },
                
            }} required>Are you an Agency?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        sx={{
            '.css-vqmohf-MuiButtonBase-root-MuiRadio-root.Mui-checked':{
                color:'#766CFA'
            }
        }}
      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />
        
      </RadioGroup>
            </div>
        </div>
        <Button label='Create Account' bgcolor='#766CFA' color='#FFFFFF'to='/Profile'/>
        </form>
    </div>
    </Layout>
  )
}

export default Signup
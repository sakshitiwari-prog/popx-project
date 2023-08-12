import React, { ReactElement } from 'react'

function Layout({children}:any) {
  return (
    <div className='main'>
    <div className="container">
    {children}
    </div>
    </div>
  )
}

export default Layout
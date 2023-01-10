import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
        <div>Navbar</div>
        {children}
        <div>Footer</div>
    </div>
  )
}

export default Layout
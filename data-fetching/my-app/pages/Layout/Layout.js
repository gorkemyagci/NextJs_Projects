import { useRouter } from 'next/dist/client/router'
import React from 'react'

const Layout = ({children}) => {
    const router = useRouter();
  return (
    <>
    <ul style={{
         color: "white",
         display:"flex",
         listStyle:"none"
    }}>
        <li onClick={() => router.push('/posts')}>
            Posts
        </li>
    </ul>
    <div>
        {children}
    </div>
    </>
  )
}

export default Layout
import React, { ReactNode } from 'react'

const Header1 = ({children}: {children: ReactNode}) => {
  return (
    <h1 className="text-6xl text-center font-bold">{children}</h1>
  )
}

export default Header1
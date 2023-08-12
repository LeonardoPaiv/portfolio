import React, { ReactNode } from 'react'

const Header2 = ({children}: {children: ReactNode}) => {
  return (
    <h1 className="text-3xl">{children}</h1>
  )
}

export default Header2
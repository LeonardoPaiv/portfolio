
import React, { ReactNode } from 'react'

const Main = ({children}: {children: ReactNode}) => {
  return (
    <div className="h-full flex md:flex-row flex-col justify-around items-center ">
        {children}
    </div>
  )
}

export default Main
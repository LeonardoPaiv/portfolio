import React from 'react'

const Certificate = ({institution, name}: {institution: string, name: string}) => {
  return (
    <h2 className="my-2 text-xl text-justify"><span className="font-bold">{institution}</span> - {name}</h2>
  )
}

export default Certificate
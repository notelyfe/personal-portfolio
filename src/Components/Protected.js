import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Context from './context/Context'

const Protected = (props) => {

    const context = useContext(Context)
    const { checkToken } = context

    const { Component } = props

    const navigate = useNavigate()

    useEffect(() => {
        let login = localStorage.getItem('myToken')
        if( login != checkToken ){
            navigate('/admin')
        }
    })

  return (
    <div>
      <Component />
    </div>
  )
}

export default Protected

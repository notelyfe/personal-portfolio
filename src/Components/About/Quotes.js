import React from 'react'

const Quotes = ({ quote }) => {
  return (
    <p className='text-center text-uppercase' style={{ color: "#2C7090" }}>( {quote.quote} )</p>
  )
}

export default Quotes

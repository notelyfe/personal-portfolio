import React from 'react'

const Quotes = (quote) => {
  return (
    <p className='velvet' style={{textAlign: "center", lineHeight: '35px', marginTop: '10px'}}>( {quote.quote} )</p>
  )
}

export default Quotes

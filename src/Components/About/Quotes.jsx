import React, { useContext } from 'react'
import Context from '../../Context/Context'

const Quotes = (quote) => {

  const { quoteData } = useContext(Context)

  let data = quoteData.filter((item) => {
    return item.isActive === true
  })

  return (
    <>
      {data.map((item) => {
        return (
          <p key={item._id} className='velvet' style={{ textAlign: "center", lineHeight: '35px', marginTop: '10px', textTransform: "uppercase" }}>( {item.quote} )</p>
        )
      })}
    </>
  )
}

export default Quotes

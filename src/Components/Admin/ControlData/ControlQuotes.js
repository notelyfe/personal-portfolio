import React,{ useContext } from 'react'
import Context from '../../context/Context'
import ControlQuotesData from './ControlQuotesData';

const ControlQuotes = () => {

  const context = useContext(Context)
  const { modeStyle, quotes } = context

  return (
    <div className='container'>
      <h2 className={`text-center mb-3 text-${modeStyle.textColor}`}>Quotes Management</h2>

      <div className="container" >

        <table className='table table-bordered'>
          <thead className='text-light text-center text-uppercase' style={{ background: '#2C7090' }}>
            <tr >
              <th style={{ width: '10%' }}>S No.</th>
              <th >Quotes</th>
              <th style={{ width: '25%' }}>Action</th>
            </tr>
          </thead>

          {quotes.map((data, index) => {
            return <ControlQuotesData key={data._id}
              quote={data.quote}
              index={index}/>
          })}

        </table>
      </div>

    </div>
  )
}

export default ControlQuotes

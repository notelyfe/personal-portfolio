import React, { useContext } from 'react'
import Context from '../../context/Context'
import ControlResumeData from './ControlResumeData'

const ControlResume = () => {

  const context = useContext(Context)
  const { modeStyle, resume } = context

  return (
    <div className='container' >
      <h2 className={`text-center mb-3 text-${modeStyle.textColor}`}>Resume Management</h2>

      <div className="container">

        <table className='table table-bordered'>
          <thead className='text-light text-center text-uppercase' style={{ background: '#2C7090' }}>
            <tr >
              <th style={{ width: '10%' }}>S No.</th>
              <th >Resume Link</th>
              <th style={{ width: '15%' }}>Action</th>
            </tr>
          </thead>

          {resume.map((data, index) => {
            return <ControlResumeData key={data._id}
              link={data.download_link}
              index={index}
              id={data._id}/>
          })}

        </table>
      </div>

    </div>
  )
}

export default ControlResume

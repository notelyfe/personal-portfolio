import React, { useContext } from 'react'
import Context from '../../context/Context'
import ControlCertificateData from './ControlCertificateData'

const ControlCertificate = () => {

  const context = useContext(Context)
  const { modeStyle, certificates } = context

  return (
    <div className='container'>
      <h2 className={`text-center mb-3 text-${modeStyle.textColor}`}>Certificate Management</h2>

      <div className="container" >

        <table className='table table-bordered'>
          <thead className='text-light text-center text-uppercase' style={{ background: '#2C7090' }}>
            <tr >
              <th style={{width: '10%'}}>S No.</th>
              <th style={{width: '40%'}}>Title</th>
              <th >Issued By</th>
              <th >Action</th>
            </tr>
          </thead>

          {certificates.map((data, index) => {
            return <ControlCertificateData key={data._id}
              title={data.title}
              issued={data.issued_by} 
              index={index}/>
          })}

        </table>
      </div>

    </div>
  )
}

export default ControlCertificate

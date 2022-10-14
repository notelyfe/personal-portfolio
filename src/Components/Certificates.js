import React, { useContext } from 'react'
import Context from './context/Context'
import pro from './Assets/hotelBooking.png'

const Certificates = () => {

  const context = useContext(Context)
  const { modeStyle } = context

  return (
    <div className={`row project-container text-${modeStyle.textColor}`}>
      <h2 className='text-center'>MY <span className="velvet"><strong>Certificates</strong></span></h2>
      <div className={`card my-4 mx-2 bg-${modeStyle.bgColor}`} style={{ width: '20rem' }}>
        <img src={pro} className="card-img-top rounded my-2 " alt="pro.png" style={{height: '200px'}}/>
        <div className="card-body">
          <div className=" my-1">
            <h5 className="card-title text-center velvet">Card title</h5>
            <h6 >Issued By: </h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Certificates

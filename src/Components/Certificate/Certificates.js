import React, { useContext } from 'react'
import Context from '../context/Context'
import CertificateCard from './CertificateCard'

const Certificates = () => {

  const context = useContext(Context)
  const { modeStyle } = context

  return (
    <div className={`row project-container text-${modeStyle.textColor}`}>
      <h2 className='text-center'>MY <span className="velvet"><strong>Certificates</strong></span></h2>
      <CertificateCard />
    </div>
  )
}

export default Certificates

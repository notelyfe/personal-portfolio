import React, { useContext } from 'react'
import Context from '../context/Context'
import CertificateCard from './CertificateCard'

const Certificates = () => {

  const context = useContext(Context)
  const { modeStyle, certificates } = context

  return (
    <div className={`row project-container text-${modeStyle.textColor}`}>
      <h2 className='text-center'>MY <span className="velvet"><strong>Certificates</strong></span></h2>
      {certificates.map((data) => {
        return <CertificateCard key={data._id}
          title={data.title}
          certificateLink={data.certificate_link}
          issuedBy={data.issued_by} />
      })}
    </div>
  )
}

export default Certificates

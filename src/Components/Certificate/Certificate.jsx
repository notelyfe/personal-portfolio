import React, { useContext } from 'react'
import style from '../Style/certificate.module.css'
import Context from '../../Context/Context'
import CertificateCard from './CertificateCard'

const Certificate = () => {

  const { modeStyle, certificates } = useContext(Context)

  const data = certificates.filter((item) => {
    return item.isActive !== false
  })

  return (
    <div className={style.certificateContainer} style={{ color: `${modeStyle.textColor}` }}>
      <h1>
        MY <span className="velvet"><strong>Certificates</strong></span>
      </h1>
      <div className={style.certificateCardContainer}>
        {data.map((item) => {
          return (
            <CertificateCard
              key={item._id}
              title={item.title}
              issuedBy={item.issued_by}
              certificateImage={item.certificate_image}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Certificate

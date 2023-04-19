import React from 'react'
import style from '../Style/certificate.module.css'

const CertificateCard = ({ title, issuedBy, certificateImage }) => {
  return (
    <div className={style.certificateCard}>
      <img src={certificateImage} alt="Certificate Image" className={style.image} />
      <div className={style.cardBody}>
        <div className={style.titleContainer}>
          <h5 className={style.cardTitle}>
            {title}
          </h5>
        </div>
        <div className={style.issureContainer}>
          <h6>Issued By: </h6>
          <h6 style={{ textTransform: "uppercase" }}>{issuedBy}</h6>
        </div>
      </div>
    </div>
  )
}

export default CertificateCard

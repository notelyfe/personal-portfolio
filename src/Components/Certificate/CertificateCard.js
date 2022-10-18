import React, { useContext } from 'react'
import Context from '../context/Context'

const CertificateCard = ({ title, issuedBy, certificateImage }) => {

    const context = useContext(Context)
    const { modeStyle } = context
    
    certificateImage = btoa(
        String.fromCharCode(...new Uint8Array(certificateImage.data.data))
    );

    return (
        <div className={`card my-4 mx-2 bg-${modeStyle.bgColor}`} style={{ width: '20rem' }}>
            <img src={`data:image/png;base64,${certificateImage}`} className="card-img-top rounded my-2 " alt="certificate image" style={{ height: '200px' }} />
            <div className="card-body">
                <div className=" my-1">
                    <h5 className="card-title text-center text-capitalize velvet" style={{height: '75px'}}>{title}</h5>
                    <div className="d-flex">
                        <h6 >Issued By: </h6>
                        <h6 className='mx-2 text-uppercase'>{issuedBy}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CertificateCard

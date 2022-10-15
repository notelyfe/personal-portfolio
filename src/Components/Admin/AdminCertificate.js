import React, { useContext, useState } from 'react'
import Context from '../context/Context'

const AdminCertificate = () => {

  const context = useContext(Context)
  const { modeStyle, addCertificate } = context

  const handelSubmit = (e) => {
    e.preventDefault()
    addCertificate( certificateData.title, certificateData.issued_by, certificateData.certificate_link )
    setCertificateData({ title: '', issued_by: '', certificate_link: '' })
  }

  const handelCertificate = (e) => {
    setCertificateData({ ...certificateData, [e.target.name]: e.target.value })
  }
  const [certificateData, setCertificateData] = useState({ title: '', issued_by: '', certificate_link: '' })

  return (
    <div className="container admin-data-container rounded mt-3" style={{ marginBottom: '22vh' }}>
      <h1 className={`text-center text-${modeStyle.textColor}`}>Certificate</h1>
      <form onSubmit={handelSubmit} className={`my-2 rounded p-2 text-${modeStyle.textColor}`} style={{ width: '350px', margin: 'auto', border: '2px solid #2C7090' }}>
        <div className="mb-3">
          <label
            htmlFor="title"
            className="form-label">
            Certificate Title
          </label>
          <input
            required
            minLength={3}
            type="text"
            className={`form-control bg-${modeStyle.bgColor} text-${modeStyle.textColor}`}
            id="title"
            aria-describedby="title" 
            onChange={handelCertificate}
            value={certificateData.title}
            name='title'/>
        </div>
        <div className="mb-3">
          <label
            htmlFor="issued"
            className="form-label">
            Issued By
          </label>
          <input
            required
            minLength={3}
            type="text"
            className={`form-control bg-${modeStyle.bgColor} text-${modeStyle.textColor}`}
            id="issued" 
            onChange={handelCertificate}
            value={certificateData.issued_by}
            name='issued_by'/>
        </div>
        <div className="mb-3">
          <label
            htmlFor="certificate_link"
            className="form-label">
            Certificate Link
          </label>
          <input
            required
            minLength={5}
            type="text"
            className={`form-control bg-${modeStyle.bgColor} text-${modeStyle.textColor}`}
            id="certificate_link"
            aria-describedby="certificate_link" 
            onChange={handelCertificate}
            value={certificateData.certificate_link}
            name='certificate_link'/>
        </div>
        <button
          type="submit"
          className="btn btn-primary">
          Upload
        </button>
      </form>
    </div>
  )
}

export default AdminCertificate

import React, { useContext } from 'react'
import Context from '../context/Context'

const AdminCertificate = () => {

  const context = useContext(Context)
  const { modeStyle } = context

  return (
    <div className="container admin-data-container rounded mt-3" style={{ marginBottom: '22vh'}}>
      <h1 className={`text-center text-${modeStyle.textColor}`}>Certificate</h1>
      <form className={`my-2 rounded p-2 text-${modeStyle.textColor}`} style={{ width: '350px', margin: 'auto', border: '2px solid #2C7090' }}>
        <div className='my-3'>
          <input className={`form-control bg-${modeStyle.bgColor} text-${modeStyle.textColor}`} type="file" id='upload'/>
        </div>
        <div className="mb-3">
          <label
            htmlFor="title"
            className="form-label">
            Certificate Title
          </label>
          <input
            required
            type="text"
            className={`form-control bg-${modeStyle.bgColor} text-${modeStyle.textColor}`}
            id="title"
            aria-describedby="title" />
        </div>
        <div className="mb-3">
          <label
            htmlFor="issued"
            className="form-label">
            Issued By
          </label>
          <input
            required
            type="text"
            className={`form-control bg-${modeStyle.bgColor} text-${modeStyle.textColor}`}
            id="issued" />
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

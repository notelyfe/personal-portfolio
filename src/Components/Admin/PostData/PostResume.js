import React, { useContext, useState } from 'react'
import Context from '../../context/Context'

const AdminResume = () => {

  const context = useContext(Context)
  const { modeStyle, addResume } = context

  const handelSubmit = (e) => {
    e.preventDefault();
    addResume(resumeFile, downloadLink)
    setResumeFile('')
    setDownloadLink('')
  }

  const handelResume = (e) => {
    setResumeFile(e.target.files[0])
  }
  const [resumeFile, setResumeFile] = useState('')

  const handelResumeLink = (e) => {
    setDownloadLink(e.target.value)
  }
  const [downloadLink, setDownloadLink] = useState('')

  return (
    <div className="container admin-data-container rounded mt-3" style={{ paddingTop: '8vh', marginBottom: '28vh' }}>
      <h1 className={`text-center text-${modeStyle.textColor}`}>Resume</h1>
      <form onSubmit={handelSubmit} className={`my-2 rounded p-2 text-${modeStyle.textColor}`} style={{ width: '350px', margin: 'auto', border: '2px solid #2C7090' }}>
        <div className="mb-3">
          <label
            htmlFor="resumeFile"
            className="form-label">
            Resume
          </label>
          <input
            required
            type="file"
            className={`form-control bg-${modeStyle.bgColor} text-${modeStyle.textColor}`}
            id="resumeFile"
            aria-describedby="resumeFile"
            name='resumeFile'
            onChange={handelResume} />
        </div>
        <div className="mb-3">
          <label
            htmlFor="download_link"
            className="form-label">
            Download Link
          </label>
          <input
            required
            minLength={5}
            type="text"
            className={`form-control bg-${modeStyle.bgColor} text-${modeStyle.textColor}`}
            id="download_link"
            onChange={handelResumeLink}
            value={downloadLink}
            name='download_link' />
        </div>
        <button type='submit' className="btn btn-primary ">Upload</button>
      </form>
    </div>
  )
}

export default AdminResume

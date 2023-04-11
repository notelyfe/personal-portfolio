import React, { useContext, useState } from 'react'
import Context from '../../context/Context'

const AdminResume = () => {

  const context = useContext(Context)
  const { modeStyle, addResume } = context

  const handelSubmit = (e) => {
    e.preventDefault();
    addResume(resumeFile)
    setResumeFile('')
  }

  const handelResume = (e) => {
    setResumeFile(e.target.files[0])
  }
  const [resumeFile, setResumeFile] = useState('')

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
        <button type='submit' className="btn btn-primary ">Upload</button>
      </form>
    </div>
  )
}

export default AdminResume

import React, { useContext } from 'react'
import Context from '../context/Context'

const AdminResume = () => {

  const context = useContext(Context)
  const { modeStyle } = context

  return (
    <div className="container admin-data-container rounded mt-3" style={{ paddingTop: '8vh', marginBottom: '28vh' }}>
      <h1 className={`text-center text-${modeStyle.textColor}`}>Resume</h1>
      <div className="resume-input rounded" style={{ width: '350px', margin: 'auto', border: '2px solid #2C7090' }}>
        <input type="file" className='mt-2 mx-2 ' name="resume" id="resume" /> <br />
        <button className="btn btn-primary my-2 mx-2">Upload</button>
      </div>
    </div>
  )
}

export default AdminResume

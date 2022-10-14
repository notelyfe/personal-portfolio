import React, { useContext } from 'react'
import Context from '../context/Context'

const AdminResume = () => {

  const context = useContext(Context)
  const { modeStyle } = context

  return (
    <div className="container admin-data-container rounded mt-3" style={{ paddingTop: '8vh', marginBottom: '28vh' }}>
      <h1 className={`text-center text-${modeStyle.textColor}`}>Resume</h1>
      <div className={`resume-input rounded text-${modeStyle.textColor}`} style={{ width: '350px', margin: 'auto', border: '2px solid #2C7090' }}>
        <input
          type="file"
          className={` mx-2 mt-2 form-control bg-${modeStyle.bgColor} text-${modeStyle.textColor}`}
          name="resume"
          id="resume" 
          style={{width: '95%', margin: 'auto'}}/>
        <button className="btn btn-primary my-2 mx-2">Upload</button>
      </div>
    </div>
  )
}

export default AdminResume

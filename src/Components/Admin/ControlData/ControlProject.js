import React, { useContext } from 'react'
import Context from '../../context/Context'
import ControlProjectData from './ControlProjectData'

const ControlProject = () => {

  const context = useContext(Context)
  const { modeStyle, projects } = context

  return (
    <div className='container'>
      <h2 className={`text-center mb-3 text-${modeStyle.textColor}`}>Project Management</h2>

      <div className="container" >

        <table className='table table-bordered'>
          <thead className='text-light text-center text-uppercase' style={{ background: '#2C7090' }}>
            <tr >
              <th style={{ width: '10%' }}>S No.</th>
              <th style={{ width: '20%' }}>Title</th>
              <th>Description</th>
              <th style={{ width: '15%' }}>Action</th>
            </tr>
          </thead>

          {projects.map((data, index) => {
            return <ControlProjectData key={data._id}
              id={data._id}
              title={data.title}
              description={data.description}
              index={index} />
          })}

        </table>
      </div>

    </div>
  )
}

export default ControlProject

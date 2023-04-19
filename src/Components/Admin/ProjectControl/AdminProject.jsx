import React, { useContext, useState } from 'react'
import dataStyle from '../../Style/dataControl.module.css'
import PostProject from './PostProject'
import Context from '../../../Context/Context'
import api, { getAccessToken } from '../../../Services/api'

const AdminProject = () => {

  const { projects, setProjects } = useContext(Context)

  const [togglewrapper, setTogglewrapper] = useState(false)
  const [projectData, setProjectData] = useState({ title: '', description: '', website_link: '', project_link: '', action: '' })
  const [projectImage, setProjectImage] = useState(null)

  const editProject = (id, title, description, website_link, project_link, project_image) => {
    setProjectData({
      id: id,
      title: title,
      description: description,
      website_link: website_link,
      project_link: project_link,
      action: 'edit'
    })
    setProjectImage(project_image)
    setTogglewrapper(true)
  }

  const toggleStatus = async (id) => {
    try {
      const res = await api.patch(`/api/projects/status/${id}`, {}, {
        headers: {
          "access_token": getAccessToken()
        }
      })
      if (res?.status === 200) {
        const updatedProject = projects?.map((item) => {
          if (id === item._id) {
            return { ...item, isActive: !item.isActive }
          } else {
            return item
          }
        })
        setProjects(updatedProject)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className={dataStyle.dataWrapper}>
        <h1 className={dataStyle.header}>Projects</h1>
        <div className={dataStyle.dataContainer}>
          <div className={dataStyle.actionContainer}>
            <div className={dataStyle.dataSearchContainer}>
              <label htmlFor="search">Search: </label>
              <input type="text" placeholder='Search Project' />
            </div>
            <div className={dataStyle.dataAddContainer}>
              <button onClick={() => {
                setTogglewrapper(true)
              }}>Add Project</button>
            </div>
          </div>
          <div className={dataStyle.dataDisplayWrapper}>
            <table className={dataStyle.table}>
              <thead>
                <tr>
                  <th style={{ width: "10%" }}>S No.</th>
                  <th style={{ Width: "30%" }}>Title</th>
                  <th style={{ Width: "30%" }}>Description</th>
                  <th style={{ Width: "10%" }}>Status</th>
                  <th style={{ Width: "20%" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((item, index) => {
                  return (
                    <tr key={item._id}>
                      <td>{index + 1}</td>
                      <td>{item.title}</td>
                      <td>{item.description}</td>
                      <td>{item.isActive === true ? "Active" : "Hidden"}</td>
                      <td>
                        <button
                          onClick={() => editProject(item._id, item.title, item.description, item.website_link, item.project_link, item.project_image)}
                          className={`${dataStyle.actionBtn} ${dataStyle.editBtn}`}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => toggleStatus(item._id)}
                          className={`${dataStyle.actionBtn} ${dataStyle.displayBtn}`}
                        >
                          {item.isActive === true ? "Hide" : "Show"}
                        </button>
                        <button
                          className={`${dataStyle.actionBtn} ${dataStyle.deleteBtn}`}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  )
                })}

              </tbody>
            </table>
          </div>
        </div>
      </div>
      <PostProject
        togglewrapper={togglewrapper}
        setTogglewrapper={setTogglewrapper}
        setProjectData={setProjectData}
        projectData={projectData}
        projectImage={projectImage}
        setProjectImage={setProjectImage}
      />
    </>
  )
}

export default AdminProject
import React, { useContext, useState } from 'react'
import projectStyle from '../../Style/postProject.module.css'
import api, { getAccessToken } from '../../../Services/api'
import Context from '../../../Context/Context'

const PostProject = ({ setTogglewrapper, togglewrapper, projectData, setProjectData, setProjectImage, projectImage }) => {

  const { projects, setProjects, setLoading } = useContext(Context)
  const [previewFile, setPreviewFile] = useState(null)

  const handelProjectData = (e) => {
    setProjectData({ ...projectData, [e.target.name]: e.target.value })
  }

  const handelProjectFile = (e) => {
    setPreviewFile(URL.createObjectURL(e.target.files[0]))
    setProjectImage(e.target.files[0])
  }

  const handelProjectSubmit = async (e) => {

    e.preventDefault()

    setLoading(true)

    const formData = new FormData();

    formData.append("title", projectData.title);
    formData.append("description", projectData.description);
    formData.append("project_link", projectData.project_link);
    formData.append("website_link", projectData.website_link);
    formData.append("projectImage", projectImage);

    if (projectData.action === "edit") {

      try {

        const res = await api.put(`/api/projects/editProject/${projectData.id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'access_token': getAccessToken()
          }
        })

        setLoading(false)

        let updated_project = projects.map((item) => {
          
          if(item._id === projectData.id){
            return {...item, title: projectData.title, description: projectData.description, project_link: projectData.project_link, website_link: projectData.website_link, project_image: projectImage}
          }else{
            return item
          }

        })

        setProjects(updated_project)

        if (res?.status === 200) {
          setProjectData({ title: '', description: '', website_link: '', project_link: '' })
          setPreviewFile(null)
          setProjectImage(null)
          setTogglewrapper(false)
        }
      } catch (error) {
        setLoading(false)
        console.log("error", error)
      }

    }
    else {

      try {

        const res = await api.post('/api/projects/addproject', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'access_token': getAccessToken()
          }
        })

        setLoading(false)

        setProjects(projects.concat(res?.data))

        if (res?.status === 200) {
          setProjectData({ title: '', description: '', website_link: '', project_link: '' })
          setPreviewFile(null)
          setProjectImage(null)
        }
      } catch (error) {
        setLoading(false)
        console.log("error", error)
      }

    }
  }

  return (
    <div className={`${projectStyle.backgroundWrapper} ${togglewrapper && projectStyle.togglewrapper}`}>
      <div className={projectStyle.background}></div>
      <div className={projectStyle.container}>
        <div className={projectStyle.topContainer}>
          <button
            className={projectStyle.btnClose}
            onClick={() => {
              setTogglewrapper(false)
              setProjectData({ title: '', description: '', website_link: '', project_link: '' })
              setPreviewFile(null)
              setProjectImage(null)
            }}
          >
            &times;
          </button>
        </div>
        <div className={projectStyle.bottomContainer}>
          <form onSubmit={handelProjectSubmit} className={projectStyle.form}>
            <div className={projectStyle.leftSide}>
              <div className={`${projectStyle.formData} ${projectStyle.borderTop} ${projectStyle.borderLeft}`}>
                <label htmlFor="title">Title</label>
                <input
                  required
                  type="text"
                  name="title"
                  id="title"
                  placeholder='Title'
                  onChange={handelProjectData}
                  value={projectData.title}
                />
              </div>
              <div className={`${projectStyle.formData} ${projectStyle.borderLeft}`}>
                <label htmlFor="websiteLink">Website Link</label>
                <input
                  required
                  type="text"
                  name="website_link"
                  id="websiteLink"
                  placeholder='WebSite Link'
                  onChange={handelProjectData}
                  value={projectData.website_link}
                />
              </div>
              <div className={`${projectStyle.formData} ${projectStyle.borderLeft}`}>
                <label htmlFor="projectLink">Project Link</label>
                <input
                  required
                  type="text"
                  name="project_link"
                  id="projectLink"
                  placeholder='Project Link'
                  onChange={handelProjectData}
                  value={projectData.project_link}
                />
              </div>
              <div className={`${projectStyle.formData} ${projectStyle.borderBottom} ${projectStyle.borderLeft}`}>
                <label htmlFor="description">Description</label>
                <textarea
                  required
                  rows={6}
                  type="text"
                  name="description"
                  id="description"
                  placeholder='Description'
                  onChange={handelProjectData}
                  value={projectData.description}
                />
              </div>
            </div>
            <div className={projectStyle.rightSide}>
              <div className={`${projectStyle.formData} ${projectStyle.borderTop} ${projectStyle.borderRight}`}>
                <label htmlFor="projectImage">Project Image</label>
                <input
                  required
                  className={projectStyle.inputFile}
                  type="file"
                  accept='image/*'
                  name="projectImage"
                  id="projectImage"
                  onChange={handelProjectFile}
                />
              </div>
              <div className={`${projectStyle.formData} ${projectStyle.borderRight}`}>
                <img src={previewFile ? previewFile : projectImage} className={projectStyle.previewImg} alt="Preview Image" />
              </div>
              <div className={`${projectStyle.formData} ${projectStyle.borderBottom} ${projectStyle.borderRight}`}>
                <button type='submit' className={projectStyle.btnSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PostProject

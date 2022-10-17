import React, { useContext, useState } from 'react'
import Context from '../context/Context'

const AdminProject = () => {

    const context = useContext(Context)
    const { modeStyle, addProject } = context

    const handelSubmit = (e) => {
        e.preventDefault()
        addProject(projectData.title, projectData.project_link, projectData.description, projectData.website_link, projectFile)
        setProjectData({ title: '', description: '', project_link: '', website_link: '' })
    }

    const handelProjectFile = (e) => {
        setProjectFile(e.target.files[0])
    }
    const [projectFile, setProjectFile] = useState('')

    const handelProject = (e) => {
        setProjectData({ ...projectData, [e.target.name]: e.target.value })
    }
    const [projectData, setProjectData] = useState({ title: '', project_link: '', description: '', website_link: '' })

    return (
        <div className="container admin-data-container rounded mt-3">
            <h1 className={`text-center text-${modeStyle.textColor}`}>Project</h1>
            <form onSubmit={handelSubmit} className={`my-2 rounded p-2 text-${modeStyle.textColor}`} style={{ width: '350px', margin: 'auto', border: '2px solid #2C7090' }}>
                <div className="mb-3">
                    <label
                        htmlFor="title"
                        className="form-label">
                        Project Title
                    </label>
                    <input
                        required
                        minLength={3}
                        type="text"
                        className={`form-control bg-${modeStyle.bgColor} text-${modeStyle.textColor}`}
                        id="title"
                        aria-describedby="title"
                        onChange={handelProject}
                        value={projectData.title}
                        name='title' />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="project_link"
                        className="form-label">
                        Project Link
                    </label>
                    <input
                        required
                        minLength={5}
                        type="text"
                        className={`form-control bg-${modeStyle.bgColor} text-${modeStyle.textColor}`}
                        id="project_link"
                        onChange={handelProject}
                        value={projectData.project_link}
                        name='project_link' />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="website_link"
                        className="form-label">
                        WebSite Link
                    </label>
                    <input
                        required
                        minLength={5}
                        type="text"
                        className={`form-control bg-${modeStyle.bgColor} text-${modeStyle.textColor}`}
                        id="website_link"
                        onChange={handelProject}
                        value={projectData.website_link}
                        name='website_link' />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="description"
                        className="form-label">
                        Description
                    </label>
                    <textarea
                        required
                        minLength={5}
                        rows={5}
                        type="text"
                        className={`form-control bg-${modeStyle.bgColor} text-${modeStyle.textColor}`}
                        id="description"
                        onChange={handelProject}
                        value={projectData.description}
                        name='description' />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="projectImage"
                        className="form-label">
                        Project Image
                    </label>
                    <input
                        required
                        type="file"
                        className={`form-control bg-${modeStyle.bgColor} text-${modeStyle.textColor}`}
                        id="projectImage"
                        onChange={handelProjectFile}
                        name='projectImage'/>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary ">
                    Upload
                </button>
            </form>
        </div>
    )
}

export default AdminProject
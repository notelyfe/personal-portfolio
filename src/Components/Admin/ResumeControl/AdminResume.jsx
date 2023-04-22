import React, { useContext, useState } from 'react'
import resumeStyle from '../../Style/postResume.module.css'
import Context from '../../../Context/Context'
import PostResume from './PostResume';
import Delete from '../DeleteModal/Delete';

import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const AdminResume = () => {

  const { resume, setResume } = useContext(Context)
  const [resumeFile, setResumeFile] = useState(null)
  const [togglewrapper, setTogglewrapper] = useState(false)
  const [toggleDelete, setToggleDelete] = useState(false)
  const [deleteValues, setDeleteValue] = useState({ id: '', header: '', title: ''})
  let [editValues, setEditValues] = useState({ id: '', action: '', resume_link: '' })

  const editResume = (id, resume_file) => {
    setEditValues({
      id: id,
      action: "edit",
      resume_link: resume_file
    })
    setTogglewrapper(true)
  }

  const deleteResume = (id, header) => {
    setDeleteValue({
      id: id,
      header: header,
      title: 'Ankesh Resume'
    })
    setToggleDelete(true)
  }

  return (
    <>
      <div className={resumeStyle.dataWrapper}>
        <h1 className={resumeStyle.header}>Resume</h1>
        <div className={resumeStyle.dataContainer}>
          {resume.length === 0 && (
            <button
              onClick={() => setTogglewrapper(true)}
              className={resumeStyle.addBtn}>
              Add Resume
            </button>
          )}
          {resume.length > 0 && (
            resume.map((item) => {
              return (
                <div key={item._id} className={resumeStyle.resume}>
                  <Document file={item.resume_file} className={resumeStyle.file} >
                    <Page
                      pageNumber={1}
                      scale={0.9}
                    />
                  </Document>
                  <div className={resumeStyle.actionContainer}>
                    <button
                      onClick={() => editResume(item._id, item.resume_file)}
                      className={resumeStyle.editBtn}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteResume(item._id, "resume")}
                      className={resumeStyle.deleteBtn}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )
            })
          )}
        </div>
      </div>
      <PostResume
        setTogglewrapper={setTogglewrapper}
        togglewrapper={togglewrapper}
        setResumeFile={setResumeFile}
        resumeFile={resumeFile}
        setResume={setResume}
        resume={resume}
        setEditValues={setEditValues}
        editValues={editValues}
      />
      <Delete
        setToggleDelete={setToggleDelete}
        toggleDelete={toggleDelete}
        setDeleteValue={setDeleteValue}
        deleteValues={deleteValues}
      />
    </>
  )
}

export default AdminResume

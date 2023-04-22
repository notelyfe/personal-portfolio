import React, { useContext, useState } from 'react'
import resumeStyle from '../../Style/postResume.module.css'
import Context from '../../../Context/Context'
import api, { getAccessToken } from '../../../Services/api'

import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PostResume = ({ togglewrapper, setTogglewrapper, resumeFile, setResumeFile, resume, setResume, editValues, setEditValues }) => {

    const [filePreview, setFilePreview] = useState(null)
    const { setLoading } = useContext(Context)

    const handelResumeSubmit = async (e) => {
        e.preventDefault()

        setLoading(true)

        let formData = new FormData()
        formData.append("resumeFile", resumeFile)

        if (editValues?.action === 'edit') {

            try {

                const res = await api.put(`/api/resume/editResume/${editValues.id}`, formData, {
                    headers: {
                        'Content-Type': "multipart/form-data",
                        "access_token": getAccessToken()
                    }
                })

                setLoading(false)

                if(res.status===200){
                    setEditValues({id: '', action: '', resume_link: ''})
                    setTogglewrapper(false)
                }

            } catch (error) {
                setLoading(false)
                console.log(error)
            }

        } else {

            try {

                const res = await api.post('api/resume/addResume', formData, {
                    headers: {
                        'Content-Type': "multipart/form-data",
                        "access_token": getAccessToken()
                    }
                })

                setLoading(false)

                if (res.status === 200) {
                    setTogglewrapper(false)
                    setResume(resume.concat(res?.data))
                    setFilePreview(null)
                }

            } catch (error) {
                setLoading(false)
                console.log(error)
            }
        }

    }

    return (
        <div className={`${resumeStyle.backgroundWrapper} ${togglewrapper && resumeStyle.togglewrapper}`}>
            <div className={resumeStyle.background}></div>
            <div className={resumeStyle.container}>
                <div className={resumeStyle.topContainer}>
                    <button
                        className={resumeStyle.btnClose}
                        onClick={() => {
                            setTogglewrapper(false)
                        }}
                    >
                        &times;
                    </button>
                </div>
                <div className={resumeStyle.bottomContainer}>
                    <form onSubmit={handelResumeSubmit} className={resumeStyle.form}>
                        <div className={resumeStyle.formData}>
                            <input
                                required
                                className={resumeStyle.inputFile}
                                type="file"
                                onChange={(e) => {
                                    setFilePreview(URL.createObjectURL(e.target.files[0]))
                                    setResumeFile(e.target.files[0])
                                }}
                            />
                        </div>
                        <div className={resumeStyle.prevResume}>
                            <Document file={filePreview ? filePreview : editValues.resume_link} className={resumeStyle.prevFile} >
                                <Page
                                    pageNumber={1}
                                    scale={0.8}
                                />
                            </Document>
                        </div>
                        <div className={resumeStyle.formData}>
                            <button type='submit' className={resumeStyle.btnSubmit}>
                                Post
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PostResume

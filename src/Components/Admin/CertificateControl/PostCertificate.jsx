import React, { useContext, useState } from 'react'
import certificateStyle from '../../Style/postCertificate.module.css'
import Context from '../../../Context/Context'
import api, { getAccessToken } from '../../../Services/api'

const PostCertificate = ({ togglewrapper, setTogglewrapper, setCertificateImage, certificateImage, setCertificateData, certificateData }) => {

    const { certificates, setCertificates } = useContext(Context)
    const [previewFile, setPreviewFile] = useState(null)

    const handelCertificateData = (e) => {
        setCertificateData({ ...certificateData, [e.target.name]: e.target.value })
    }

    const handelCertificateFile = (e) => {
        setPreviewFile(URL.createObjectURL(e.target.files[0]))
        setCertificateImage(e.target.files[0])
    }

    const handelCertificateSubmit = async (e) => {
        e.preventDefault()

        let formData = new FormData()
        formData.append("title", certificateData.title)
        formData.append("issued_by", certificateData.issued_by)
        formData.append("certificateImage", certificateImage)

        if (certificateData.action === "edit") {
            try {
                const res = await api.put(`/api/certificates/editCertificate/${certificateData.id}`, formData, {
                    headers: {
                        "Content-Type": 'multipart/form-data',
                        'access_token': getAccessToken()
                    }
                })

                const updated_certificate = certificates?.map((item) => {
                    if (item._id === certificateData.id) {
                        return { ...item, title: certificateData.title, issued_by: certificateData.issued_by, certificate_image: certificateImage }
                    } else {
                        return item
                    }
                })

                setCertificates(updated_certificate)

                if (res?.status === 200) {
                    setCertificateData({ title: '', issued_by: '' })
                    setCertificateImage(null)
                    setPreviewFile(null)
                    setTogglewrapper(false)
                }

            } catch (error) {
                console.log(error)
            }
        } else {
            try {

                const res = await api.post('/api/certificates/addCertificate', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'access_token': getAccessToken()
                    }
                })

                setCertificates(certificates.concat(res?.data))

                if (res?.status === 200) {
                    setCertificateData({ title: '', issued_by: '' })
                    setCertificateImage(null)
                    setPreviewFile(null)
                }

            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <div className={`${certificateStyle.backgroundWrapper} ${togglewrapper && certificateStyle.togglewrapper}`}>
            <div className={certificateStyle.background}></div>
            <div className={certificateStyle.container}>
                <div className={certificateStyle.topContainer}>
                    <button
                        className={certificateStyle.btnClose}
                        onClick={() => {
                            setTogglewrapper(false)
                            setCertificateData({ title: '', issued_by: '' })
                            setCertificateImage(null)
                            setPreviewFile(null)
                        }}
                    >
                        &times;
                    </button>
                </div>
                <div className={certificateStyle.bottomContainer}>
                    <form onSubmit={handelCertificateSubmit} className={certificateStyle.form}>
                        <div className={certificateStyle.leftSide}>
                            <div className={`${certificateStyle.formData} ${certificateStyle.borderTop} ${certificateStyle.borderLeft}`}>
                                <label htmlFor="title">Title</label>
                                <input
                                    required
                                    type="text"
                                    name="title"
                                    id="title"
                                    placeholder='Title'
                                    onChange={handelCertificateData}
                                    value={certificateData.title}
                                />
                            </div>
                            <div className={`${certificateStyle.formData} ${certificateStyle.borderLeft}`}>
                                <label htmlFor="issedBy">Issued By</label>
                                <input
                                    required
                                    type="text"
                                    name="issued_by"
                                    id="issedBy"
                                    placeholder='Issued By'
                                    onChange={handelCertificateData}
                                    value={certificateData.issued_by}
                                />
                            </div>
                            <div className={`${certificateStyle.formData} ${certificateStyle.borderLeft} ${certificateStyle.borderBottom}`}>
                                <input
                                    required
                                    className={certificateStyle.inputFile}
                                    type="file"
                                    accept='image/*'
                                    name="title"
                                    id="certificate_image"
                                    onChange={handelCertificateFile}
                                />
                            </div>
                            <div className={`${certificateStyle.formData} ${certificateStyle.borderLeft} ${certificateStyle.borderBottom}`}>
                                <button type='submit' className={certificateStyle.btnSubmit}>
                                    Submit
                                </button>
                            </div>
                        </div>
                        <div className={certificateStyle.rightSide}>
                            <div className={`${certificateStyle.formData} ${certificateStyle.borderTop} ${certificateStyle.borderRight} ${certificateStyle.borderBottom}`}>
                                <img src={previewFile ? previewFile : certificateImage} className={certificateStyle.previewImg} alt="Certificate Preview" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PostCertificate

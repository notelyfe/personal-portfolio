import React, { useContext } from 'react'
import deleteStyle from '../../Style/delete.module.css'
import Context from '../../../Context/Context'
import api, { getAccessToken } from '../../../Services/api'

const Delete = ({ toggleDelete, setToggleDelete, setDeleteValue, deleteValues }) => {

    const { setLoading, setProjects, projects, setCertificates, certificates, setResume, resume } = useContext(Context)

    const confirmDelete = async () => {

        setToggleDelete(false)

        setLoading(true)

        if (deleteValues.header === "project") {

            try {

                const res = await api.delete(`/api/projects/deleteProject/${deleteValues.id}`, {
                    headers: {
                        "access_token": getAccessToken()
                    }
                })
                setLoading(false)

                if (res.status === 200) {
                    let delProjct = projects.filter((item) => {
                        return item._id !== deleteValues.id
                    })
                    setProjects(delProjct)
                }

            } catch (error) {
                setLoading(false)
                console.error(error)
            }

        } else if (deleteValues.header === "certificate") {

            try {

                const res = await api.delete(`/api/certificates/deleteCertificate/${deleteValues.id}`, {
                    headers: {
                        "access_token": getAccessToken()
                    }
                })

                setLoading(false)

                if (res.status === 200) {
                    let deleteCertificate = certificates.filter((item) => {
                        return item._id !== deleteValues.id
                    })
                    setCertificates(deleteCertificate)
                }

            } catch (error) {
                setLoading(false)
                console.error(error)
            }

        } else if (deleteValues.header === "resume") {

            try {

                const res = await api.delete(`/api/resume/deleteResume/${deleteValues.id}`, {
                    headers: {
                        "access_token": getAccessToken()
                    }
                })

                setLoading(false)

                if (res.status = 200) {
                    let delResume = resume.filter((item) => {
                        return item._id !== deleteValues.id
                    })

                    setResume(delResume)
                }

            } catch (error) {
                setLoading(false)
                console.error(error)
            }

        }

    }

    return (
        <div className={`${deleteStyle.backgroundWrapper} ${toggleDelete && deleteStyle.togglewrapper}`}>
            <div className={deleteStyle.background}></div>
            <div className={deleteStyle.container}>
                <div className={deleteStyle.header}>
                    <h1>{`Delete "${deleteValues.header}" Name "${deleteValues.title}"`}</h1>
                </div>
                <div className={deleteStyle.message}>
                    <p style={{ paddingBottom: '30px' }}>
                        {`Are you sure you want to DELETE "${deleteValues.header}" TITLE "${deleteValues.title}"`}
                    </p>
                    <p>
                        Note:- This Action is Non-reversible
                    </p>
                </div>
                <div className={deleteStyle.action}>
                    <button
                        onClick={() => {
                            setToggleDelete(false)
                            setDeleteValue({ id: '', header: '', title: '' })
                        }}
                        className={deleteStyle.cancle}
                    >
                        Cancle
                    </button>
                    <button
                        onClick={confirmDelete}
                        className={deleteStyle.confirm}
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Delete

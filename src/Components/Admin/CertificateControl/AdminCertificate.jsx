import React, { useContext, useState } from 'react'
import dataStyle from '../../Style/dataControl.module.css'
import PostCertificate from './PostCertificate'
import Context from '../../../Context/Context'
import api, { getAccessToken } from '../../../Services/api'

const AdminCertificate = () => {

  const { certificates, setCertificates } = useContext(Context)

  const [togglewrapper, setTogglewrapper] = useState(false)
  const [certificateData, setCertificateData] = useState({ title: '', issued_by: '', action: '' })
  const [certificateImage, setCertificateImage] = useState(null)

  const editCertificate = (id, title, issued_by, certificate_image) => {
    setCertificateData({
      id: id,
      title: title,
      issued_by: issued_by,
      action: 'edit'
    })
    setCertificateImage(certificate_image)
    setTogglewrapper(true)
  }

  const toggleStatus = async (id) => {
    try {

      const res = await api.patch(`/api/certificates/status/${id}`, {}, {
        headers: {
          "access_token": getAccessToken()
        }
      })

      if (res?.status === 200) {
        let updated_status = certificates.map((item) => {
          if (item._id === id) {
            return { ...item, isActive: !item.isActive }
          }
          else {
            return item
          }
        })
        setCertificates(updated_status)
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className={dataStyle.dataWrapper}>
        <h1 className={dataStyle.header}>Certificates</h1>
        <div className={dataStyle.dataContainer}>
          <div className={dataStyle.actionContainer}>
            <div className={dataStyle.dataSearchContainer}>
              <label htmlFor="search">Search: </label>
              <input type="text" placeholder='Search Certificate' />
            </div>
            <div className={dataStyle.dataAddContainer}>
              <button
                onClick={() => {
                  setTogglewrapper(true)
                }}
              >
                Add Certificate
              </button>
            </div>
          </div>
          <div className={dataStyle.dataDisplayWrapper}>
            <table className={dataStyle.table}>
              <thead>
                <tr>
                  <th style={{ width: "08%" }}>S No.</th>
                  <th style={{ Width: "27%" }}>Title</th>
                  <th style={{ Width: "50%" }}>Issued By</th>
                  <th style={{ Width: "10%" }}>Status</th>
                  <th style={{ Width: "50%" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {certificates.map((item, index) => {
                  return (
                    <tr key={item._id}>
                      <td>{index + 1}</td>
                      <td>{item.title}</td>
                      <td>{item.issued_by}</td>
                      <td>{item.isActive === true ? "Active" : "Hidden"}</td>
                      <td>
                        <button
                          onClick={() => editCertificate(item._id, item.title, item.issued_by, item.certificate_image)}
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
      <PostCertificate
        setTogglewrapper={setTogglewrapper}
        togglewrapper={togglewrapper}
        certificateData={certificateData}
        setCertificateData={setCertificateData}
        certificateImage={certificateImage}
        setCertificateImage={setCertificateImage}
      />
    </>
  )
}

export default AdminCertificate

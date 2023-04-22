import React, { useContext, useState } from 'react'
import dataStyle from '../../Style/dataControl.module.css'
import PostQuote from './PostQuote'
import Context from '../../../Context/Context'
import api, { getAccessToken } from '../../../Services/api'

const AdminQuote = () => {

  const { setQuoteData, quoteData, setLoading } = useContext(Context)
  const [togglewrapper, setTogglewrapper] = useState(false)

  const handelDelete = async (id) => {

    setLoading(true)

    try {

      const res = await api.delete(`/api/quotes/deleteQuote/${id}`, {
        headers: {
          "access_token": getAccessToken()
        }
      })

      setLoading(false)

      if (res.status === 200) {

        let delQuote = quoteData.filter((item) => {
          return item._id !== id
        })

        setQuoteData(delQuote)

      }
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  const toggleStatus = async (id) => {

    setLoading(true)

    try {

      const res = await api.patch(`/api/quotes/status/${id}`, {}, {
        headers: {
          "access_token": getAccessToken()
        }
      })

      setLoading(false)

      if (res.status === 200) {

        const quoteStatus = quoteData?.map((item) => {
          if (id === item._id) {
            return { ...item, isActive: !item.isActive }
          } else {
            return item
          }
        })
        setQuoteData(quoteStatus)
        
      }

    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  return (
    <>
      <div className={dataStyle.dataWrapper}>
        <h1 className={dataStyle.header}>Quotations</h1>
        <div className={dataStyle.dataContainer}>
          <div className={dataStyle.actionContainer}>
            <div className={dataStyle.dataSearchContainer}>
              <label htmlFor="search">Search: </label>
              <input type="text" placeholder='Search Quotation' />
            </div>
            <div className={dataStyle.dataAddContainer}>
              <button
                onClick={() => setTogglewrapper(true)}
              >Post Quote</button>
            </div>
          </div>
          <div className={dataStyle.dataDisplayWrapper}>
            <table className={dataStyle.table}>
              <thead>
                <tr>
                  <th >S No.</th>
                  <th >Quote</th>
                  <th >Status</th>
                  <th >Action</th>
                </tr>
              </thead>
              <tbody>
                {quoteData.map((item, index) => {
                  return (
                    <tr key={item._id}>
                      <td>{index + 1}</td>
                      <td>{item.quote}</td>
                      <td>{item.isActive === true ? "Active" : "Hidden"}</td>
                      <td>
                        <button
                          onClick={() => toggleStatus(item._id)}
                          className={`${dataStyle.actionBtn} ${dataStyle.displayBtn}`}
                        >
                          {item.isActive === true ? "Hide" : "Show"}
                        </button>
                        <button
                          onClick={() => handelDelete(item._id)}
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
      <PostQuote
        togglewrapper={togglewrapper}
        setTogglewrapper={setTogglewrapper}
      />
    </>
  )
}

export default AdminQuote

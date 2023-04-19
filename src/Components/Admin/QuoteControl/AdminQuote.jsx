import React from 'react'
import dataStyle from '../../Style/dataControl.module.css'

const AdminQuote = () => {
  return (
    <div className={dataStyle.dataWrapper}>
      <h1 className={dataStyle.header}>Quotations</h1>
      <div className={dataStyle.dataContainer}>
        <div className={dataStyle.actionContainer}>
          <div className={dataStyle.dataSearchContainer}>
            <label htmlFor="search">Search: </label>
            <input type="text" placeholder='Search Quotation' />
          </div>
          <div className={dataStyle.dataAddContainer}>
            <button>Post Quote</button>
          </div>
        </div>
        <div className={dataStyle.dataDisplayWrapper}>

        </div>
      </div>
    </div>
  )
}

export default AdminQuote

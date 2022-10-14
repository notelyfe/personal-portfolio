import React, { useContext } from 'react'
import Context from '../context/Context'

const AdminQuotes = () => {

  const context = useContext(Context)
  const { modeStyle } = context

  return (
    <div className="container admin-data-container rounded mt-3" style={{ paddingTop: '8vh' ,marginBottom: '28vh'}}>
      <h1 className={`text-center text-${modeStyle.textColor}`}>Quotes</h1>
      <form className={`my-2 rounded p-2 text-${modeStyle.textColor}`} style={{ width: '350px', margin: 'auto', border: '2px solid #2C7090' }}>
        <div className="mb-3">
          <label
            htmlFor="title"
            className="form-label">
            Quotes
          </label>
          <textarea
            required
            rows={3}
            type="text"
            className={`form-control bg-${modeStyle.bgColor} text-${modeStyle.textColor}`}
            id="title"
            aria-describedby="title"
            style={{ border: '1px solid #2C7090' }} />
        </div>
        <button
          type="submit"
          className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  )
}

export default AdminQuotes

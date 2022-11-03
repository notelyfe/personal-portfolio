import React, { useContext } from 'react';
import spinner from './Assets/spinner.gif';
import Context from './context/Context'

const Spinner = () => {

  const context = useContext(Context)
  const { loading } = context  

  return (
    <>
      {loading.state === true && <div>
        <div className='bg-dark blur-background'>
        </div>
        <div className="loading-spinner content-position">
          <img src={spinner} alt="loading spinner" className='spinner-gif' />
          <h6 className='mt-2 text-light'>{loading.msg}</h6>
        </div>
      </div>}
    </>
  )
}

export default Spinner

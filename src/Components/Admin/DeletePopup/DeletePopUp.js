import React, { useContext } from 'react'
import { TiTick } from "react-icons/ti";
import Context from '../../context/Context'

const DeletePopUp = () => {

    const context = useContext(Context)
    const { modeStyle, delConfirm, deleteConfirm, deleteResume, deleteProject, deleteCertificate, deleteQuote } = context

    const cancelDelete = () => {
        deleteConfirm(false)
    }

    const confirmDelete = () => {
        if(delConfirm.doc === 'project'){
            deleteProject(delConfirm.id)
        }
        else if(delConfirm.doc === 'certificate'){
            deleteCertificate(delConfirm.id)
        }
        else if(delConfirm.doc === 'resume'){
            deleteResume(delConfirm.id)
        }
        else if(delConfirm.doc === 'quotes'){
            deleteQuote(delConfirm.id)
        }
        deleteConfirm(false)
    }

    return (

        <>
            {delConfirm.state === true && <div>
                <div className='bg-dark blur-background' style={{ height: '100vh' }}>
                </div>
                <div className="content-position rounded d-flex justify-content-center align-items-center"
                    style={{
                        background: '#d54b58c7',
                        width: '350px',
                        height: '120px',
                        top: '30%',
                        left: '5%',
                        right: '5%'
                    }}>
                    <b className={`text-${modeStyle.textColor} p-2 my-2`}>Are You sure you want to Delete this item</b>
                    <button onClick={cancelDelete} className="btn btn-primary mx-1 my3 p-0" style={{ width: '60px', fontSize: '23px' }}>&times;</button>
                    <button onClick={confirmDelete} className="btn btn-danger mx-1 my3 p-0" style={{ width: '60px', fontSize: '23px' }}><TiTick /></button>
                </div>
            </div>}
        </>

    )
}

export default DeletePopUp

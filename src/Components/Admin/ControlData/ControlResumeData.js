import React, {useContext} from 'react'
import { FaTrash, FaEdit } from "react-icons/fa";
import Context from '../../context/Context'

const ControlResumeData = ({ link, index, id }) => {

    const context = useContext(Context)
    const { deleteConfirm, editConfirm } = context

    const handelDeleted = () => {
        deleteConfirm(true, id, 'resume')
    }

    const handelEdit = () => {
        editConfirm(true, id, 'resume')
    }

    return (
        <tbody className='text-center' style={{ background: '#05abc4' }}>
            <tr >
                <th>{index+1}</th>
                <th style={{ textAlign: 'justify' }}>{link}</th>
                <th>
                    <FaEdit onClick={handelEdit} className='mx-1 ' style={{ width: '20px', height: '20px', cursor: 'pointer' }} />
                    <FaTrash onClick={handelDeleted} className='mx-1 ' style={{ width: '20px', height: '20px', cursor: 'pointer' }} />
                </th>
            </tr>
        </tbody>
    )
}

export default ControlResumeData

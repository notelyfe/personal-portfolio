import React, {useContext} from 'react'
import { FaTrash, FaEdit } from "react-icons/fa";
import Context from '../../context/Context'

const ControlProjectData = ({ id, title, description, index }) => {

    const context = useContext(Context)
    const { deleteConfirm, editConfirm } = context

    const handelDeleted = () => {
        deleteConfirm(true, id, 'project')
    }

    const handelEdit = () => {
        editConfirm(true, id, 'project')
    }

    return (
        <tbody className='text-center' style={{ background: '#05abc4' }}>
            <tr >
                <th>{index + 1}</th>
                <th>{title}</th>
                <th style={{ textAlign: 'justify' }}>{description}</th>
                <th>
                    <FaEdit onClick={handelEdit} className='mx-1 ' style={{ width: '20px', height: '20px', cursor: 'pointer' }} />
                    <FaTrash onClick={handelDeleted} className='mx-1 ' style={{ width: '20px', height: '20px', cursor: 'pointer' }} />
                </th>
            </tr>
        </tbody>
    )
}

export default ControlProjectData

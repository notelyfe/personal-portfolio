import React, {useContext} from 'react'
import { FaTrash, FaEdit } from "react-icons/fa";
import Context from '../../context/Context'

const ControlCertificateData = ({ id, title, issued, index }) => {

  const context = useContext(Context)
  const { deleteConfirm } = context

  const handelEdit = () => {

  }

  const handelDeleted = () => {
    deleteConfirm(true, id, 'certificate')
  }

  return (
    <tbody className='text-center' style={{ background: '#05abc4' }}>
      <tr >
        <th>{index + 1}</th>
        <th>{title}</th>
        <th style={{ text: 'justify' }}>{issued}</th>
        <th>
          <FaEdit onClick={handelEdit} className='mx-1 ' style={{ width: '20px', height: '20px', cursor: 'pointer' }} />
          <FaTrash onClick={handelDeleted} className='mx-1 ' style={{ width: '20px', height: '20px', cursor: 'pointer' }} />
        </th>
      </tr>
    </tbody>
  )
}

export default ControlCertificateData
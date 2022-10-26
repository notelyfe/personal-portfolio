import React from 'react'
import { FaTrash, FaEdit } from "react-icons/fa";

const ControlQuotesData = ({ quote, index }) => {

    return (
        <tbody className='text-center' style={{ background: '#05abc4' }}>
            <tr >
                <th>{index+1}</th>
                <th style={{ textAlign: 'justify' }}>{quote}</th>
                <th>
                    <FaEdit className='mx-1 ' style={{ width: '20px', height: '20px', cursor: 'pointer' }} />
                    <FaTrash className='mx-1 ' style={{ width: '20px', height: '20px', cursor: 'pointer' }} />
                </th>
            </tr>
        </tbody>
    )
}

export default ControlQuotesData

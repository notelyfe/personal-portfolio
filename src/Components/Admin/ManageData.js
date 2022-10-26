import React, { useState } from 'react'
import PostProject from './PostData/PostProject';
import PostCertificate from './PostData/PostCertificate';
import PostResume from './PostData/PostResume';
import PostQuotes from './PostData/PostQuotes';
import ControlProject from './ControlData/ControlProject'
import ControlCertificate from './ControlData/ControlCertificate'
import ControlResume from './ControlData/ControlResume'
import ControlQuotes from './ControlData/ControlQuotes'

const ManageData = ({ manageDocs }) => {

    const viewData = () => {
        setView(true)
        setPost(false)
    }
    const [view, setView] = useState(false)

    const postData = () => {
        setPost(true)
        setView(false)
    }
    const [post, setPost] = useState(false)

    return (
        <>
            <div className='container  m-auto p-0 d-flex mb-3 justify-content-center align-items-center' style={{ flexWrap: 'wrap' }}>
                <button className=" btn btn-primary mx-1 my-1 text-capitalize" onClick={viewData} style={{ width: '142px' }}>
                    View {manageDocs}
                </button>
                <button className=" btn btn-primary mx-1 my-1 text-capitalize" onClick={postData} style={{ width: '142px' }}>
                    Post {manageDocs}
                </button>
            </div>

            <hr style={{border: '2px solid #2C7090', background: '#2C7090'}}/>

            {(post === true) && (manageDocs === 'project' ? <PostProject /> : '')}
            {(post === true) && (manageDocs === 'certificate' ? <PostCertificate /> : '')}
            {(post === true) && (manageDocs === 'resume' ? <PostResume /> : '')}
            {(post === true) && (manageDocs === 'quotes' ? <PostQuotes /> : '')}

            {(view === true) && (manageDocs === 'project' ? <ControlProject /> : '')}
            {(view === true) && (manageDocs === 'certificate' ? <ControlCertificate /> : '')}
            {(view === true) && (manageDocs === 'resume' ? <ControlResume /> : '')}
            {(view === true) && (manageDocs === 'quotes' ? <ControlQuotes /> : '')}
        </>
    )
}

export default ManageData
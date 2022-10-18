import React, { useContext } from 'react'
import { AiOutlineDownload } from "react-icons/ai";
import Context from '../context/Context';

const ResumeData = ({ resume, downloadLink }) => {

    const context = useContext(Context);
    const { modeStyle } = context

    resume = btoa(
        String.fromCharCode(...new Uint8Array(resume.data.data))
    );

    return (
        <>
            <div className="row">
                <a
                    href={downloadLink}
                    target="_blank"
                    style={{ maxWidth: '250px' }}
                    className="btn btn-primary m-auto">
                    <AiOutlineDownload />
                    &nbsp;Download
                </a>
            </div>

            <div className="row resume mx-2" style={{ paddingTop: '30px', paddingBottom: '30px' }}>
                <div className=" m-auto p-0 " style={{ boxShadow: `${modeStyle.boxshadow}`, width: 'auto' }}>
                    <img src={`data:image/png;base64,${resume}`} className="img-fluid" alt="notelyfe resume" />
                </div>
            </div>

            <div className="row">
                <a
                    href={downloadLink}
                    target="_blank"
                    style={{ maxWidth: '250px' }}
                    className="btn btn-primary m-auto">
                    <AiOutlineDownload />
                    &nbsp;Download
                </a>
            </div>
        </>
    )
}

export default ResumeData

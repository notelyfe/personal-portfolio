import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineDownload } from "react-icons/ai";
import Context from '../context/Context';

import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const ResumeData = ({ resume }) => {

    const context = useContext(Context);
    const { modeStyle } = context

    const [width, setWidth] = useState(1200)

    useEffect(() => {
        setWidth(window.innerWidth);
    }, [])

    return (
        <>
            <div className="row">
                <a
                    href={resume}
                    style={{ maxWidth: '250px' }}
                    className="btn btn-primary m-auto">
                    <AiOutlineDownload />
                    &nbsp;Download
                </a>
            </div>

            <div className="row resume " >
                <div style={{ boxShadow: `${modeStyle.boxshadow}`, width: 'auto' }}>
                    <Document file={resume} className="d-flex justify-content-center" >
                        <Page pageNumber={1}
                            scale={width > 786 ? 1.7 : 0.6}
                        />
                    </Document>
                </div>
            </div>

            <div className="row">
                <a
                    href={resume}
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

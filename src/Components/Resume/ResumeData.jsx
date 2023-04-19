import React, { useState, useEffect } from 'react'
import style from '../Style/resume.module.css'
import { AiOutlineDownload } from "react-icons/ai";

import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const ResumeData = ({ modeStyle }) => {

    const resume = "https://notelyfe-portfolio-data.s3.ap-south-1.amazonaws.com/Ankesh_resume.pdf"

    const [width, setWidth] = useState(1200)

    useEffect(() => {
        setWidth(window.innerWidth);
    }, [])

    return (
        <>
            <div className={style.row}>
                <a
                    href={resume}
                    rel="noopener noreferrer"
                    className={style.downloadBtn}
                >
                    <AiOutlineDownload />
                    &nbsp;Download
                </a>
            </div>

            <div className={style.resume}
                style={{
                    boxShadow: `${modeStyle.mode === "light" ? "0px 0px 10px 5px rgba(35, 83, 105, 0.3)" : "0px 0px 10px 5px rgba(188, 223, 243, 0.3)"}`
                }}>
                <Document file={resume} className={style.file} >
                    <Page
                        pageNumber={1}
                        // scale={width > 786 ? 1.7 : 0.6}
                        scale={width > 1024 ? 1.6 : width > 786 ? 1.2 : 0.6}
                    />
                </Document>
            </div>

            <div className={style.row}>
                <a
                    href={resume}
                    rel="noopener noreferrer"
                    className={style.downloadBtn}
                >
                    <AiOutlineDownload />
                    &nbsp;Download
                </a>
            </div>
        </>
    )
}

export default ResumeData

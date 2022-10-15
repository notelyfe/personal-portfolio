import React, { useState, useEffect, useContext } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Context from './context/Context'
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://raw.githubusercontent.com/NoteLyfe/portfolio/master/src/Assets/Resume.pdf";

const Resume = () => {

  const context = useContext(Context);
  const { modeStyle } = context

  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <div className="container fluid resume-section" style={{ marginTop: '90px', paddingBottom: '30px' }}>
      <div className="row">
        <button
          // href={pdf}
          target="_blank"
          style={{ maxWidth: '250px' }}
          className="btn btn-primary m-auto">
          <AiOutlineDownload />
          &nbsp;Download
        </button>
      </div>

      <div className="row resume" style={{ paddingTop: '30px', paddingBottom: '30px' }}>
        <div className="m-auto p-0" style={{boxShadow :`${modeStyle.boxshadow}`, width: 'auto'}}>
          <Document file={resumeLink} className="d-flex justify-content-center" >
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </div>
      </div>

      <div className="row">
        <button
          // href={pdf}
          target="_blank"
          style={{ maxWidth: '250px' }}
          className="btn btn-primary m-auto">
          <AiOutlineDownload />
          &nbsp;Download
        </button>
      </div>
    </div>
  )
}

export default Resume
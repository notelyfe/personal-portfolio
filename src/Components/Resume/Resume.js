import React, { useState, useContext } from "react";
import Context from '../context/Context';
import ResumeData from "./ResumeData";

const Resume = () => {

  const context = useContext(Context);
  const { resume } = context

  return (
    <div className="container fluid resume-section" style={{ marginTop: '90px', paddingBottom: '30px' }}>
      {resume.map((data) => {
        return <ResumeData key={data._id}
          resume={data.resume_file}
          downloadLink={data.download_link} />
      })}
    </div>
  )
}

export default Resume
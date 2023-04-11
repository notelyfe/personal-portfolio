import React, { useContext } from "react";
import Context from '../context/Context';
import ResumeData from "./ResumeData";

const Resume = () => {

  const context = useContext(Context);
  const { resume } = context

  return (
    <div className="container fluid resume-section">
      {resume.map((data) => {
        return <ResumeData key={data._id}
          resume={data.resume_file} />
      })}
    </div>
  )
}

export default Resume
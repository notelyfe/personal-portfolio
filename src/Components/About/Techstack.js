import React from 'react'
import {
    DiJavascript1,
    DiReact,
    // DiNodejs,
    // DiMongodb,
    DiPython,
    DiGit,
    DiGithubBadge,
} from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";

const Techstack = () => {
    return (
        <div className='row justify-content-center m-auto' style={{ paddingBottom: '35px' }}>
            <h1 className="text-center mt-5">
                Professional <strong className="velvet">Skillset </strong>
            </h1>
            <div className="col-4 col-sm-2 tech-icons">
                <DiJavascript1 />
            </div>
            <div className="col-4 col-sm-2 tech-icons">
                <DiReact />
            </div>
            <div className="col-4 col-sm-2 tech-icons">
                <DiPython />
            </div>
            <div className="col-4 col-sm-2 tech-icons">
                <DiGit />
            </div>
            <div className="col-4 col-sm-2 tech-icons">
                <DiGithubBadge />
            </div>
            <div className="col-4 col-sm-2 tech-icons">
                <FaBootstrap />
            </div>
        </div>
    )
}

export default Techstack

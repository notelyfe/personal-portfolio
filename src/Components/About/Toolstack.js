import React from 'react'
import {
    SiLinux,
    SiVisualstudiocode,
    SiHeroku,
    SiCloudflare,
} from "react-icons/si";

const Toolstack = () => {
    return (
        <div className='row justify-content-center m-auto' style={{ paddingBottom: '35px' }}>
            <h1 className="text-center mt-3">
                <strong className="velvet">Tools</strong> I use
            </h1>
            <div className="col-4 col-sm-2 tech-icons">
                <SiLinux />
            </div>
            <div className="col-4 col-sm-2 tech-icons">
                <SiVisualstudiocode />
            </div>
            <div className="col-4 col-sm-2 tech-icons">
                <SiHeroku />
            </div>
            <div className="col-4 col-sm-2 tech-icons">
                <SiCloudflare />
            </div>
        </div>
    )
}

export default Toolstack

import React from 'react'
import { TbExternalLink } from "react-icons/tb";
import style from '../Style/project.module.css'

const ProjectCard = ({ title, description, image, websiteLink, projectLink }) => {

    return (
        <div className={style.projectCard}>
            <img src={image} className={style.image} alt="Project Image" />
            <div className={style.cardBody}>
                <div className={style.content}>
                    <h5 className={style.cardTitle}>
                        {title}
                    </h5>
                    <p className={style.description}>
                        {description}
                    </p>
                </div>
                <div className={style.projectLinkContainer}>
                    <a href={projectLink} className={style.link} target="_blank" rel="noopener noreferrer">
                        <TbExternalLink />
                        Project Link
                    </a>
                    <a href={ websiteLink } className={style.link} target="_blank" rel="noopener noreferrer">
                        <TbExternalLink />
                        WebSite Link
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard

import React, { useState, useEffect } from 'react'
import Context from './Context'
import api from '../Services/api'

const State = (props) => {

    const [userData, setUserData] = useState(null)
    const [projects, setProjects] = useState([])
    const [certificates, setCertificates] = useState([])
    const [resume, setResume] = useState([])

    // <--fetch project-->

    const fetchProject = async () => {

        const res = await api.post('/api/projects/getprojects')

        setProjects(res?.data)
    }

    // <--fetch certificate-->

    const fetchCertificate = async () => {
        const res = await api.post('/api/certificates/fetchCertificate')

        setCertificates(res?.data)
    }

    // <--fetch resume-->

    const fetchResume = async () => {
        const res = await api.post("/api/resume/fetchResume")

        setResume(res?.data)
    }

    useEffect(() => {
        fetchProject()
        fetchCertificate()
        fetchResume()
    }, [])

    const handelDarkMode = (prop) => {
        console.log(prop)
        if (prop === true) {
            setModeStyle({
                bgColor: "rgb(60 60 60)",
                textColor: '#f1f1f1',
                boxShadow: '0px 5px 4px 0px rgba(162, 208, 230, 0.137)',
                mode: "dark"
            })
            document.body.style.backgroundColor = 'rgb(60 60 60)'
        }
        else {
            setModeStyle({
                bgColor: '#f8f9fa',
                textColor: 'rgb(60 60 60)',
                boxShadow: '0px 5px 4px 0px rgba(35, 83, 105, 0.137)',
                mode: 'light'
            })
            document.body.style.backgroundColor = 'white'
        }
    }
    const [modeStyle, setModeStyle] = useState({ bgColor: '#f8f9fa', textColor: "#000", boxShadow: "0px 5px 4px 0px rgba(35, 83, 105, 0.137)", mode: "light" })

    return (
        <Context.Provider value={{ handelDarkMode, modeStyle, setUserData, userData, setProjects, projects, setCertificates, certificates, setResume, resume }} >
            {props.children}
        </Context.Provider>
    )
}

export default State;
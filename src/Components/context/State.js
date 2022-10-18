import { useEffect, useState } from 'react'
import Context from './Context'
import axios from 'axios'

const State = (props) => {

    const projectInitial = []
    const certificateInitial = []
    const resumeInitial = []
    const quotesInitial = []
    const [projects, setProjects] = useState(projectInitial)
    const [certificates, setCertificates] = useState(certificateInitial)
    const [resume, setResume] = useState(resumeInitial)
    const [quotes, setQuotes] = useState(quotesInitial)

    const host = process.env.REACT_APP_HOST;

    const configAdd = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'auth-token': localStorage.getItem('myToken')
        }
    }

    //adding projects
    const addProject = async (title, project_link, description, website_link, projectFile) => {

        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("project_link", project_link);
        formData.append("website_link", website_link);
        formData.append("projectImage", projectFile);

        const response = await axios.post(`${host}/api/projects/addproject`, formData, configAdd)
    }
    //adding certificate
    const addCertificate = async (title, issued_by, certificate_image) => {

        var formData = new FormData();
        formData.append("title", title);
        formData.append("issued_by", issued_by);
        formData.append("certificateImage", certificate_image);

        const response = await axios.post(`${host}/api/certificates/addCertificate`, formData, configAdd)

    }

    //adding resume
    const addResume = async (resumeFile, downloadLink) => {
        const formData = new FormData();
        formData.append('resumeFile', resumeFile);
        formData.append('download_link', downloadLink);

        const response = await axios.post(`${host}/api/resume/addResume`, formData, configAdd)
    }

    //adding Quotes
    const addQuote = async (quote, display) => {
        const response = await fetch(`${host}/api/quotes/addQuotes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('myToken')
            },
            body: JSON.stringify({ quote, display })
        });
        const quot = await response.json()
        setQuotes(quotes.concat(quot))
    }

    //config fetch
    const configFetch = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    //fetching projects
    const fetchProjects = async () => {
        const response = await axios.post(`${host}/api/projects/getprojects`,configFetch )
            
        setProjects(response.data)
    }

    //fetching certificate
    const fetchCertificates = async () => {
        const response = await axios.post(`${host}/api/certificates/fetchCertificate`,configFetch )

        setCertificates(response.data)
    }
    //fetching resume
    const fetchResume = async () => {
        const response = await axios.post(`${host}/api/resume/fetchResume`,configFetch )

        setResume(response.data)
    }
    //fetching Quotes
    const fetchQuotes = async () => {
        const response = await axios.post(`${host}/api/quotes/fetchQuotes`,configFetch )

        setQuotes(response.data)
    }

    useEffect(() => {
        fetchProjects()
        fetchCertificates()
        fetchResume()
        fetchQuotes()
    }, [])

    const checkValidation = (token) => {
        setCheckToken(token)
    }
    const [checkToken, setCheckToken] = useState('')

    const handelDarkMode = (e) => {
        e.preventDefault();
        (mode === true ? setMode(false) : setMode(true))
        if (mode === true) {
            setModeStyle({
                bgColor: 'dark',
                textColor: 'light',
                boxshadow: '0px 0px 10px rgba(245, 251, 252, 0.8)'
            })
            document.body.style.backgroundColor = '#212529'
        }
        else {
            setModeStyle({
                bgColor: 'light',
                textColor: 'dark',
                boxshadow: '0px 0px 10px rgba(20, 16, 21, 0.8)'
            })
            document.body.style.backgroundColor = 'white'
        }
    }
    const [mode, setMode] = useState(true)
    const [modeStyle, setModeStyle] = useState({ bgColor: 'light', textColor: 'dark', boxshadow: '0px 0px 10px rgba(20, 16, 21, 0.8)' })

    return (
        <Context.Provider value={{ handelDarkMode, mode, modeStyle, checkValidation, checkToken, addProject, addCertificate, addResume, addQuote, projects, certificates, resume, quotes }}>
            {props.children}
        </Context.Provider>
    )
}

export default State;
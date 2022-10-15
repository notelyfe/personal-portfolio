import { useEffect, useState } from 'react'
import Context from './Context'

const State = (props) => {

    const projectInitial = []
    const certificateInitial = []
    const resumeInitial = []
    const quotesInitial = []
    const [projects, setProjects] = useState(projectInitial)
    const [certificates, setCertificates] = useState(certificateInitial)
    const [resume, setResume] = useState(resumeInitial)
    const [quotes, setQuotes] = useState(quotesInitial)

    const host = "http://localhost:5000";

    //adding projects
    const addProject = async ( title, project_link, description, website_link, image_link ) => {
        const response = await fetch(`${host}/api/projects/addproject`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('myToken')
            },
            body: JSON.stringify({ title, project_link, description, website_link, image_link })
        });
        const project = await response.json()
        setProjects(projects.concat(project))
    }

    //adding certificate
    const addCertificate = async ( title, issued_by, certificate_link ) => {
        const response = await fetch(`${host}/api/certificates/addCertificate` ,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('myToken')
            },
            body: JSON.stringify({ title, issued_by, certificate_link })
        });
        const certificate = await response.json()
        setCertificates(certificates.concat(certificate))
    }

    //adding resume
    const addResume = async ( resume_link ) => {
        const response = await fetch(`${host}/api/resume/addResume`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('myToken')
            },
            body: JSON.stringify({ resume_link })
        });
        const res = await response.json()
        setResume(resume.concat(res))
    }

    //adding Quotes
    const addQuote = async ( quote, display ) => {
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

    //fetching projects
    const fetchProjects = async () => {
        const response = await fetch(`${host}/api/projects/getprojects`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
        });
        const json = await response.json()

        setProjects(json)
    }

    //fetching certificate
    const fetchCertificates = async () => {
        const response = await fetch(`${host}/api/certificates/fetchCertificate`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
        });
        const json = await response.json()

        setCertificates(json)
    }
    //fetching resume
    const fetchResume = async () => {
        const response = await fetch(`${host}/api/resume/fetchResume`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
        });
        const json = await response.json()

        setResume(json)
    }
    //fetching Quotes
    const fetchQuotes = async () => {
        const response = await fetch(`${host}/api/quotes/fetchQuotes`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
        });
        const json = await response.json()

        setQuotes(json)
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
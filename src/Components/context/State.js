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
        loadSpinner("Server is loading...", true)
        const response = await axios.post(`${host}/api/projects/getprojects`, configFetch)

        loadSpinner("", false)
        setProjects(response.data)
    }

    //fetching certificate
    const fetchCertificates = async () => {
        loadSpinner("Server is loading...", true)
        const response = await axios.post(`${host}/api/certificates/fetchCertificate`, configFetch)

        loadSpinner("", false)
        setCertificates(response.data)
    }
    //fetching resume
    const fetchResume = async () => {
        loadSpinner("Server is loading...", true)
        const response = await axios.post(`${host}/api/resume/fetchResume`, configFetch)

        loadSpinner("", false)
        setResume(response.data)
    }
    //fetching Quotes
    const fetchQuotes = async () => {
        loadSpinner("Server is loading...", true)
        const response = await axios.post(`${host}/api/quotes/fetchQuotes`, configFetch)

        loadSpinner("", false)
        setQuotes(response.data)
    }

    useEffect(() => {
        fetchProjects()
        fetchCertificates()
        fetchResume()
        fetchQuotes()
        getNowPlaying()
    }, [])

    //delete config
    const deleteConfig = {
        headers: {
            "Content-Type": "multipart/form-data",
            "auth-token": localStorage.getItem('myToken')
        }
    }

    //Delete Resume
    const deleteResume = async (id) => {
        const response = await axios.delete(`${host}/api/resume/deleteResume/${id}`, deleteConfig)

        //client side delete
        const newResume = resume.filter((res) => {
            return res._id !== id
        })
        setResume(newResume)
    }

    //Delete project
    const deleteProject = async (id) => {
        const response = await axios.delete(`${host}/api/projects/deleteProject/${id}`, deleteConfig)

        //client side delete
        const newProject = projects.filter((project) => {
            return project._id !== id
        })
        setProjects(newProject)
    }

    //Delete Certificate
    const deleteCertificate = async (id) => {
        const response = await axios.delete(`${host}/api/certificates/deleteCertificate/${id}`, deleteConfig)

        //client side delete
        const newCertificate = certificates.filter((certificate) => {
            return certificate._id !== id
        })
        setCertificates(newCertificate)
    }

    //Delete Quote
    const deleteQuote = async (id) => {
        const response = await axios.delete(`${host}/api/quotes/deleteQuote/${id}`, deleteConfig)

        //client side delete
        const newQuote = quotes.filter((quote) => {
            return quote._id !== id
        })
        setQuotes(newQuote)
    }

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

    const loadSpinner = (message, state) => {
        setLoading({
            msg: message,
            state: state
        })
    }
    const [loading, setLoading] = useState('')

    const deleteConfirm = (state, id, doc) => {
        setDelConfirm({
            id: id,
            doc: doc,
            state: state
        })
    }
    const [delConfirm, setDelConfirm] = useState('')

    const editConfirm = (state, id, doc) => {
        setEditCnf({
            id: id,
            doc: doc,
            state: state
        })
    }
    const [editCnf, setEditCnf] = useState('')

    // <--Spotify-->
    const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
    const refresh_token = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN;

    const basic = btoa(`${client_id}:${client_secret}`);
    const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
    const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

    const getAccessToken = async () => {
        const response = await fetch(TOKEN_ENDPOINT, {
            method: 'POST',
            headers: {
                Authorization: `Basic ${basic}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                grant_type: 'refresh_token',
                refresh_token
            })
        });
        return response.json();
    };

    const getNowPlaying = async () => {
        const { access_token } = await getAccessToken();

        const response = await axios.get(NOW_PLAYING_ENDPOINT, {
            headers: {
                Authorization: `Bearer ${access_token}`,
                'Content-Type': 'application/json'
            }
        });
        setSong(response.data)
    }
    const [song, setSong] = useState('')

    return (
        <Context.Provider value={{ song, handelDarkMode, mode, modeStyle, checkValidation, checkToken, addProject, addCertificate, addResume, addQuote, projects, certificates, resume, quotes, loadSpinner, loading, deleteConfirm, delConfirm, deleteResume, deleteProject, deleteCertificate, deleteQuote, editConfirm, editCnf }}>
            {props.children}
        </Context.Provider>
    )
}

export default State;
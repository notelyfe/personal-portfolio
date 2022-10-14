import { useEffect, useState } from 'react'
import Context from './Context'

const State = (props) => {

    const projectInitial = []
    const [projects, setProjects] = useState(projectInitial)

    const host = "http://localhost:5000";

    //adding projects
    const addProject = async ( title, project_link, description, website_link ) => {
        const response = await fetch(`${host}/api/projects/addproject`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('myToken')
            },
            body: JSON.stringify({ title, project_link, description, website_link })
        });
        const project = await response.json()
        setProjects(projects.concat(project))
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
        
        return json
    }

    useEffect(() => {
        const getdata = async () => {
            const data = await fetchProjects()
            setProjects(data)
        }
        getdata()
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
        <Context.Provider value={{ handelDarkMode, mode, modeStyle, checkValidation, checkToken, addProject, projects }}>
            {props.children}
        </Context.Provider>
    )
}

export default State;
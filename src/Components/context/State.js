import { useState } from 'react'
import Context from './Context'

const State = (props) => {

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
        <Context.Provider value={{ handelDarkMode, mode, modeStyle }}>
            {props.children}
        </Context.Provider>
    )
}

export default State;
import React, { useContext } from 'react'
import style from '../Style/home.module.css'
import Context from '../../Context/Context'

const Home2 = () => {

    const { modeStyle } = useContext(Context)

    return (
        <div className={style.selfIntroduction} style={{ color: `${modeStyle.textColor}` }}>
            <h1 className={style.introHeader}>
                A SMALL <span className="velvet"> INTRODUCTION </span>
            </h1>
            <p className={style.homeAboutBody} >
                I fell in love with programming and I have at least learnt
                something, I think… 🤷‍♂️
                <br />
                <br />I am fluent in classics like
                <i>
                    <b className="velvet">C++, javascript and Python</b>
                </i>
                <br />
                <br />
                My filed of interest's are building new &nbsp;
                <i>
                    <b className="velvet">Web Technologies and Products </b> and
                    also in areas related to{" "}
                    <b className="velvet">
                        Software Development.
                    </b>
                </i>
                <br />
                <br />
                Whenever possible, I also apply my passion for developing products
                with <b className="velvet">Node.js</b> and
                <i>
                    <b className="velvet">
                        {" "}
                        Modern Javascript Library and Frameworks
                    </b>
                </i>
                &nbsp; like
                <i>
                    <b className="velvet"> React.js</b>
                </i>
            </p>
        </div>
    )
}

export default Home2

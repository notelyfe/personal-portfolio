import React, { useContext } from 'react'
import Context from '../context/Context'

const Home2 = () => {

    const context = useContext(Context)
    const {modeStyle} = context

    return (

        <div className={`container self-introduction mt-5 mb-3 text-${modeStyle.textColor}`}>
            <h1 className='text-center' style={{ fontSize: "2.0em" }}>
                A SMALL <span className="velvet"> INTRODUCTION </span>
            </h1>
            <p className="home-about-body">
                I fell in love with programming and I have at least learnt
                something, I think… 🤷‍♂️
                <br />
                <br />I am fluent in classics like
                <i>
                    <b className="velvet"> C++, Javascript and Python. </b>
                </i>
                <br />
                <br />
                My field of Interest's are building new &nbsp;
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

import React, { useContext } from 'react'
import Context from '../context/Context'

const Spotify = () => {

    const context = useContext(Context)
    const { modeStyle } = context

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-12 col-md-6 m-auto">
                    <h3 className={`text-${modeStyle.textColor} text-center`}>Currently <span className="velvet">Listening</span> To</h3>
                    <iframe style={{ borderRadius: "12px", marginTop: "5px" }} src="https://open.spotify.com/embed/playlist/0YOryXiKzSGyrrmOTI3nMh?utm_source=generator" width="100%" height="80" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Spotify
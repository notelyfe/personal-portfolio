import React, { useContext } from 'react'
import { BsSpotify } from "react-icons/bs";
import Context from '../context/Context'

const Spotify = () => {

    const context = useContext(Context)
    const { song, modeStyle, mode } = context

    const isPlaying = song.is_playing;

    return (
        <div className='my-5 row justify-content-center' style={{ width: '80%', margin: 'auto' }}>
            <h1 className={`text-center text-uppercase text-${modeStyle.textColor}`}>Currently <span className='velvet'>Listening</span> to</h1>
            <div className="spotify-container p-0 col-12 col-lg-7 my-3" style={{boxShadow: `${mode===true?"0px 0px 8px 3px rgba(49, 69, 70, 0.829)":"0px 0px 8px 3px rgba(175, 229, 233, 0.829)"}`}}>
                <div className="songImage">
                    {(!isPlaying) ?
                        <BsSpotify className='spotify-image' /> :
                        <img src={song.item.album.images[0].url} className="spotify-image" alt="Album Avatar" />
                    }
                </div>
                <div className="songDetails mx-1">
                    {(!isPlaying) ?
                        <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                            <h5 className='text-light'>Not Listening...</h5>
                        </div> :
                        <div>
                            <div className='d-flex justify-content-evenly align-items-center flex-wrap'>
                                <h4 className="my-1 text-light text-uppercase">{song.item.album.name},</h4>
                                <a href={song.item.artists[0].external_urls.spotify} className="song-url" target="_blank">
                                    <h5 className='my-1 text-light text-uppercase'>{song.item.artists.map((_artist) => _artist.name).join(', ')}</h5>
                                </a>
                            </div>
                            <a href={song.item.external_urls.spotify} className="song-url" target="_blank">
                                <h3 className='my-1 text-center text-light text-uppercase'>{song.item.name}</h3>
                            </a>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Spotify
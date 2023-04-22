import React, { useContext } from 'react'
import { BsSpotify } from "react-icons/bs";
import Context from '../../Context/Context';
import style from '../Style/footer.module.css'

const Spotify = () => {

    const { songs } = useContext(Context)

    const isPlaying = songs?.is_playing

    return (
        <>
            <h5>Now Playing:-</h5>
            <div className={style.spotifyWrapper}>
                {(!isPlaying) ? (
                    <BsSpotify className={style.spotifyIcon} />
                ) : (
                    <a href={songs.item.external_urls.spotify} target='_blank' >
                        <img src={songs.item.album.images[0].url} className={style.spotifyImage} alt="Album Avatar" />
                    </a>
                )}
                <p >
                    {(!isPlaying) ? "Not Listening." : (
                        <a href={songs.item.name} target='_blank' className={style.songName} >
                            {songs.item.name}
                        </a>
                    )}
                </p>
            </div>
        </>
    )
}

export default Spotify

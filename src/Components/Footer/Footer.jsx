import React, { useContext } from 'react'
import {
    AiOutlineGithub,
    AiOutlineInstagram,
    AiOutlineTwitter,
    AiOutlineLinkedin
} from "react-icons/ai";
import Context from '../../Context/Context'
import note from '../../Assets/note.png'
import style from '../Style/footer.module.css'
import DarkMode from '../DakMode/DarkMode';

const Footer = () => {

    const context = useContext(Context)
    const { modeStyle } = context

    return (
        <footer className={style.footer}
            style={{
                background: `${modeStyle.bgColor}`,
                color: `${modeStyle.textColor}`,
                boxShadow: `${modeStyle.mode === "light" ? "0px -1px 4px 5px rgba(35, 83, 105, 0.137)" : "0px -1px 4px 5px rgba(162, 208, 230, 0.137)"}`
            }}>
            <div className={style.author}>
                <img src={note} alt="note.png" className={style.developer} />
            </div>

            <div className={style.copyright}>
                <h5>Copyright&copy; 2022 NL.</h5>
            </div>

            <div className={style.socialLinkContainer}>
                <ul className={style.footerLinks}>
                    <li className={style.listItem}>
                        <a
                            className={style.socialLinks}
                            href="https://github.com/notelyfe"
                            target='_blank'
                            style={{ color: `${modeStyle.textColor}` }}
                        >
                            <AiOutlineGithub />
                        </a>
                    </li>
                    <li className={style.listItem}>
                        <a
                            className={style.socialLinks}
                            href="https://www.instagram.com/notelyfe/"
                            target='_blank'
                            style={{ color: `${modeStyle.textColor}` }}
                        >
                            <AiOutlineInstagram />
                        </a>
                    </li>
                    <li className={style.listItem}>
                        <a
                            className={style.socialLinks}
                            href="https://twitter.com/note_lyfe"
                            target='_blank'
                            style={{ color: `${modeStyle.textColor}` }}
                        >
                            <AiOutlineTwitter />
                        </a>
                    </li>
                    <li className={style.listItem}>
                        <a
                            className={style.socialLinks}
                            href="https://www.linkedin.com/in/notelyfe/"
                            target='_blank'
                            style={{ color: `${modeStyle.textColor}` }}
                        >
                            <AiOutlineLinkedin />
                        </a>
                    </li>
                </ul>
            </div>
            <DarkMode />
        </footer>
    )
}

export default Footer

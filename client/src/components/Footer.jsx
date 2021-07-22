import React from 'react'
import './styles/Footer.css'
import { FaLinkedin, FaReact } from "react-icons/fa";
import { SiMicrosoftoutlook, SiRedux, SiJavascript, SiPostgresql, SiCss3, SiHtml5, SiGithub } from "react-icons/si";
import { FcCellPhone } from "react-icons/fc";


export default function Footer() {
    return (
        <footer className="ftConteiner">
            <div className="ftInfo">
                <h4>Contact</h4>
                <p className="ftPar">Linked In <a href="https://www.linkedin.com/in/jorge-leandro-olaizola"><FaLinkedin/></a></p>
                <p className="ftPar">Outlook: jorgelolaizola@hotmail.com <a href="https://outlook.live.com/"><SiMicrosoftoutlook/></a></p>
                <p className="ftPar">GitHub: JorgeOlaizola <a href="https://github.com/JorgeOlaizola"><SiGithub/></a></p>
                <p className="ftPar">CellPhone: (+54) 11-6734-0113 <FcCellPhone/></p>
            </div>
            <div className="ftStack">
                <h4>Technology stack:</h4>
                <p><SiJavascript/><FaReact/><SiRedux/><SiPostgresql/><SiCss3/><SiHtml5/></p>

            </div>
        </footer>
    )
}

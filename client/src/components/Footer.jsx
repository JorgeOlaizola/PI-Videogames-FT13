import React from 'react'
import './styles/Footer.css'
import { FaLinkedin } from "react-icons/fa";
import { SiMicrosoftoutlook } from "react-icons/si";
import { FcCellPhone } from "react-icons/fc";


export default function Footer() {
    return (
        <footer className="ftConteiner">
            <div className="ftInfo">
                <h4>Contact</h4>
                <p className="ftPar">Linked In <a href="https://www.linkedin.com/in/jorge-leandro-olaizola-579b25157/"><FaLinkedin/></a></p>
                <p className="ftPar">Outlook: jorgelolaizola@hotmail.com <a href="https://outlook.live.com/"><SiMicrosoftoutlook/></a></p>
                <p className="ftPar">CellPhone: (+54) 11-6734-0113 <FcCellPhone/></p>
            </div>
        </footer>
    )
}

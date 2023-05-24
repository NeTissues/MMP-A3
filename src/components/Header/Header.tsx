import "./Header.css"
import React from "react";
import logo  from "../../assets/images/logo.png"

const Header = () => {
    return (
        <header className="header">
            <div className="logo" role="img" aria-label='Fatnezz logo'>
                <img src={logo} alt="Fatnezz logo" />
                <div className="links">
                    <a target="new" href="https://github.com/NeTissues/MMP-A3">GitHub</a>
                    <a target="new" href="https://docs.google.com/document/d/10phpnk8_aTeu-kZvOPCPXE8M0nzZlL-4mSVX5VIFPwo/edit">Documento de requisitos</a>
                    <a target="new" href="https://docs.google.com/presentation/d/1ruCJm5hinm5WhwFxxh_l_qbtAzAXGAehoYAukndXUQI/edit?usp=sharing">PowerPoint</a>
                </div>
            </div>
        </header>
    )
}

export default Header
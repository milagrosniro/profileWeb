// import React from 'react'
import './topbar.scss'
import {PersonOutline, MailOutline} from '@material-ui/icons'

export default function TopBar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Milagros Niro</a>
                <div className="itemContainer">
                    <PersonOutline className="icon"/>
                    <span>+549-3512787958</span>
                </div>
                <div className="itemContainer">
                    <MailOutline className="icon"/>
                    <span>niromilagros@gmail.com</span>
                </div>
                </div>
                <div className="right">
                    <div className="hamburguer" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import gitHubLogo from '../images/githublogo.png'
import gmailLogo from '../images/gmail.png'
import linkedInLogo from '../images/linkedinlogo.png'

export default function Footer() {
    return (
        <div className="fixed-bottom">
            <div className="footer-container">
                <footer className= "footer__footer">
                    <div>
                        <ul className="footer-list">
                            <li><a href="https://github.com/chemacenturion" target="_blank" rel="noreferrer"><img src={gitHubLogo} alt="github" className="avatar1"/></a></li>
                            <li><a href="mailto:centurion.philadelphia@gmail.com" target="_blank" rel="noreferrer"><img src={gmailLogo} alt="gmail" className="avatar1"/></a></li>
                            <li><a href="https://www.linkedin.com/in/jos%C3%A9-mar%C3%ADa-centuri%C3%B3n-a98300212/" target="_blank" rel="noreferrer"><img src={linkedInLogo} alt="linkedin" className="avatar2"/></a></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    )
}

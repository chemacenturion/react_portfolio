import React from 'react';
import resume from '../images/ResumeSS.png'
import resumePDF from '../../src/Resume.pdf'

const Resume = () => {
    return (
        <div className="container mt-5 container__resume">
            <div className="row container__resume-row">
                <div className="col container__resume-item-1">
                    <h4>Front-end Proficiencies</h4>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>JQuery</li>
                        <li>Responsive Design</li>
                        <li>React.js</li>
                        <li>Bootstrap</li>
                    </ul>
                    <h4>Back-end Proficiencies</h4>
                    <ul>
                        <li>APIs</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MySQL, Sequelize</li>
                        <li>MongoDB, Mongoose</li>
                        <li>REST</li>
                        <li>GraphQL</li>
                    </ul>
                </div>
                <div className="col container__resume-item-2">
                    <a href={resumePDF} className="modal__resume-link" target="_blank" rel="noreferrer"><img src={resume} className="resume" alt="resume" /></a>
                </div>
            </div>
        </div>
    )
}

export default Resume
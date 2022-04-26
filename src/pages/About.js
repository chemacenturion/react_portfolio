import React from 'react'
import me from '../images/me.jpg'

const About = () => {
    return (
        <div className="container container__about">
            <div className="row container__about-row">
                <div className="col container__about-portrait">
                    <img className="bio-photo" src={me} alt="portrait"/>
                </div>
                <div className="col container__about-paragraph">
                    <p className="bio-text">Hello World! My name is José María Centurión. I am currently employed by Business Information Systems in Johnson City, Tennessee as a Web Developer. I am an aspiring junior web developer with a particular talent and focus in front-end development. I am extremely passionate about UI/UX design and mobile responsiveness, and I can promise you that I obsess over every detail! Born in Asunción, Paraguay, I grew up in Philadelphia, Pennsylvania and attended the Philadelphia High School for Creative and Performing Arts. After obtaining a B.S. in Exercise Science from Temple University, I worked in the fields of golf instruction and sports therapy up until the pandemic made me consider a change in career paths. Being employed with BIS has allowed me to expand my knowledge of PHP and see how government sites are structured from back to front. Most of the sites I have debugged have utilized a PHP backend and a front end consisting of either vanilla JavaScript or a framework called Vue. Currently I am learning Smarty and gaining knowledge of how these government sites are structured and take in data inputs from users online. I love the industry so far and the constant learning required to stay up to date with technologies. My goal is to one day obtain a second Bachelors Degree in Computer Science and then a Masters Degree in order to meet my ultimate goal of becoming a Senior Engineer!</p>
                </div>
            </div>
        </div>
    )
}

export default About

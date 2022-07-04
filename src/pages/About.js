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
                    <p className="bio-text">
                    Hello World! My name is José María Centurión and I am a Software Developer currently living in Johnson City, TN. Prior to the pandemic I was living in Orlando working in sports therapy and preparing to play professionally on the mini/ minor league golf tours Florida has to offer. Once the pandemic hit I knew it was time for a career change and in May of 2021 I enrolled in University of Pennsylvania’s Full Stack Flex Coding Bootcamp powered by Trilogy Education focusing in particular on the MERN stack. After the BootCamp I was hired by my current employer Business Information Systems and moved to Johnson City, TN where I began as an Entry Level PHP Developer and have since been promoted to Software Developer Level 1 and currently work with PHP, Vue.js, Typescript, JavaScript, and AJAX most commonly. I have also started a part time position with Trilogy Education as both a FSF Learning Assistant and Grader for the BootCamp. It is helping me stay current and brush up on all the technologies I learned in the BootCamp. In my free time I enjoy playing the piano, stand up comedy, and golf as I hope to return to the Orlando area one day to continue my part time playing career.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About

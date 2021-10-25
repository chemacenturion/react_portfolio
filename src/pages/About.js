import React from 'react'
import me from '../images/me.jpg'

const About = () => {
    return (
        <container className="container__about">
            <div className="container__about-item-1">
                <img className="bio-photo" src={me} />
            </div>
            <div className="container__about-item-2">
                <p className="bio-text">Hello World! My name is José María Centurión. I am currently enrolled in the MERN Full Stack Bootcamp at the University of Pennsylvania, powered by Triology. I am an aspiring junior web developer with a particular talent and focus in front end development. I am extremely passionate about UI/UX design and mobile responsiveness, and I can promise you I obsess over every detail! Born in Asunción, Paraguay, I grew up in Philadelphia, Pennsylvania and attended the Philadelphia High School for Creative and Performing Arts. After obtaining a B.S. in Exercise Science from Temple University, I worked in the fields of golf instruction and sports therapy up until the pandemic made me consider a change in career path. Over the past six months I've gone from being afraid of deleting a div tag to implementing my graphic design education in beautifully finished front end products, gaining a reputation within my cohort. I hope to one day provide a company with my expertise and vision which will in turn bring their client's products that capture their customer's attention, present their customers with greater accessibility, and in turn produce more enjoyable interactions.</p>
            </div>
        </container> 
    )
}

export default About

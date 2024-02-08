import React from 'react'

function AboutMe() {
  return (
    <div>
        <section id='AboutMe' className='about--section'>
            <div className='about--section--img'>
                <img src='./img/DP1.jpg' alt='About Me'/>
            </div>
            <div className='hero--section--content--box about--section--box'>
                <div className='hero--section--content'>
                    <p className='section--title'>About</p>
                    <h1 className='skills--section--heading'>About Me</h1>
                    <p className='hero--section--description'>As a proactive Computer Engineering student,I possess expertise in Java, C++, JavaScript, ReactJS, and Spring Boot, holding a certified status as a Spring Boot Developer. In 2023, I presented a groundbreaking hardware-based attendance system utilizing blockchain at an IEEE conference.
As a proactive Computer Engineering student, I consistently rank among the top 0.4% of Leetcode contributors, showcasing my prowess in problem-solving.</p>
                    <p className='hero--section--description'>With a strong foundation in programming and frameworks, I am eager to embrace new challenges in the dynamic field of software development.
</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default AboutMe
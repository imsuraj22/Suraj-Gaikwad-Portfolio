import React from 'react'

function HeroSection() {
    return (
        <div>
            <section id='heroSection' className='hero--section'>
                <div className='hero--section--content--box'>
                    <div className='hero--section--content'>
                        <p className='section--title'> Hey I'm Suraj</p>
                        <h1 className='hero--section--title'>
                            <span className='hero--section--title--color'>Software</span>{" "}
                            <br />
                            Developer
                        </h1>
                        <p className='hero--section--description'>
                            I'm final year B-Tech student in Vishwakarma Institute of Technology Pune.
                            <br />

                            I bring a collaborative spirit, having actively engaged in team projects and extracurricular activities. 
                        </p>

                    </div>
                    <button style={{ border: 'none', padding: 0, backgroundColor: 'transparent' }}><a href='https://drive.google.com/file/d/1o7rCCkx85P0APgG5VZJ_V-aFy43uWUqY/view?usp=drive_link' target={'_blank'} rel="noreferrer" className='btn btn-primary'>
                        Download Resume
                    </a></button>


                </div>
                <div className='hero--section--img'>
                    <img src='./img/DP1.jpg' alt='Hero Section' />
                </div>
            </section>
        </div>
    )
}

export default HeroSection
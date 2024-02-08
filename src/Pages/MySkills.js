import React from 'react'
import data from "../data/index.json"
function MySkills() {
    return (
        <div>
            <section className='skills--section' id='mySkills'>
               
                <div id="skills" class="container skills-container ">
      {/* <div class="skill-fade-text"style={{ left: '60%', bottom: '-45%' }}>Skills</div> */}

      <div class="skill-container-left">
        <h2 class="skill-heading">
          <span class="caps">M</span>e and
          <br />
          MyTech Stack
        </h2>

        <div class="skill-subHeading">
          <p>
           Hello, my name is Suraj Gaikwad. I am an aspiring software developer with a passion for crafting innovative solutions.
              I am proficient in the (Java, C++, React, JS), enabling me to create robust web applications.
              Additionally, I am adept at version control using Git and GitHub, ensuring seamless collaboration. Furthermore,
              I am well-versed in the power of Java for efficient and elegant programming.
              I am constantly seeking opportunities to learn, grow, and contribute to the world of technology
          </p>
         
        </div>
      </div>
                <div class="skill-container-right">
                    <img src="./images/userAsset/blob vector.png" class="blob-style" alt="" />

                    <img src='./img/html.png' alt='HTML Logo'class="skills-logo"  />
                    <img src='./img/css.png' alt='CSS Logo'class="skills-logo" />
                    <img src='./img/cpp.png' alt='C++ Logo'class="skills-logo" />
                    <img src='./img/java.png' alt='Java Logo' class="skills-logo"/>
                    <img src='./img/spring.png' alt='Spring Boot Logo'class="skills-logo" />
                    <img src='./img/react.png' alt='React Logo' class="skills-logo"/>
                    <img src='./img/git.png' alt='Git Logo'class="skills-logo" />
                    <img src='./img/github.png' alt='GitHub Logo' class="skills-logo"/>
                    <img src='./img/boot.png' alt='GitHub Logo' class="skills-logo"/>
                    <img src='./img/js.png' alt='GitHub Logo' class="skills-logo"/>

                    <img src='./img/mysql.png' alt='GitHub Logo' class="skills-logo"/>



                </div>
                </div>
            </section>
        </div>
    )
}

export default MySkills
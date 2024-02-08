import React from 'react'
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSpinner, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

function Footer() {
  return (
    <div>
      <footer className="footer--container">
        <div className="footer--link--container">
          <div>
            <p className='my--name'>Suraj Gaikwad</p>
          </div>
          <div className="footer--items">
            <ul>
              <li className='pointer'> 
                <Link
                  activeClass="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="heroSection"
                  className="text-md"
                >
                  Home
                </Link>
              </li>
              <li className='pointer'>
                <Link
                  activeClass="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="MyPortfolio"
                  className="text-md"
                >
                  Portfolio
                </Link>
              </li>
              <li className='pointer'>
                <Link
                  activeClass="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="AboutMe"
                  className="text-md"
                >
                  About Me
                </Link>
              </li>
              <li className='pointer'>
                <Link
                  activeClass="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="Contact"
                  className="text-md"
                >
                  Contact
                </Link>
              </li>

              {/* <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="testimonial"
                className="text-md"
              >
                Testimonials
              </Link>
            </li> */}
            </ul>
          </div>
          <div className="footer--social--icon">
            <ul>

              <li>
               
                <a
                  href="https://github.com/imsuraj22"
                  className="navbar--content"
                  target="_blank"
                  rel="noreferrer"
                >
                   <i class="fa fa-brands fa-github icons" style={{ fontSize: '1.8em' }}></i>
                </a>
              </li>
              <li>
              
                <a
                  href="https://www.linkedin.com/in/suraj-gaikwad-78013221b/"
                  className="navbar--content"
                  target="_blank"
                  rel="noreferrer"
                >
                    <i class="fa fa-brands fa-linkedin icons" style={{ fontSize: '1.8em' }}></i>
                </a>
              </li>

              <li>
               
                <a
                  href="https://www.instagram.com/itssurajbtw?igsh=MTc4M3B3NXMza2l0bA=="
                  className="navbar--content"
                  target="_blank"
                  rel="noreferrer"
                >
                   <i class="fa fa-brands fa-instagram icons" style={{ fontSize: '1.8em' }}></i>
                </a>
              </li>
              <div>

              </div>

            </ul>
          </div>
        </div>
        {/* <hr className="divider" />
      <div className="footer--content--container">
        <p className="footer--content">Made with 💖 by John</p>
        <div className="footer--social--icon">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Privacy_Policy"
                className="text-sm"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Terms_of_Service"
                className="text-sm"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Cookies_Settings"
                className="text-sm"
              >
                Cookies Settings
              </Link>
            </li>
          </ul>
        </div>
      </div> */}
      </footer>
    </div>
  )
}

export default Footer
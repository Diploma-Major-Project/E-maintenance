import React , { useState } from 'react'
import { FaFacebookSquare,FaInstagramSquare,FaYoutubeSquare,FaTelegramPlane } from "react-icons/fa";
import {NavLink} from 'react-router-dom';
import './header.scss';
import { GiHamburgerMenu }  from 'react-icons/gi';


const Header = () => {
    const [showMediaIcons,setShowMediaIcons] = useState(false);
  return (
    <>
    
    <nav className="main">
        <div className="logo">
            <h2>
                <span>S</span>tay
                <span>M</span>aintained
            </h2>
        </div>

        <div className= {showMediaIcons ? "menu-items , mobile-menu-items" : "menu-items"}>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">Complaint</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </div>

        <div className="social-media-desktop">
            <ul className='social-media'>
                <li>
                    <a href="https://www.youtube.com/channel/UCDmn2z8eIajLpoUFd7U689A" target="_maintain">
                        <FaFacebookSquare/>
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/channel/UCDmn2z8eIajLpoUFd7U689A" target="_maintain">
                        <FaInstagramSquare/>
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/channel/UCDmn2z8eIajLpoUFd7U689A" target="_maintain">
                        <FaYoutubeSquare/>
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/channel/UCDmn2z8eIajLpoUFd7U689A" target="_maintain">
                        <FaTelegramPlane/>
                    </a>
                </li>
            </ul>

            <div className="hamburger">
                <a href="" onClick={() => setShowMediaIcons(!showMediaIcons)}> 
                <GiHamburgerMenu />
                </a>
            </div>
        </div>
    </nav>
    


    <section className="hero-section">
        <p>
            Welcome to 
        </p>
        <h2>Tech E-maintenance</h2>

        <div className="enter">
        <button className='btn btn-dark btn-lg' id='register'>Register yourself</button>
        <button className='btn btn-dark btn-lg' id='login'>Login</button>

        </div>

       
    </section>


    </>

  )
}
export default Header;


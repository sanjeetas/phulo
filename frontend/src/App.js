import React from 'react'
import times from "./images/times.svg"
import logo from "./images/logo.png"
import man from "./images/man.png"
import man2 from "./images/man-2.png"
import website from "./images/website.svg"

import facebook from "./images/facebook.svg"
import twitter from "./images/twitter.svg"
import pintrest from "./images/pintrest.svg"
import brush from "./images/brush.svg"
 
import code from "./images/code.svg"
import bag from "./images/bag.svg"
import desktop from "./images/desktop.svg"
import media from "./images/media.svg"

import hamberger from "./images/hamberger.svg"
import phone from "./images/phone.svg"
import phone2 from "./images/ph-2.png"
import lady from "./images/lady.png"
import ph from "./images/ph-1.png"
import msg from "./images/msg.svg"

import article from "./images/article-ph-1.png"
import map from "./images/code.svg"
import MySlider from './MySlider';
import profile from './Common/profile.pdf';

import "./App.css";
const downloadFile = () => {
    // Path to the document file
    const documentPath = profile;

    // Create an invisible anchor element
    const link = document.createElement('a');
    link.href = documentPath;
    link.target = '_blank'; // Open in a new tab or window

    // Trigger the download
    link.download = 'document.pdf'; // Set the downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
const App = () => {
  return (
    <div className="App">
      <div class="site-main-wrapper">
        <button class="hamberger">
            <img src={hamberger}alt=""/>
        </button>

        <div class="mobile-nav">
            <button class="times"><img src={times} alt=""/></button>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                {/* <li><a href="#">Work</a></li> */}
                <li><a href="#">Blog</a></li>
            </ul>
        </div>
        <header>
            <div class="container">
                <nav id="main-nav" class="flex items-center justify-between">
                    <div class="left flex items-center">
                        <div class="branding">
                            <img src={logo} alt="" height="60px" width="94px"/>
                        </div>
                        <div>
                            <a href="#">Home</a>
                            <a href="#about">About</a>
                            <a href="#services">Services</a>
                            <a href="#work">Work</a>
                            <a href="#blog">Blog</a>
                        </div>
                    </div>
                    <div class="right">
                        <button class="btn btn-primary"><a href="tel:8451010020">Contact</a></button>
                    </div>
                </nav>
                <div class="hero flex items-center justify-between">
                    <div class="left flex-1 flex justify-center">
                        <img src={man} alt=""/>
                    </div>
                    <div class="right flex-1">
                        <h6>Harsh Singh</h6>
                        <h1>I’m a Creative <span>Designer</span></h1>
                        <p>Phulo Multi graphics(CEO)</p>
                        <div>
                            <button class="btn btn-secondary" onClick={downloadFile}>DOWNLOAD PROFILE</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <section id="about" class="about">
            <div class="container flex items-center about-inner-wrap">
                <div class="flex-1">
                    <img class="about-me-img" src={man} alt=""/>
                </div>
                <div class="flex-1 right">
                    <h1>About <span>Me</span></h1>
                    <h3>Hello! i’m Harsh Singh.</h3>
                    <p>Phulo Multi Graphic in Mumbai is one of the leading businesses in the Flex Printing Services. Also known for Flex Printing Services, Printing Services, Banner Printers, Digital Printers, ID Card Printing Services, Vinyl Printers, Photo Printing Services, Logo Printing Services and much more. Find Address, Contact Number, Reviews &amp; Ratings, Photos, Maps of Phulo Multi Graphic, Mumbai.</p>
                    <div class="social">
                        <a href="#"><img src={website}alt=""/></a>
                        <a href="https://www.facebook.com/codersgyan"><img src={facebook}alt=""/></a>
                        <a href="https://twitter.com/CoderGyan"> <img src={twitter}alt=""/></a>
                        <a href="#"> <img src={pintrest}alt=""/></a>
                    </div>
                </div>
            </div>
        </section>
        <section id="services" class="services">
            <div class="container">
                <h1 class="section-heading"><span>Our </span>Services</h1>
                <p>We provide high standar Creativity Designing Solutionfor your business solutions</p>
                <div class="card-wrapper">
                    <div class="card">
                        <img src={brush}alt=""/>
                        <h2>Graphic Design</h2>
                        <p>
                        </p>
                    </div>
                    <div class="card">
                        <img src={code}alt=""/>
                        <h2>Flex Printing Services</h2>
                        <p>
                        </p>
                    </div>
                    <div class="card">
                        <img src={bag}alt=""/>
                        <h2>Banner Printers</h2>
                        <p>
                        </p>
                    </div>
                    <div class="card">
                        <img src={desktop}alt=""/>
                        <h2>Vinyl Printing</h2>
                        <p>
                        </p>
                    </div>
                    <div class="card">
                        <img src={media}alt=""/>
                        <h2>Acrylic Design and MDB cutting</h2>
                        <p>
                        </p>
                    </div>
                    <div class="card">
                        <img src={phone}alt=""/>
                        <h2>All Shooting's Posters</h2>
                        <p>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="freelancer">
            <h1>I Am Available For Desiging.</h1>
            <p>We provide high standar clean Design for your business solutions</p>
            <button class="btn btn-primary" onClick={downloadFile}>Download CV</button>
        </section>
        <section class="reviews">
            <div class="container">
                <h1 class="section-heading"><span>Our</span> Client</h1>
                <p>We provide high standar clean Design for your business solutions</p>
                <MySlider/>
            </div>
        </section>

        {/* <section id="work" class="work">
            <div class="container">
                <h1 class="section-heading"><span>Our</span> Works</h1>
                <p>We provide high standar clean Desiging for your business solutions</p>

                <div class="card-wrapper">
                    <div class="card">
                        <div class="overlay">
                            <span>Category</span>
                            <a href="#">Graphics Desiging And Printing</a>
                        </div>
                        <img src={ph} alt=""/>
                    </div>
                    <div class="card">
                        <div class="overlay">
                            <span>Category</span>
                            <a href="#">Graphics Desiging And Printing</a>
                        </div>
                        <img src={ph} alt=""/>
                    </div>
                    <div class="card">
                        <div class="overlay">
                            <span>Category</span>
                            <a href="#">Graphics Desiging And Printing</a>
                        </div>
                        <img src={ph} alt=""/>
                    </div>
                    <div class="card">
                        <div class="overlay">
                            <span>Category</span>
                            <a href="#">Graphics Desiging And Printing</a>
                        </div>
                        <img src={ph} alt=""/>
                    </div>
                    <div class="card">
                        <div class="overlay">
                            <span>Category</span>
                            <a href="#">Graphics Desiging And Printing</a>
                        </div>
                        <img src={ph} alt=""/>
                    </div>
                    <div class="card">
                        <div class="overlay">
                            <span>Category</span>
                            <a href="#">Graphics Desiging And Printing</a>
                        </div>
                        <img src={ph} alt=""/>
                    </div>
                </div>
            </div>
        </section> */}
        <section id="blog" class="blog">
            <div class="container">
                <h1 class="section-heading"><span>Our</span> Blog</h1>
                <p>We provide high standar Creativity Designing Solutionfor your business solutions</p>

                <div class="card-wrapper">
                    <div class="card">
                        <div class="img-wrapper">
                            <img src={article} alt=""/>
                        </div>
                        <div class="card-content">
                            <a href="#">
                                <h1>Established in the year 2018, Phulo Multi Graphic in Goregaon East, Mumbai is a top player in the category Flex Printing Services in the Mumbai.</h1>
                            </a>
                            <span>May 12, 2018</span>
                            <p>Phulo Multi Graphic in Mumbai is one of the leading businesses in the Flex Printing Services. Also known for Flex Printing Services, Printing Services, Banner Printers, Digital Printers, ID Card Printing Services, Vinyl Printers, Photo Printing Services, Logo Printing Services and much more.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="img-wrapper">
                            <img src={article} alt=""/>
                        </div>
                        <div class="card-content">
                            <a href="#">
                                <h1>Phulo Multi Graphic in Goregaon East has a wide range of products and / or services to cater to the varied requirements of their customers. </h1>
                            </a>
                            <span>May 12, 2018</span>
                            <p>his business employs individuals that are dedicated towards their respective roles and put in a lot of effort to achieve the common vision and larger goals of the company. In the near future, this business aims to expand its line of products and services and cater to a larger client base..</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="img-wrapper">
                            <img src={article} alt=""/>
                        </div>
                        <div class="card-content">
                            <a href="#">
                                <h1>Please scroll to the bottom for the address and contact details of Phulo Multi Graphic at Goregaon East, Mumbai.</h1>
                            </a>
                            <span>May 12, 2018</span>
                            <p>It is at Film City Road, Near Nagori Milk Center, which makes it easy for first-time visitors in locating this establishment. It is known to provide top service in the following categories: Flex Printing Services, Printing Services, Banner Printers, Digital Printers, ID Card Printing Services, Vinyl Printers, Photo Printing Services, Logo Printing Services.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="contact">
            <div class="container">
                <h1 class="section-heading">Contact <span>Us</span></h1>
                <p>We provide high standard Creativity Designing Solutionfor your business solutions</p>
                <div class="card-wrapper">
                    <div class="card">
                        <img src={phone2}alt=""/>
                        <h1>Call Us On</h1>
                        <h6>8451010020</h6>
                    </div>
                    <div class="card">
                        <img src={msg}alt=""/>
                        <h1>Email Us At</h1>
                        <h6>phulomultigraphics.com</h6>
                    </div>
                    <div class="card">
                    <div className="google-map-code">
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="300" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.542316571193!2d72.87162308673493!3d19.171501435777387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b792beb400a3%3A0x3524b8de406ee0df!2sPhulo%20multi%20graphics!5e0!3m2!1sen!2sus!4v1685380145447!5m2!1sen!2sus" width="400" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
                        <h1>Visit Office</h1>
                        <h6>Phulo multi graphics
Unit 1 & 2, Ganesh Nagar, Gen, General Arun Kumar Vaidya Marg, Muncipal Colony, Sector A, Goregaon, Mumbai, Maharashtra 400065, India</h6>
                    </div>

                </div>

             
            </div>
        </section>
     
    </div>
    </div>
  );
}

export default App;

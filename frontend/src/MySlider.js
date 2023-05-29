// import $ from 'jquery';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick.js';
// import React, { useEffect } from 'react';
// import lady from "./images/lady.png"
// const MySlider = () => {
//   useEffect(() => {
//     // Code from the provided JavaScript snippet
//     $(document).ready(function() {
//       var slider = $('.slider');

//       slider.slick({
//         arrows: false,
//         dots: true,
//         appendDots: '.slider-dots',
//         dotsClass: 'dots'
//       });

//       var hamberger = document.querySelector('.hamberger');
//       var times = document.querySelector('.times');
//       var mobileNav = document.querySelector('.mobile-nav');

//       hamberger.addEventListener('click', function() {
//         mobileNav.classList.add('open');
//       });

//       times.addEventListener('click', function() {
//         mobileNav.classList.remove('open');
//       });
//     });
//   }, []); // empty dependency array to ensure useEffect runs only once

//   return (
//     <div>
//       <div class="slider">
//                     <div class="slide">
//                         <img src={lady} alt=""/>
//                         <p>"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//                             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
//                             mollit anim id est laborum"</p>
//                         <span>- John Doel, Company ABC</span>
//                     </div>
//                     <div class="slide">
//                         <img src={lady} alt=""/>
//                         <p>"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//                             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
//                             mollit anim id est laborum"</p>
//                         <span>- John Doel, Company ABC</span>
//                     </div>
//                     <div class="slide">
//                         <img src={lady} alt=""/>
//                         <p>"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//                             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
//                             mollit anim id est laborum"</p>
//                         <span>- John Doel, Company ABC</span>
//                     </div>
//                     <div class="slide">
//                         <img src={lady} alt=""/>
//                         <p>"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//                             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
//                             mollit anim id est laborum"</p>
//                         <span>- John Doel, Company ABC</span>
//                     </div>
//                 </div>
//                 <div class="slider-dots"></div>
//     </div>
//   );
// };

// export default MySlider;
// Carousel.js
import {useState} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick.js';
import React, { useEffect } from 'react';
import lady from "./images/lady.png"
// import {FaChevronLeft, FaChevronRight} from 'react-icons'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function MySlider() {
  const [sliderRef, setSliderRef] = useState(null)


  const sliderSettings = {
    dots: true,
    className: "sample",
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnFocus: true,
    pauseOnHover: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  const pricingCards = [
    {
      imageSrc:
        'https://images.unsplash.com/photo-1616940844649-535215ae4eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      title: 'Deluxe Room',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'USD 80/Day',
      features: ['Free Wifi', 'Free breakfast'],
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1599619351208-3e6c839d6828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
      title: 'King Deluxe Room',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'USD 150/Day',
      features: ['Free Wifi', 'Free breakfast', 'Discounted Meals'],
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1461092746677-7b4afb1178f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      title: 'Royal Suite',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'USD 299/Day',
      features: [
        'Free Wifi',
        'Free breakfast',
        'Discounted Meals',
        "MacBook for work use (hotel's property)",
      ],
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1616940844649-535215ae4eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      title: 'Sanjeeta',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'USD 80/Day',
      features: ['Free Wifi', 'Free breakfast'],
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1599619351208-3e6c839d6828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
      title: 'Harsh',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'USD 150/Day',
      features: ['Free Wifi', 'Free breakfast', 'Discounted Meals'],
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1461092746677-7b4afb1178f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      title: 'Sanju Royal',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'USD 299/Day',
      features: [
        'Free Wifi',
        'Free breakfast',
        'Discounted Meals',
        "MacBook for work use (hotel's property)",
      ],
    },
  ]
  

  return (
    <div className='content'>
      {/* <div className='controls'>
        <button>
          <FaChevronLeft />
        </button>
        <button>
          <FaChevronRight />
        </button>
      </div> */}
      <Slider ref={setSliderRef} {...sliderSettings}>
        {pricingCards.map((card, index) => (
          <div key={index}>
                 <div class="slider">
                    <div class="slide">
                        <img src={lady} alt=""/>
                        <span>{card?.title}</span>
                    </div>
                </div>
                <div class="slider-dots"></div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

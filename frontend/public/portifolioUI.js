import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick.js';
import React, { useEffect } from 'react';

const MySlider = () => {
  useEffect(() => {
    // Code from the provided JavaScript snippet
    $(document).ready(function() {
      var slider = $('.slider');

      slider.slick({
        arrows: false,
        dots: true,
        appendDots: '.slider-dots',
        dotsClass: 'dots'
      });

      var hamberger = document.querySelector('.hamberger');
      var times = document.querySelector('.times');
      var mobileNav = document.querySelector('.mobile-nav');

      hamberger.addEventListener('click', function() {
        mobileNav.classList.add('open');
      });

      times.addEventListener('click', function() {
        mobileNav.classList.remove('open');
      });
    });
  }, []); // empty dependency array to ensure useEffect runs only once

  return (
    <div>
      {/* Your JSX content here */}
    </div>
  );
};

export default MySlider;

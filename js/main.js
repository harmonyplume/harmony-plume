/*
    Project Name : Diamond
    Author Company : SpecThemes
    Project Date: 30 ogt, 2017
    Template Developer: vsafaryan50@gmail.com
*/


/*
==============================================
TABLE OF CONTENT
==============================================

1. Owl Carousels
2. CountUp
3. Pie Chart
4. Hover Drop Down
5. 3D project
6. Video Modal
7. Preloader
8. Scroll To Top
9. Isotop
10. WOW
11. Search
12. Swiper Slider
13. Youtube Video Background
14. 3D Boxes
15. Input Number
16. 404 Page effect
17. Contact Form


==============================================
[END] TABLE OF CONTENT
==============================================
*/

"use strict";



$(document).ready(function() {
  // Scrollax
  $.Scrollax();

/*------------------------------------
    1. Owl Carousel
--------------------------------------*/  


/*---------------------
 Methods Carousel
-----------------------*/

  $('#testmonials').owlCarousel({
    loop: false,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4500,  
    responsiveClass: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        margin: 30
      },
      600: {
        items: 1,
        margin: 15
      },
      1000: {
        items: 1,
        margin: 15
      }
    }
  })


/*---------------------
Project Detail carousel
-----------------------*/

  $('#project_detail').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 8000, 
    navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],   
    responsiveClass: true,
    autoplayHoverPause:false,
    responsive: {
      0: {
        items: 1,
        margin: 30,
      },
      600: {
        items: 1,
        margin: 30,
      },
      1000: {
        items: 1,
        margin: 30,
      }
    }
  })



/*---------------------
Clients carousel
-----------------------*/

  $('#our-clients').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,  
    responsiveClass: true,
    autoplayHoverPause:false,
    responsive: {
      0: {
        items: 2,
        margin: 50,
      },
      600: {
        items: 3,
        margin: 30,
      },
      1000: {
        items: 4,
        margin: 110,
      }
    }
  })


/*------------------------------------
    2. CountUp
--------------------------------------*/  

    $('.countup').counterUp({
        delay: 5,
        time: 200
    });


/*------------------------------------
    3. Pie Chart
--------------------------------------*/  


/*------------------------------------
    4. Hover Drop Down
--------------------------------------*/    

if ($(window).width() > 991) {
  $('ul.nav li.dropdown').hover(function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(300);
  }, function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(300);
  });
}


/*------------------------------------
    5. 3D Boxes
--------------------------------------*/ 
if($(".project").length !== 0) {
  $(".project").hover3d({
    selector: ".project__card"
  });

  $(".movie").hover3d({
    selector: ".movie__card",
    shine: true,
    sensitivity: 20,
  });
}

if($(".services-3d").length !== 0) {
  $(".services-3d").hover3d({
    selector: ".services__card"
  });
$(".movie").hover3d({
    selector: ".movie__card",
    shine: true,
    sensitivity: 20,
  });  
}



/*------------------------------------
    6. Video Modal
--------------------------------------*/ 

  $('#videomodal').on('hidden.bs.modal', function() {
    var $this = $(this).find('iframe'),
      tempSrc = $this.attr('src');
    $this.attr('src', "");
    $this.attr('src', tempSrc);
  });

  $('#videomodal').on('hidden.bs.modal', function() {
    var html5Video = document.getElementById("htmlVideo");
    if (html5Video != null) {
      html5Video.pause();
      html5Video.currentTime = 0;
    }
  });


/*------------------------------------
    7. Preloader
--------------------------------------*/ 

  $('#preloader').fadeOut('normall', function() {
      $(this).remove();
  });


/*------------------------------------
    8. Scroll To Top
--------------------------------------*/ 

    $(window).scroll(function(){
        if($(this).scrollTop() > 500) {
            $(".scroll-to-top").fadeIn(400);
            
        } else {
            $(".scroll-to-top").fadeOut(400);
        }
    });
 
    $(".scroll-to-top").on('click', function(event){
        event.preventDefault();
        $("html, body").animate({scrollTop: 0},600);
    });






/*------------------------------------
    9. Isotop
--------------------------------------*/  

// external js: isotope.pkgd.js
// init Isotope
var $grid = $('.isotope-grid').isotope({
  itemSelector: '.isotope-item',
  layoutMode: 'fitRows',
  getSortData: {
    name: '.name',
    symbol: '.symbol',
    number: '.number radix',
    category: '[data-category]',
    weight: function( itemElem ) {
      var weight = $( itemElem ).find('.weight').text();
      return parseFloat( weight.replace( /[\(\)]/g, '') );
    }
  }
});

// filter functions
var filterFns = {
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};

// bind filter button click
$('#filters').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});


// change is-checked class on buttons
$('.parent-isotope').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});




/*------------------------------------
    10. WOW
--------------------------------------*/ 
new WOW().init();


});


/*------------------------------------
    11. Seacrh
--------------------------------------*/ 
$('#opennav').on('click', function() {
    document.getElementById("search_nav").style.width = "100%";
});

$('#closenav').on('click', function() {
    document.getElementById("search_nav").style.width = "0%";
});



/*------------------------------------
    12. Swiper Slider
--------------------------------------*/ 
var swiper = new Swiper('.swiper-container', {
  speed: 600,
  parallax: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 5000,
  },  
});


/*------------------------------------
    13. Youtube Video Background
--------------------------------------*/   
if($("#video-area").length !== 0) {
  $('#video-play').mb_YTPlayer();
}



/*------------------------------------
    14. 3D Effect
--------------------------------------*/ 
var card = $(".video-effect-box");

$(document).on("mousemove",function(e) {  
  var ax = -($(window).innerWidth()/2- e.pageX)/100;
  var ay = ($(window).innerHeight()/2- e.pageY)/100;
  card.attr("style", "transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-webkit-transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-moz-transform: rotateY("+ax+"deg) rotateX("+ay+"deg)");
});





/*------------------------------------
    15. Input Number
--------------------------------------*/ 
jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
jQuery('.quantity').each(function() {
  var spinner = jQuery(this),
    input = spinner.find('input[type="number"]'),
    btnUp = spinner.find('.quantity-up'),
    btnDown = spinner.find('.quantity-down'),
    min = input.attr('min'),
    max = input.attr('max');

  btnUp.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue >= max) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

  btnDown.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue <= min) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

});



/*------------------------------------
    16. 404 Page Effect
--------------------------------------*/ 
var card = $(".error-box");

$(document).on("mousemove",function(e) {  
  var ax = -($(window).innerWidth()/2- e.pageX)/50;
  var ay = ($(window).innerHeight()/2- e.pageY)/50;
  card.attr("style", "transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-webkit-transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-moz-transform: rotateY("+ax+"deg) rotateX("+ay+"deg)");
});

/*------------------------------------
    17. Contact Form
--------------------------------------*/ 


// // Initialize Firebase (ADD YOUR OWN DATA)
// var config = {
//   apiKey: "AIzaSyD2Nr3Njpcs5syidsekQxzoIg1Iu22icw0",
//   authDomain: "harmony-plume.firebaseapp.com",
//   projectId: "harmony-plume",
//   storageBucket: "harmony-plume.appspot.com",
//   messagingSenderId: "582946814132",
//   appId: "1:582946814132:web:7a2ba5d027b3c1562f7fe1",
//   measurementId: "${config.measurementId}"
// };
// firebase.initializeApp(config);

// // Reference messages collection
// var messagesRef = firebase.database().ref('messages');

// // Listen for form submit
// document.getElementById('contactForm').addEventListener('submit', submitForm);

// // Submit form
// function submitForm(e){
//   e.preventDefault();

//   // Get values
//   var name = getInputVal('name');
//   var phone = getInputVal('phone');
//   var email = getInputVal('email');
//   var subject = getInputVal('subject');
//   var message = getInputVal('message');

//   // Save message
//   saveMessage(name, phone, email, subject, message);

//   // Show alert
//   document.querySelector('.alert').style.display = 'block';

//   // Hide alert after 3 seconds
//   setTimeout(function(){
//     document.querySelector('.alert').style.display = 'none';
//   },3000);

//   // Clear form
//   document.getElementById('contactForm').reset();
// }

// // Function to get get form values
// function getInputVal(id){
//   return document.getElementById(id).value;
// }

// // Save message to firebase
// function saveMessage(name, phone, email, subject, message){
//   var newMessageRef = messagesRef.push();
//   newMessageRef.set({
//     name: name,
//     phone:phone,
//     email:email,
//     subject:subject,
//     message:message
//   });
// }
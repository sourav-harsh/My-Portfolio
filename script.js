$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>20)
        {
            $('.navbar').addClass("sticky");
        }
        else
        {
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY>500)
        {
            $('.scroll-up-btn').addClass("show");
        }
        else
        {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0});
    });
    // toggle menu/navbar script
    $('menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // owl carousel script
$('.carousel').owlCarousel({
   margin:20,
   loop:true,
   autoplayTimeOut: 1000,
   autoplayHoverPause:true,
   responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false
        }
   }
});
});

// typing Animation script
var typed = new Typed(".typing",{
    strings:["Youtuber","Developer","Designer","DSA lover","Coder","Gamer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});
var typed = new Typed(".typing-1",{
    strings:["DSA lover","Coder","Gamer","Youtuber","Developer","Designer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});

AOS.init({
    duration: 1200,
  })
 


// Project script
function clicked(){
return window.location.href='https://sourav-harsh.github.io/TinDog/'; 
}
function clicking(){
return window.location.href='https://sourav-harsh.github.io/DrumKit/'; 
}
function clicks(){
    return window.location.href='https://sourav-harsh.github.io/My-Portfolio/';
}
function keeper(){
    return window.location.href='https://keeper-app001.herokuapp.com/';
}
function newsletter(){
    return window.location.href='https://loginpage007.herokuapp.com/';
}
function todolist(){
    return window.location.href='https://todolist0002.herokuapp.com/';
}
function worldtour(){
    return window.location.href='https://sourav-harsh.github.io/World-Travle-App/';
}
function ecommerce(){
    return window.location.href='https://glacial-anchorage-21055.herokuapp.com/';
}

// Day-Night Toggel button scripts
document.getElementById("cb1").addEventListener("click", function(){
    document.getElementsByTagName('body')[0].classList.toggle("dark-theme");
});

const person={
    firstName:"harsh",
    age:8,
    about:function(){
        console.log(`person is ${person.firstName} and it's age is ${person.age}`)
    }
}
person.about();




// ##############################Animation###############################
// gsap.registerPlugin(ScrollTrigger);
// // REVEAL //
// gsap.utils.toArray(".revealUp").forEach(function (elem) {
//   ScrollTrigger.create({
//     trigger: elem,
//     start: "top 80%",
//     end: "bottom 20%",
//     markers: true,
//     onEnter: function () {
//       gsap.fromTo(
//         elem,
//         { y: 100, autoAlpha: 0 },
//         {
//           duration: 1.25,
//           y: 0,
//           autoAlpha: 1,
//           ease: "back",
//           overwrite: "auto"
//         }
//       );
//     },
//     onLeave: function () {
//       gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
//     },
//     onEnterBack: function () {
//       gsap.fromTo(
//         elem,
//         { y: -100, autoAlpha: 0 },
//         {
//           duration: 1.25,
//           y: 0,
//           autoAlpha: 1,
//           ease: "back",
//           overwrite: "auto"
//         }
//       );
//     },
//     onLeaveBack: function () {
//       gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
//     }
//   });
// });

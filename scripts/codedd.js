









window.addEventListener('mouseover', function(){
  document.getElementById("m_l_1").style.transform="translateX(-290px)";
  document.getElementById("m_l_1").style.transition=" all 5s" ;
 
  document.getElementById("m_l_2").style.transform="translateX(-300px)";
  document.getElementById("m_l_2").style.transition=" all 3s" ;
  document.getElementById("m_l_3").style.transform="translateX(-350px)";
  document.getElementById("m_l_3").style.transition=" all 2s" ;
  document.getElementById("m_l_4").style.transform="translateX(-400px)";
  document.getElementById("m_l_4").style.transition=" all 1s" ;
  document.getElementById("m_r_1").style.transform="translateX(290px)";
  document.getElementById("m_r_1").style.transition=" all 4s" ;
  document.getElementById("m_r_2").style.transform="translateX(350px)";
  document.getElementById("m_r_2").style.transition=" all 3s" ;
  document.getElementById("m_r_3").style.transform="translateX(370px)";
  document.getElementById("m_r_3").style.transition=" all 2s" ;
  document.getElementById("m_r_4").style.transform="translateX(400px)";
  document.getElementById("m_r_4").style.transition=" all 1s" ;
});






$(document).ready(function() {
  $(".one").hover(
    function() {

      
      var imageUrl = "images/sandstory.png";
      $(".first-section").css({
        "background-image": "url(" + imageUrl + ")",
        "background-size": "cover"
      });
    },
    function() {
      $(".first-section").css("background-image", "none");
    }
  );
});

$(document).ready(function() {
  $(".two").hover(
    function() {


      
      var imageUrl = "images/mineright.jpg";

      
      $(".first-section").css({
        "background-image": "url(" + imageUrl + ")",
        "background-size": "cover"
      });
    },
    function() {
      $(".first-section").css("background-image", "none");
    }
  );
});

$(document).ready(function() {
  $(".three").hover(
    function() {
      var imageUrl = "images/livv.png";
      $(".first-section").css({
        "background-image": "url(" + imageUrl + ")",
        "background-size": "cover"
      });
    },
    function() {
      $(".first-section").css("background-image", "none");
    }
  );
});

$(".sand").click(function(){
  window.location.href='https://sandstory.ca/';
});


$(".mine").click(function(){
  window.location.href='https://minesmart.onrender.com/';
});


$(".livv").click(function(){
  window.location.href='https://www.joffrelakes.ca/';
});

$(".about").click(function(){
  window.location.href='about.html';
});

$(".contact").click(function(){
  window.location.href='contact.html';
});

$(".email").click(function(){
  window.location.href='mailto: harpetheus@gmail.com';
});





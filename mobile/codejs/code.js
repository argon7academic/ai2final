document.getElementById('clock').innerHTML = clock();
function clock()
{
  var date = new Date();
  document.getElementById('clock').innerHTML = date;
  var t = setTimeout(clock, 500);
  return date;
}

function Stick() {
  window.onscroll = function () {myFunction(), myFunction2();};

  var navbar = document.getElementById('navbar');
  var sticky = navbar.offsetTop;
  function myFunction() {
    if (window.pageYOffset >= sticky)
    {
      navbar.classList.add('sticky');
    }else {
      navbar.classList.remove('sticky');
    }
  }

  function myFunction2() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById('myBar').style.width = scrolled + '%';
  }
}

$('.bgimg-1').mouseenter(function () {
    $('.bgimg-1').animate({ opacity: '1' });
  });

$('.bgimg-1').mouseleave(function () {
    $('.bgimg-1').animate({ opacity: '.65' });
  });

$('.bgimg-2').mouseenter(function () {
    $('.bgimg-2').animate({ opacity: '1' });
  });

$('.bgimg-2').mouseleave(function () {
    $('.bgimg-2').animate({ opacity: '.65' });
  });

$('.bgimg-3').mouseenter(function () {
    $('.bgimg-3').animate({ opacity: '1' });
  });

$('.bgimg-3').mouseleave(function () {
    $('.bgimg-3').animate({ opacity: '.65' });
  });

  
  function al() {
    alert("This Page is Under construction, Thank you for your patience.");
  }

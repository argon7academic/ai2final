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

var boolbreak = false;
var iplax = 0;
var plax =
['url(./imagens/wall1.jpg)',
  'url(./imagens/wall2.jpg)',
  'url(./imagens/wall3.jpg)',
  'url(./imagens/wall4.jpg)',
  'url(./imagens/wall5.jpg)',
  'url(./imagens/wall6.jpg)',
  'url(./imagens/wall7.jpg)',
  'url(./imagens/wall8.jpg)',
  'url(./imagens/wall9.jpg)',
  'url(./imagens/wall10.jpg)',
];
var ibg = 0;
var whatbg =
[
  '.bgimg-1',
  '.bgimg-2',
  '.bgimg-3',
];

function parallaxSlides() {
  setTimeout(function () {
      while (boolbreak == false)
      {
        if (iplax >= plax.length - 1) {iplax = 0; }

        $(whatbg[ibg]).css('background-image', plax[iplax]);
        iplax++;
        if (ibg == whatbg.length - 1) {
          ibg = 0;boolbreak = true;
        }else {ibg++;}
      }

      boolbreak = false;
      parallaxSlides();
    }, 5000);
}

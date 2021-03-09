/******************************************************************/
//THE FOOD
/******************************************************************/
//Vars, imagens, textos
var timing;
var i=0;
var j=0;
var foodtext=
[
	//linha 0
		["Makizushi is a cylindrical piece, formed with the help of a bamboo mat, generally wrapped in nori. Occasionally wrapped in a thin omelette, soy paper, cucumber, or shiso (perilla) leaves. Traditionally the makizushi is served in a tray of 8 pieces,  it costs 20$(USD) per serving.", //col 0

      "Also known as hako-zushi is a pressed sushi from the Kansai region, a favorite and specialty of Osaka. A block-shaped piece is formed using a wooden mold, called an oshibako. The chef lines the bottom of the oshibako with the toppings, covers them with sushi rice, and then presses the lid of the mold down to create a compact, rectilinear block. All the ingredients are either cooked or cured and raw fish is never used. Costs 35$(USD) per serving.",

      "Nigirizushi consists of an oblong mound of sushi rice that the chef presses between the palms of the hands to form an oval-shaped ball, and a topping draped over the ball. It is usually served with a bit of wasabi; neta are typically fish such as salmon, tuna or other seafood. Certain toppings are typically bound to the rice with a thin strip of nori, most commonly octopus, freshwater eel, sea eel, squid, and sweet egg. One order of a given type of fish typically results in two pieces, while a sushi set may contain only one piece of each topping.",
  ], //col 1
	//linha 1

		["MAKIZUSHI",
		"OSHIZUSHI",
    "NIGIRIZUSHI",
  ]
]
var imgs=
[
 //linha 0
	[ "../imagens/sushi0_f0.jpg",
    "../imagens/sushi1_f0.jpg",
	  "../imagens/sushi2_f0.jpg",],
 //linha 1

 	[ "../imagens/sushi0_f1.jpg",
     "../imagens/sushi1_f1.jpg",
 	  "../imagens/sushi2_f1.jpg",],
    //linha 1

  [ "../imagens/sushi0_f2.jpg",
    "../imagens/sushi1_f2.jpg",
     "../imagens/sushi2_f2.jpg",]

]

function showSlides(){
	 document.getElementById('slide').src = imgs[i][j];
   if(j < imgs[i].length - 1)
	 {
		 j++;
	 }
	 else
	 {
		 j = 0;
	 }
	 timing = setTimeout("showSlides()",5000);
	 $('.next').click(function (e) {
		 	clearTimeout(timing);
	 });
	 $('.prev').click(function (e) {
		 	clearTimeout(timing);
		});
}
//funções para mudar o texto

function change_next(){
if(i < foodtext[0].length - 1 && i>=0)
{
		j=0;
		i++;
		x=document.getElementsByClassName("food_text");  // Find the elements
		y=document.getElementsByClassName("food_cat");  // Find the elements
		x[0].innerText=foodtext[0][i];    // Change the content text
		y[0].innerText=foodtext[1][i];    // Change the content textcat
    return;
}
else
{
		j=0;
		i = 0;
		x=document.getElementsByClassName("food_text");  // Find the elements
		y=document.getElementsByClassName("food_cat");  // Find the elements
		x[0].innerText=foodtext[0][i];    // Change the content text
		y[0].innerText=foodtext[1][i];    // Change the content textcat
    return;
}
}

function change_prev(){
	if(i < foodtext[0].length  && i>0)
	{
			j=0;
			i--;
			x=document.getElementsByClassName("food_text");  // Find the elements
			y=document.getElementsByClassName("food_cat");  // Find the elements
			x[0].innerText=foodtext[0][i];    // Change the content text
			y[0].innerText=foodtext[1][i];    // Change the content textcat
      return;
  }
	else
	{
			j=0;
			i = foodtext[0].length - 1;
			x=document.getElementsByClassName("food_text");  // Find the elements
			y=document.getElementsByClassName("food_cat");  // Find the elements
			x[0].innerText=foodtext[0][i];    // Change the content text
			y[0].innerText=foodtext[1][i];    // Change the content textcat
      return;
  }
}
/******************************************************************/
//THE Drink
/******************************************************************/
var timing2;
var i2=0;
var j2=0;
var drinktext=
[
	//linha 0
		["Hibiki is a premium blended whisky produced in Japan by Beam Suntory. It is a premium-category product, and has won several awards. For producing the blends available as of 2010, more than 30 whiskies were used in the mix, including some that were aged more than 30 years and some that were aged in old umeshu casks. A bamboo charcoal filtering step has also been used. The company said the process gives it a very sweet and gentle flavor.",


    "Yamazaki distillery is a whisky distillery located in Shimamoto, Osaka Prefecture, Japan. Opened in 1923, and owned by Suntory, it was Japan's first commercial whisky distillery. Seven thousand bottles of unblended malt whisky are on display in its Whisky Library.Spirit ratings organizations, such as the Beverage Testing Institute and the San Francisco World Spirits Competitions, have reacted favorably to Yamazaki's offerings. Most notably, the 18-Year has earned six consecutive double gold medals at the San Francisco Spirits Competitions between 2008 and 2013. Yamazaki 25 Year Old was awarded Best Japanese Single Malt at the 2013 World Whisky Awards.",

      "Nigirizushi consists of an oblong mound of sushi rice that the chef presses between the palms of the hands to form an oval-shaped ball, and a topping draped over the ball. It is usually served with a bit of wasabi; neta are typically fish such as salmon, tuna or other seafood. Certain toppings are typically bound to the rice with a thin strip of nori, most commonly octopus, freshwater eel, sea eel, squid, and sweet egg. One order of a given type of fish typically results in two pieces, while a sushi set may contain only one piece of each topping.",
  ], //col 1
	//linha 1

		["HIBIKI",
		"YAMAZAKI",
    "NIGIRIZUSHI",
  ]
]
var imgs2=
[
 //linha 0
	[ "../imagens/drink0_f0.jpg",
    "../imagens/drink1_f0.jpg",
	  "../imagens/drink2_f0.jpg",],
 //linha 1

 	[ "../imagens/drink0_f1.jpg",
     "../imagens/drink1_f1.jpg",
 	  "../imagens/drink2_f1.jpg",],
    //linha 1

  [ "../imagens/drink0_f2.jpg",
    "../imagens/drink1_f2.jpg",
     "../imagens/drink2_f2.jpg",]

]

//funçao para mudar grupo de imagens
function showSlides2(){
	 document.getElementById('slide2').src = imgs2[i2][j2];
   if(j2 < imgs2[i2].length - 1)
	 {
		 j2++;
	 }
	 else
	 {
		 j2 = 0;
	 }
	 timing2 = setTimeout("showSlides2()",5000);
	 $('.next2').click(function (e) {
		 	clearTimeout(timing2);
	 });
	 $('.prev2').click(function (e) {
		 	clearTimeout(timing2);
		});
}

//funções dos botoes
function change_next2(){
if(i2 < drinktext[0].length - 1 && i2>=0)
{
		j2=0;
		i2++;
		x2=document.getElementsByClassName("drink_text");  // Find the elements
		y2=document.getElementsByClassName("drink_cat");  // Find the elements
		x2[0].innerText=drinktext[0][i2];    // Change the content text
		y2[0].innerText=drinktext[1][i2];    // Change the content textcat
    return;
}
else
{
		j2=0;
		i2 = 0;
		x2=document.getElementsByClassName("drink_text");  // Find the elements
		y2=document.getElementsByClassName("drink_cat");  // Find the elements
		x2[0].innerText=drinktext[0][i2];    // Change the content text
		y2[0].innerText=drinktext[1][i2];    // Change the content textcat
    return;
}
}

function change_prev2(){
	if(i2 < drinktext[0].length  && i2>0)
	{
			j2=0;
			i2--;
			x2=document.getElementsByClassName("drink_text");  // Find the elements
			y2=document.getElementsByClassName("drink_cat");  // Find the elements
			x2[0].innerText=drinktext[0][i2];    // Change the content text
			y2[0].innerText=drinktext[1][i2];    // Change the content textcat
      return;
  }
	else
	{
			j2=0;
			i2 = drinktext[i2].length - 1;
			x2=document.getElementsByClassName("drink_text");  // Find the elements
			y2=document.getElementsByClassName("drink_cat");  // Find the elements
			x2[0].innerText=drinktext[0][i2];    // Change the content text
			y2[0].innerText=drinktext[1][i2];    // Change the content textcat
      return;
	}
}

//FUNÇAO SLIDER de texto/imagens
function foodslide()
{
  //FOOD
		document.getElementById('slide').src = imgs[i][j];
    x=document.getElementsByClassName("food_text");  // Find the elements
		y=document.getElementsByClassName("food_cat");  // Find the elements
		x[0].innerText=foodtext[0][i];    // Change the content text
		y[0].innerText=foodtext[1][i];    // Change the content textcat
  //Drink
    document.getElementById('slide2').src = imgs2[i2][j2];
    x2=document.getElementsByClassName("drink_text");  // Find the elements
    y2=document.getElementsByClassName("drink_cat");  // Find the elements
    x2[0].innerText=drinktext[0][i2];    // Change the content text
    y2[0].innerText=drinktext[1][i2];    // Change the content textcat
    $('.next').click(function (e) {
      change_next();
			showSlides();
    });
		$('.prev').click(function (e) {
     	change_prev();
			showSlides();
    });
    $('.next2').click(function (e) {
     	change_next2();
			showSlides2();
    });
		$('.prev2').click(function (e) {
     	change_prev2();
			showSlides2();
    });
}

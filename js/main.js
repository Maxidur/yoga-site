
$(".buttom_menu").click(function(){
   	$(this).toggleClass("active");
  	$(this).toggleClass("close"); 
   	$(".top_menu").fadeToggle(600);
  	$(".list").fadeToggle(0);
  	if($(".buttom_menu").hasClass("active")){
  		$(".list").wrapAll("<nav class='top_menu'></nav>");
  	} else {
  		$(".list").unwrap();
  	}
  });

function listDisplay() {
	if($(window).width() > 797) {
		$(".list").css("display","block");	
	} else {
		$(".list").css("display","none");

	}
};

listDisplay();

$(window).resize(function(){
	listDisplay();
})

// style select

$(document).ready(function(){
    $("select").selecter({
      label: "Chose your class"
    });
});

// jq validate

 jQuery.validator.setDefaults({
   debug: true,
  success: "valid"
 });

$("form").validate({
  rules: {
    name: {
      required: true,
      maxlength: 20
    },

    telefon: {
      required: true,
      number: true,
      maxlength: 12
    }
  }
});


// slider_aboutUs

$(document).ready(function(){
  $(".owl-carousel.aboutUs_carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
  });
});

// slider trainer
$(document).ready(function(){
  $(".owl-carousel.shop_carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: false,
  });
});

$(document).ready(function(){
  $(".owl-carousel.trainer_carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: true,    
  });
});




// shop buttom hover

$(".shop_buttom").hover(
  function() {
    var target = $(this).parent().children();  
    $(target[0]).css("background-color","#161e5d");
  },
  function() {
    var target = $(this).parent().children();
    $(target[0]).css("background-color","#5b6ceb");
  }
  );

// menu scrolling
$(document).ready(function() {

   $("#menuLeft").on("click","a", function(event) {
    event.preventDefault();

    if($(window).width() < 797) {
        $(".buttom_menu").trigger("click");
      };
    

    var id = $(this).attr("href");
    var top = $(id).offset().top;

    $("body,html").animate({scrollTop: top}, 1500);
  });

   $("#menuRight").on("click","a", function(event) {
    event.preventDefault();

    if($(window).width() < 797) {
        $(".buttom_menu").trigger("click");
      };

    $(".buttom_menu").removeClass("active");

    var id = $(this).attr("href");
    var top = $(id).offset().top;

    $("body,html").animate({scrollTop: top}, 1500);
  });

});










				

 				

		

	






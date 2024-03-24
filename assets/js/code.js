(function ($) {

  "use strict";

  // Page loading animation
  $(window).on('load', function() {
    tada();
    $("source").each(function() {
      $(this).attr("src", $(this).attr("data-src"));
    });
    $("video")[0].load();
  });


  var ass = [$("#navcontainer").find("a"), $("#navsmall").find("a")]
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var box = $('#homesection').height();
    var header = $('header').height();

    if (scroll >= box - header) {
      $('#headerph').css('display','block');
      $("header").addClass("background-header");
    } else {
      $('#headerph').css('display','none');
      $("header").removeClass("background-header");
    }

    var fromTop = scroll+header+5;

    for (var as of ass) {
      var winner = null;
      for (var a of as) {
        a = $(a);
        var scrollitem = a.attr("href");
        scrollitem = $(scrollitem);
        if (scrollitem.offset().top < fromTop) {
          if (winner) {
            winner.removeClass("active");
          }
          winner = a;
        } else {
          a.removeClass("active")
        }
        winner.addClass("active");
      }
    }
    });
  

	// Menu Dropdown Toggle
	if($('.menu-trigger').length){
		$(".menu-trigger").on('click', function() {	
			$(this).toggleClass('active');
      $('#navsmall').slideToggle(200, function () {
        if ($(this).is(':visible'))
          $(this).css('display','inline-block');
      });
		});
	}

  // Menu elevator animation
  $('.main-nav a[href*=\\#]:not([href=\\#])').on('click', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        var width = $(window).width();
        if(width < 991) {
          $('.menu-trigger').removeClass('active');
          $('#navsmall').slideUp(200);	
        }
        $('html,body').animate({
          scrollTop: (target.offset().top) - 80
        }, 700);
        return false;
      }
  }


});

})(window.jQuery);

function sendwhatsapp() {
  let answers = {};
  $.each($("#contact-form").serializeArray(), function() {
    answers[this.name] = this.value;
  });
  msg = "*Nombre:* "
  msg += answers["name"]
  if (answers["pasas"] != "") {
    msg += "\n*Pasas?* "
    msg += answers["pasas"]
  }
  msg += "\n*Mensaje:*\n"
  msg += answers["message"]
  console.log(msg)
  window.open("https://wa.me/5493413752106/?text=" + encodeURI(msg));
  return false;
}

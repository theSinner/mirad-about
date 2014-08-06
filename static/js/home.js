$(document).ready(imReady);
function startThePage()
{
	$("html, body").animate({ scrollTop: $(window).height()}, "slow");
}
function goToTop()
{
	$("html, body").animate({ scrollTop: 0}, "slow");
}
function goToBlog()
{
	var win = window.open('http://blog.mirad.ir', '_blank');
	win.focus();
}
function resizing()
{
	opactityOffset=5/$(window).height();
	blurOpacity=0;
	
	$('#main-page').css({'height':$(window).height().toString()+'px'});
	$('#main-page-blur').css({'height':$(window).height().toString()+'px'});
	$('#main-page-blur').css({'margin-top':(-1*$(window).height()).toString()+'px'});

	$('#main-title-plate').css({'height':$(window).height().toString()+'px'});
	$('#main-title-plate').css({'margin-top':(-1*$(window).height()).toString()+'px'});
	var heightOffset=$(window).height()-$('#main-text-plate').outerHeight()-$('#startButton').outerHeight()-$(window).height()/100;
	heightOffset/=2;
	$('.developerImagePlate').css({'height':$('.developerDetail').height().toString()+'px'});

	$('#main-text-plate').css({'margin-top':heightOffset.toString()+'px','margin-bottom':heightOffset.toString()+'px'})
	$('#startButtonP').css({'margin-top':(($('#startButton').height()-$('#startButtonP').height())/2).toString()+'px'});
	$('#goTopP').css({'margin-top':(($('#goTop').height()-$('#goTopP').height())/2).toString()+'px'});

	heightOffset=$('.developerDetailSmall').height();
	$('.developerDetailSmall').css({'padding-top':(($('.developersImageSmall').width()-heightOffset)/2).toString()+'px'});

}
function imReady()
{
	opactityOffset=5/$(window).height();
	blurOpacity=0;
	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, "slow");
	        return false;
	      }
	    }
	  });
	});
	$('#main-page').css({'height':$(window).height().toString()+'px'});
	$('#main-page-blur').css({'height':$(window).height().toString()+'px'});
	$('#main-page-blur').css({'margin-top':(-1*$(window).height()).toString()+'px'});

	$('#main-title-plate').css({'height':$(window).height().toString()+'px'});
	$('#main-title-plate').css({'margin-top':(-1*$(window).height()).toString()+'px'});
	var heightOffset=$(window).height()-$('#main-text-plate').outerHeight()-$('#startButton').outerHeight()-$(window).height()/100;
	heightOffset/=2;
	$('.developerImagePlate').css({'height':$('.developerDetail').height().toString()+'px'});

	$('#main-text-plate').css({'margin-top':heightOffset.toString()+'px','margin-bottom':heightOffset.toString()+'px'})
	$('#startButtonP').css({'margin-top':(($('#startButton').height()-$('#startButtonP').height())/2).toString()+'px'});
	$('#goTopP').css({'margin-top':(($('#goTop').height()-$('#goTopP').height())/2).toString()+'px'});

	heightOffset=$('.developerDetailSmall').height();
	$('.developerDetailSmall').css({'padding-top':(($('.developersImageSmall').width()-heightOffset)/2).toString()+'px'});



	$('#startButton').click(startThePage);
	$('#goTop').click(goToTop);
	$('#goBlog').click(goToBlog);
	$(window).scroll(function()
	{
		//console.log($(document).scrollTop())
		if($(document).scrollTop()<$(window).height())
		{
			blurOpacity=opactityOffset*$(document).scrollTop();
			if(blurOpacity>1)
				blurOpacity=1;
			else if(blurOpacity<0)
				blurOpacity=0;
			$('#main-page-blur').css({'opacity':blurOpacity.toString()})
		}
	});
}

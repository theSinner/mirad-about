$(document).ready(imReady);

function imReady()
{
	opactityOffset=10/$(window).height();
	blurOpacity=0;
	prevPos=-1;
	var heightOffset=$(window).height()-$('#main-text-plate').height()-$('#market-plate').height()-$(window).height()/12;
	heightOffset/=2;
	$('#main-page').css({'height':$(window).height().toString()+'px'});
	$('#main-page-blur').css({'height':$(window).height().toString()+'px'});
	$('#main-page-blur').css({'margin-top':(-1*$(window).height()).toString()+'px'});

	$('#main-title-plate').css({'height':$(window).height().toString()+'px'});
	$('#main-title-plate').css({'margin-top':(-1*$(window).height()).toString()+'px'});

	var heightOffset=$(window).height()-$('#main-text-plate').height()-$('#market-plate').height()-$(window).height()/12;
	heightOffset/=2;

	$('#main-text-plate').css({'margin-top':heightOffset.toString()+'px','margin-bottom':heightOffset.toString()+'px'})
	$(window).scroll(function()
	{
		//console.log($(document).scrollTop())
		if($(document).scrollTop()<0)
		{

		}
		else if($(document).scrollTop()<10)
		{
			$('#main-page-blur').css({'opacity':'0'})
		}
		else if($(document).scrollTop()<$(window).height())
		{
			//console.log(prevPos)
			//console.log($(document).scrollTop())
			if(prevPos<$(document).scrollTop())
			{
				prevPos=$(document).scrollTop();
				blurOpacity+=opactityOffset;
				if(blurOpacity>1)
					blurOpacity=1;
				$('#main-page-blur').css({'opacity':blurOpacity.toString()})
			}
			else
			{
				prevPos=$(document).scrollTop();
				blurOpacity-=opactityOffset;
				if(blurOpacity<0)
					blurOpacity=0;
				$('#main-page-blur').css({'opacity':blurOpacity.toString()})
			}
		}
	});
}

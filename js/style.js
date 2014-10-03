// JavaScript Document
$(document).ready(function()
{	
	var winWidth="";
	var winHeight="";
	var team_big_linkW="";
	var team_big_linkpW="";
	var team_big_linkH="";
    var team_big_linkpH="";

	winResponse()
	function winResponse()
	{
		winWidth=$(window).width();
		winHeight=$(window).height();
		//alert(winWidth);
        team_big_linkW=$('.team_big_link').outerWidth(true);
		team_big_linkpW=$('.team_big_link p').outerWidth(true);
		team_big_linkH=$('.team_big_link').outerHeight(true);
		team_big_linkpH=$('.team_big_link p').outerHeight(true);
		$('.team_big_link p').css('left',(team_big_linkW-team_big_linkpW)/2);
	    $('.home').css({'height':winHeight});
		if(winWidth<1349)
		{
			$('.home_line').hide();
			$('.what_line').hide();
			$('.mentorsLine').hide();
			$('.faqLine').hide();
		}
		else
		{
			$('.home_line').show();
			$('.what_line').show();
			$('.mentorsLine').show();
			$('.faqLine').show();
		}
		
	}
    $(window).resize(function(){                
     winResponse();
 });  

})
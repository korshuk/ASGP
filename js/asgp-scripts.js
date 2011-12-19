$(document).ready(function(){

// Cufon font replacements

Cufon.replace('h1'); 
Cufon.replace('.scrollable-item-title');
Cufon.replace('.index-vacancy span', {textShadow: '#555 0px -1px'});

// Index page scrollable initializing

if ($("div").is(".scrollable")){
	$(function() {
		$(".scrollable").scrollable({speed: 800}).navigator("#navi");
		
	});
		
	$(function() {	
			$(".items .item:first-child .scrollable-item-content").fadeIn('slow').addClass('active');
			$("#navi div:first-child").addClass('active');
			if ($(".items .item:first-child .scrollable-item-content").hasClass('white-theme')) {
				$(".navigation").addClass('navigation-white');
				}
			else {
				$(".navigation").addClass('navigation-black');
				}
			$("#navi div a").hover(function(){
				$(this).parent("div").toggleClass('hover');						
			});
			$("#navi div a").click(function(){
				$(".scrollable-dots-left, .scrollable-dots-right").fadeIn(500);
				$(".scrollable-item-content").fadeOut(0).removeClass('active');						   
				thumbId = $(this).attr('id');
				itemId = thumbId.replace('item-thumb', 'item');
				$("#"+itemId).delay(1000).fadeIn(1000).addClass('active');
				if ($("#"+itemId).hasClass('white-theme')) {
					$(".navigation").removeClass('navigation-white').removeClass('navigation-black').addClass('navigation-white');
					}
				else {
					$(".navigation").removeClass('navigation-white').removeClass('navigation-black').addClass('navigation-black');
					}
				if ($(".items .item:first-child .scrollable-item-content").hasClass('active')) {
						$(".scrollable-dots-left").fadeOut(1000); 
					}
				if ($(".items .item:last-child .scrollable-item-content").hasClass('active')) {
						$(".scrollable-dots-right").fadeOut(1000);
					}
			});
	});
}

// Index page scrollable navigation initializing

if ($("div").is(".navigation-scrollable")){
	$(function() {
		var elWidth = $("#navi").children("div").width();
		var fullWidth = elWidth * 13 - 850;
		$(".navigation .more").click(function(){
			$("#navi").animate({left: -fullWidth});								  
		});
		$(".navigation .less").click(function(){
			$("#navi").animate({left: 0});									  
		});
	});
}

// Project page scrollable initializing

if ($("div").is(".project-scrollable")){
	$(function() {
		$(".project-scrollable").scrollable({speed: 800}).navigator("#navi");
	});
	
	$(function() {
		$(".items .item:first-child").addClass('active');
		$("#navi div:first-child").addClass('active');
		$("#navi div a").hover(function(){
			$(this).parent("div").toggleClass('hover');						
		});
		$("#navi div a").click(function(){
			$(".project-scrollable-dots-left, .project-scrollable-dots-right").fadeIn(500);
			$(".item").removeClass('active');						   
			thumbId = $(this).attr('id');
			itemId = thumbId.replace('item-thumb', 'item');
			$("#"+itemId).delay(1000).addClass('active');
			if ($(".items .item:first-child").hasClass('active')) {
					$(".project-scrollable-dots-left").fadeOut(1000); 
				}
			if ($(".items .item:last-child").hasClass('active')) {
					$(".project-scrollable-dots-right").fadeOut(1000);
				}
		});
	});	
}

// Sidebar accordeons initializing

if ($("ul").is(".accordion")){
 	$(".accordion").tabs(".accordion  li  p", {tabs: '.accordion li a', effect: 'slide'});
}

// List items hover event
	
$(function() {
	$("ul.marker li a").mouseover(function(){
		$(this).parent("li").addClass('hover');							   
	});	
	$("ul.marker li a").mouseout(function(){
		$(this).parent("li").removeClass('hover');							   
	});		   
});

// Form value replacement

$(function() {
	$("#query").focus(function(){
		val = $("#query").attr('value');											  
		$(this).attr('value', ''); 
	});
	$("#query").blur(function(){											 
		$(this).attr('value', val); 
	});	   
});

$(function() {
	$("#email").focus(function(){
		val = $("#email").attr('value');											  
		$(this).attr('value', ''); 
	});
	$("#email").blur(function(){											 
		$(this).attr('value', val); 
	});	   
});

$(function() {
	$("#tel").focus(function(){
		val = $("#tel").attr('value');											  
		$(this).attr('value', ''); 
	});
	$("#tel").blur(function(){											 
		$(this).attr('value', val); 
	});	   
});

$(function() {
	$("#message").focus(function(){
		val = $("#message").text();											  
		$(this).text(''); 
	});
	$("#message").blur(function(){											 
		$(this).text(val); 
	});	   
});

// Index page vacancies block

$(function() {
	$(".index-vacancy a").click(function(){
		height = $(".index-vacancy").height();								 
		$(".index-vacancy").hide();
		$(".scrollable-dots-left, .scrollable-dots-right").css('top', coordY.top-39);
		})	   
	});

// Lightbox init

$(function() {
	$('a[rel=lightbox]').lightBox({
		overlayBgColor: '#fff',
		overlayOpacity: 0.9,
		imageBtnClose: ''
								  });
	});	
});
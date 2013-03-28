(function( $ ){

  $.fn.mobilenav = function( options ) {  

    var settings = $.extend( {
      'selector'				 : '#mobilenav',
      'position'         : 'left',
			'slidewidth'			 : 300,
			'speed'			 			 : 300,
			'maxwidth'				 : 768
    }, options);
		var slideheight = $('.nav-responsive').height();
		var open = false;
		var btn = this;
		var resetnav = true;
		
		function initnav(){
			
			if($(window).width() <= settings.maxwidth){
				$('.nav-responsive').addClass('responsive-'+settings.position);
				slideheight = $('.nav-responsive').height();
				$('.nav-responsive.responsive-left').css({height:$(window).height()});
	
				if(settings.position == 'left'){
					$('.nav-responsive').css({
						width:settings.slidewidth,
						left:'-'+settings.slidewidth+'px'
					});
				} else if (settings.position == 'top'){
					$('.nav-responsive').css({
						top:'-'+slideheight+'px'
					});
				}
			} else {
				$('body, .nav-responsive').css({top:0,left:0});
				$('.nav-responsive').removeClass('responsive-'+settings.position);
			}
			open = false;			
		}

		initnav();
		
			if(settings.position == 'left'){
				btn.click(function(){
					if(open){
						$('body,.nav-responsive').animate({
							left: '-='+settings.slidewidth+'px'
						},settings.speed,function(){
							open = false;
						});	
					} else {
						$('body,.nav-responsive').animate({
							left: '+='+settings.slidewidth+'px'
						},settings.speed,function(){
							open = true;						
						});
					}
				});
					
			} else if (settings.position == 'top'){

				btn.click(function(){

					if(open){
						$('body,.nav-responsive').animate({
							top: '-='+slideheight+'px'
						},settings.speed,function(){
							open = false;
						});	
					} else {
						$('body,.nav-responsive').animate({
							top: '+='+slideheight+'px'
						},settings.speed,function(){
							open = true;						
						});
					}
				});
				
			}

		$(window).resize(function() {
			if($(window).width() <= settings.maxwidth){
				if(resetnav){
					initnav();
					resetnav = false;				
					open = false;
				}
			} else {
				$('body, .nav-responsive').css({top:0,left:0});
				$('.nav-responsive').removeClass('responsive-'+settings.position);
				resetnav = true;
				open = false;
			}
		});    
		
  };
})( jQuery );
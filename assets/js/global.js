//Magnific html popup
$(document).ready(function() {
    $('.open-popup-link').magnificPopup({
      type:'inline',
      midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });
});

// Magnific gallery
   $(document).ready(function() {
        $('.popup-gallery').magnificPopup({
          delegate: 'a',
          type: 'image',
          tLoading: 'Loading image #%curr%...',
          mainClass: 'mfp-img-mobile',
          gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
          },
          image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item)
            {
              return item.el.attr('title') + ' <i class="fa fa-chevron-circle-right"></i> ' + item.el.attr('alt') + '<small>by Pen Lister</small>';
            }
          }
        });
      });
   
//Magnific Form

$(document).ready(function() {
	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
});


//Responsive Toggle Menu
jQuery(document).ready(function($) {

	var $menu = $('#menu'),
	  $menulink = $('.menu-link'),
	  $menuTrigger = $('.has-submenu > a');

	$menulink.click(function(e) {
		e.preventDefault();
		$menulink.toggleClass('active');
		$menu.toggleClass('active');
	});

	$menuTrigger.click(function(e) {
		e.preventDefault();
		var $this = $(this);
		$this.toggleClass('active').next('ul').toggleClass('active');
	});

});

//Active menu state
       jQuery(function($){
       var str=location.href.toLowerCase();
       $("#menu li a").each(function() {
       if (str.indexOf(this.href.toLowerCase()) > -1) {
         $("li.active").removeClass("active");
       $(this).parent().addClass("active");
       }
        });
        });
            
//Masonry      
    var $container = $('#masonry-box');
  $container.imagesLoaded(function(){
    $container.masonry({
      itemSelector : '.item',
     // columnWidth : 500
  });
});
        
        
//Embedagram
  jQuery(function($){
    $('#slideshow').embedagram({
	    instagram_id: 386238952,
 //  success: function (){ $('#slideshow').animate({height: "show", width: "show"},1500, "swing") }, 
   limit: 18
});
});
  
  //fluid video
  $(function() {
    
    var $allVideos = $("iframe[src^='http://player.vimeo.com'], iframe[src^='http://www.youtube.com'], object, embed"),
    $fluidEl = $("figure");
	    	
	$allVideos.each(function() {
	
	  $(this)
	    // jQuery .data does not work on object/embed elements
	    .attr('data-aspectRatio', this.height / this.width)
	    .removeAttr('height')
	    .removeAttr('width');
	
	});
	
	$(window).resize(function() {
	
	  var newWidth = $fluidEl.width();
	  $allVideos.each(function() {
	  
	    var $el = $(this);
	    $el
	        .width(newWidth)
	        .height(newWidth * $el.attr('data-aspectRatio'));
	  
	  });
	
	}).resize();

});
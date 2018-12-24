 // img compressor variables
  var imgA = '/upload/';
  var imgB = '/upload/c_limit,q_auto:eco,w_2000/';
  
if (window.location.href.indexOf(devmode=true) > -1) {
	var dataSource = 'https://sheetsu.com/apis/v1.0su/00d554012ffa';
} else {
	var dataSource = 'https://sheetsu.com/apis/v1.0su/00d554012ffa';
	// var dataSource = 'https://capsule-theme-bigcartel.firebaseio.com//.json/?auth=L2IVaL9bP09pFdYDSkZEc9PKCJnefjTneupUrmD8';
}


$(window).ready(function(){
	
	$.ajax({
		url: dataSource,
		type: "GET",
		crossDomain: true,
		dataType: "json",
		success: function(data) {

		$.each(data, function(el, USER){
			if (this["License Key"] == licenseKey && window.location.href.indexOf(this["Big Cartel Domain"]) > -1 || this["Big Cartel Domain"] == 'yourstore.bigcartel.com' ){

					
				// Lookbook #1
				if (window.location.href == USER["LB1: Page URL"] || location.pathname == USER["LB1: Page URL"] && USER["LB1: Page URL"] != ''){
									
					var lookbookPageHTML = 
						'<div class="lookbook-slider" data-slider="pg1">\
							 <div class="swiper-wrapper">' + 
							 (USER["LB1: Image URL"].replace(imgA, imgB) ?
								'<div id="cover-slide" class="swiper-slide" style="background-image:url(' + USER["LB1: Image URL"].replace(imgA, imgB) + ')">\
									<div class="cover-text text-center">' +
										(USER["LB1: Eyebrow Heading"] ? '<p class="h3">' + USER["LB1: Eyebrow Heading"] + '</p>' : '') +
										(USER["LB1: Title"] ? '<h1 class="display-1 mb-4">' + USER["LB1: Title"] + '</h1>' : '') +
										(USER["LB1: Sub Heading"] ? '<h2>' + USER["LB1: Sub Heading"] + '</h2>' : '') +
									'</div>\
									<img src="' + USER["LB1: Image URL"].replace(imgA, imgB) + '">\
								</div>' : '') + 
								
							 (USER["LB1: Slide 1 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB1: Slide 1 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB1: Slide 1 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB1: Slide 1 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB1: Slide 1 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							  
							  (USER["LB1: Slide 2 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB1: Slide 2 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB1: Slide 2 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB1: Slide 2 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB1: Slide 2 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							  
							  (USER["LB1: Slide 3 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB1: Slide 3 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB1: Slide 3 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB1: Slide 3 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB1: Slide 3 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +					  
							  
							  (USER["LB1: Slide 4 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB1: Slide 4 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB1: Slide 4 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB1: Slide 4 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB1: Slide 4 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							  
							  (USER["LB1: Slide 5 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB1: Slide 5 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB1: Slide 5 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB1: Slide 5 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB1: Slide 5 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							  
							  (USER["LB1: Slide 6 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB1: Slide 6 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB1: Slide 6 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB1: Slide 6 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB1: Slide 6 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							  
							  (USER["LB1: Slide 7 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB1: Slide 1 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB1: Slide 7 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB1: Slide 7 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB1: Slide 7 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							  
							  (USER["LB1: Slide 8 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB1: Slide 8 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB1: Slide 8 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB1: Slide 8 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB1: Slide 8 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							  
							  (USER["LB1: Slide 9 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB1: Slide 9 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB1: Slide 9 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB1: Slide 9 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB1: Slide 9 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							  
							  (USER["LB1: Slide 10 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB1: Slide 10 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB1: Slide 10 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB1: Slide 10 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB1: Slide 10 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +					  
							  
							  (USER["LB1: Slide 11 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB1: Slide 11 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB1: Slide 11 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB1: Slide 11 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB1: Slide 11 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							  
							  (USER["LB1: Slide 12 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB1: Slide 12 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB1: Slide 12 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB1: Slide 12 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB1: Slide 12 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							  
							  (USER["LB1: Slide 13 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB1: Slide 13 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB1: Slide 13 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB1: Slide 13 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB1: Slide 13 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							  
							  (USER["LB1: Slide 14 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB1: Slide 14 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB1: Slide 14 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB1: Slide 14 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB1: Slide 14 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							  
							  (USER["LB1: Slide 15 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB1: Slide 15 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB1: Slide 15 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB1: Slide 15 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB1: Slide 15 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +

							'</div>\
							   <div class="swiper-pagination"></div>\
								<div class="swiper-scrollbar"></div>\
						 </div>';
							
						$('[data-template*=custom]').html(lookbookPageHTML).removeClass('pt-4 px-4');					
				}
				
				// Lookbook #2
				if (window.location.href == USER["LB2: Page URL"] || location.pathname == USER["LB2: Page URL"] && USER["LB2: Page URL"] != ''){
									
					var lookbookPageHTML = 
						'<div class="lookbook-slider" data-slider="pg2">\
							 <div class="swiper-wrapper">' + 
							 (USER["LB2: Image URL"].replace(imgA, imgB) ?
								'<div id="cover-slide" class="swiper-slide" style="background-image:url(' + USER["LB2: Image URL"].replace(imgA, imgB) + ')">\
									<div class="cover-text text-center">' +
										(USER["LB2: Eyebrow Heading"] ? '<p class="h3">' + USER["LB2: Eyebrow Heading"] + '</p>' : '') +
										(USER["LB2: Title"] ? '<h1 class="display-1 mb-4">' + USER["LB2: Title"] + '</h1>' : '') +
										(USER["LB2: Sub Heading"] ? '<h2>' + USER["LB2: Sub Heading"] + '</h2>' : '') +
									'</div>\
									<img src="' + USER["LB2: Image URL"].replace(imgA, imgB) + '">\
								</div>' : '') + 
								
							 (USER["LB2: Slide 1 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB2: Slide 1 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB2: Slide 1 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB2: Slide 1 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB2: Slide 1 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							  
							  (USER["LB2: Slide 2 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB2: Slide 2 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB2: Slide 2 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB2: Slide 2 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB2: Slide 2 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							  
							  (USER["LB2: Slide 3 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB2: Slide 3 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB2: Slide 3 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB2: Slide 3 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB2: Slide 3 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +					  
							  
							  (USER["LB2: Slide 4 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB2: Slide 4 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB2: Slide 4 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB2: Slide 4 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB2: Slide 4 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							  
							  (USER["LB2: Slide 5 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB2: Slide 5 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB2: Slide 5 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB2: Slide 5 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB2: Slide 5 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							  
							  (USER["LB2: Slide 6 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB2: Slide 6 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB2: Slide 6 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB2: Slide 6 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB2: Slide 6 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							  
							  (USER["LB2: Slide 7 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB2: Slide 1 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB2: Slide 7 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB2: Slide 7 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB2: Slide 7 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							  
							  (USER["LB2: Slide 8 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB2: Slide 8 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB2: Slide 8 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB2: Slide 8 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB2: Slide 8 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							  
							  (USER["LB2: Slide 9 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB2: Slide 9 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB2: Slide 9 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB2: Slide 9 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB2: Slide 9 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							  
							  (USER["LB2: Slide 10 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB2: Slide 10 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB2: Slide 10 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB2: Slide 10 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB2: Slide 10 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +					  
							  
							  (USER["LB2: Slide 11 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB2: Slide 11 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB2: Slide 11 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB2: Slide 11 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB2: Slide 11 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							  
							  (USER["LB2: Slide 12 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB2: Slide 12 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB2: Slide 12 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB2: Slide 12 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB2: Slide 12 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							  
							  (USER["LB2: Slide 13 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB2: Slide 13 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB2: Slide 13 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB2: Slide 13 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB2: Slide 13 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							  
							  (USER["LB2: Slide 14 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB2: Slide 14 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB2: Slide 14 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB2: Slide 14 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB2: Slide 14 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							  
							  (USER["LB2: Slide 15 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB2: Slide 15 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB2: Slide 15 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB2: Slide 15 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB2: Slide 15 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							'</div>\
							   <div class="swiper-pagination"></div>\
								<div class="swiper-scrollbar"></div>\
						 </div>';
							
						$('[data-template*=custom]').html(lookbookPageHTML).removeClass('pt-4 px-4');					
				}
				
				
				
				
				// Lookbook #3
				if (window.location.href == USER["LB3: Page URL"] || location.pathname == USER["LB3: Page URL"] && USER["LB3: Page URL"] != ''){
									
					var lookbookPageHTML = 
						'<div class="lookbook-slider" data-slider="pg2">\
							 <div class="swiper-wrapper">' + 
							 (USER["LB3: Image URL"].replace(imgA, imgB) ?
								'<div id="cover-slide" class="swiper-slide" style="background-image:url(' + USER["LB3: Image URL"].replace(imgA, imgB) + ')">\
									<div class="cover-text text-center">' +
										(USER["LB3: Eyebrow Heading"] ? '<p class="h3">' + USER["LB3: Eyebrow Heading"] + '</p>' : '') +
										(USER["LB3: Title"] ? '<h1 class="display-1 mb-4">' + USER["LB3: Title"] + '</h1>' : '') +
										(USER["LB3: Sub Heading"] ? '<h2>' + USER["LB3: Sub Heading"] + '</h2>' : '') +
									'</div>\
									<img src="' + USER["LB3: Image URL"].replace(imgA, imgB) + '">\
								</div>' : '') + 
								
							 (USER["LB3: Slide 1 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB3: Slide 1 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB3: Slide 1 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB3: Slide 1 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB3: Slide 1 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							  
							  (USER["LB3: Slide 2 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB3: Slide 2 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB3: Slide 2 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB3: Slide 2 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB3: Slide 2 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							  
							  (USER["LB3: Slide 3 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB3: Slide 3 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB3: Slide 3 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB3: Slide 3 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB3: Slide 3 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +					  
							  
							  (USER["LB3: Slide 4 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB3: Slide 4 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB3: Slide 4 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB3: Slide 4 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB3: Slide 4 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							  
							  (USER["LB3: Slide 5 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB3: Slide 5 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB3: Slide 5 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB3: Slide 5 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB3: Slide 5 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							  
							  (USER["LB3: Slide 6 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB3: Slide 6 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB3: Slide 6 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB3: Slide 6 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB3: Slide 6 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							  
							  (USER["LB3: Slide 7 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB3: Slide 1 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB3: Slide 7 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB3: Slide 7 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB3: Slide 7 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							  
							  (USER["LB3: Slide 8 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB3: Slide 8 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB3: Slide 8 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB3: Slide 8 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB3: Slide 8 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							  
							  (USER["LB3: Slide 9 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB3: Slide 9 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB3: Slide 9 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB3: Slide 9 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB3: Slide 9 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							  
							  (USER["LB3: Slide 10 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB3: Slide 10 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB3: Slide 10 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB3: Slide 10 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB3: Slide 10 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +					  
							  
							  (USER["LB3: Slide 11 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB3: Slide 11 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB3: Slide 11 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB3: Slide 11 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB3: Slide 11 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							  
							  (USER["LB3: Slide 12 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB3: Slide 12 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB3: Slide 12 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB3: Slide 12 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB3: Slide 12 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							  
							  (USER["LB3: Slide 13 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB3: Slide 13 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB3: Slide 13 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB3: Slide 13 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB3: Slide 13 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							  
							  (USER["LB3: Slide 14 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB3: Slide 14 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB3: Slide 14 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB3: Slide 14 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB3: Slide 14 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							  
							  (USER["LB3: Slide 15 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB3: Slide 15 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB3: Slide 15 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB3: Slide 15 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB3: Slide 15 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							'</div>\
							   <div class="swiper-pagination"></div>\
								<div class="swiper-scrollbar"></div>\
						 </div>';
							
						$('[data-template*=custom]').html(lookbookPageHTML).removeClass('pt-4 px-4');					
				}
				
				
				// Lookbook #4
				if (window.location.href == USER["LB4: Page URL"] || location.pathname == USER["LB4: Page URL"] && USER["LB4: Page URL"] != ''){
									
					var lookbookPageHTML = 
						'<div class="lookbook-slider" data-slider="pg2">\
							 <div class="swiper-wrapper">' + 
							 (USER["LB4: Image URL"].replace(imgA, imgB) ?
								'<div id="cover-slide" class="swiper-slide" style="background-image:url(' + USER["LB4: Image URL"].replace(imgA, imgB) + ')">\
									<div class="cover-text text-center">' +
										(USER["LB4: Eyebrow Heading"] ? '<p class="h3">' + USER["LB4: Eyebrow Heading"] + '</p>' : '') +
										(USER["LB4: Title"] ? '<h1 class="display-1 mb-4">' + USER["LB4: Title"] + '</h1>' : '') +
										(USER["LB4: Sub Heading"] ? '<h2>' + USER["LB4: Sub Heading"] + '</h2>' : '') +
									'</div>\
									<img src="' + USER["LB4: Image URL"].replace(imgA, imgB) + '">\
								</div>' : '') + 
								
							 (USER["LB4: Slide 1 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB4: Slide 1 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB4: Slide 1 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB4: Slide 1 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB4: Slide 1 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							  
							  (USER["LB4: Slide 2 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB4: Slide 2 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB4: Slide 2 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB4: Slide 2 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB4: Slide 2 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							  
							  (USER["LB4: Slide 3 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB4: Slide 3 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB4: Slide 3 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB4: Slide 3 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB4: Slide 3 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +					  
							  
							  (USER["LB4: Slide 4 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB4: Slide 4 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB4: Slide 4 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB4: Slide 4 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB4: Slide 4 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							  
							  (USER["LB4: Slide 5 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB4: Slide 5 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB4: Slide 5 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB4: Slide 5 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB4: Slide 5 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							  
							  (USER["LB4: Slide 6 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB4: Slide 6 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB4: Slide 6 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB4: Slide 6 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB4: Slide 6 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							  
							  (USER["LB4: Slide 7 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB4: Slide 1 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB4: Slide 7 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB4: Slide 7 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB4: Slide 7 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							  
							  (USER["LB4: Slide 8 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB4: Slide 8 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB4: Slide 8 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB4: Slide 8 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB4: Slide 8 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							  
							  (USER["LB4: Slide 9 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB4: Slide 9 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB4: Slide 9 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB4: Slide 9 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB4: Slide 9 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							  
							  (USER["LB4: Slide 10 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB4: Slide 10 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB4: Slide 10 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB4: Slide 10 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB4: Slide 10 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +					  
							  
							  (USER["LB4: Slide 11 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB4: Slide 11 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB4: Slide 11 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB4: Slide 11 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB4: Slide 11 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							  
							  (USER["LB4: Slide 12 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB4: Slide 12 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB4: Slide 12 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB4: Slide 12 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB4: Slide 12 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							  
							  (USER["LB4: Slide 13 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB4: Slide 13 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB4: Slide 13 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB4: Slide 13 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB4: Slide 13 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							  
							  (USER["LB4: Slide 14 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB4: Slide 14 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB4: Slide 14 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB4: Slide 14 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB4: Slide 14 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							  
							  (USER["LB4: Slide 15 Image URL"].replace(imgA, imgB) ?
								'<div class="lb-slide swiper-slide" style="background-image:url(' + USER["LB4: Slide 15 Image URL"].replace(imgA, imgB) + ')">' +
								(USER["LB4: Slide 15 Caption"] ? '<div class="lb-caption d-inline-block p-2 h5">' + USER["LB4: Slide 15 Caption"].replace(/(?:\r\n|\r|\n)/g, '<br>') + '</div>' : '') +
								'<img src="' + USER["LB4: Slide 15 Image URL"].replace(imgA, imgB) + '">\
							  </div>' : '') +
							'</div>\
							   <div class="swiper-pagination"></div>\
								<div class="swiper-scrollbar"></div>\
						 </div>';
							
						$('[data-template*=custom]').html(lookbookPageHTML).removeClass('pt-4 px-4');					
				}
				
				
				
				
					if (window.location.href.indexOf(USER["LB1: Page URL"]) > -1){
						var lookbookSwiper = new Swiper ('.lookbook-slider[data-slider="pg1"]', {
							direction: 'vertical',
							loop: true,
							autoHeight: true,
							grabCursor: true,
							 mousewheel: {
								invert: false,
							  },
							pagination: {
							  el: '.swiper-pagination',
							},
						  });
					}
				
				
					if (window.location.href.indexOf(USER["LB2: Page URL"]) > -1 && USER["LB2: Page URL"] != '' || USER["LB2: Page URL"] != null){
						var lookbookSwiper = new Swiper ('.lookbook-slider[data-slider="pg2"]', {
							direction: 'vertical',
							loop: true,
							autoHeight: true,
							grabCursor: true,
							 mousewheel: {
								invert: false,
							  },
							pagination: {
							  el: '.swiper-pagination',
							},
						  });
					}
				
				
					if (window.location.href.indexOf(USER["LB3: Page URL"]) > -1 && USER["LB3: Page URL"] != '' || USER["LB3: Page URL"] != null){
						var lookbookSwiper = new Swiper ('.lookbook-slider[data-slider="pg3"]', {
							direction: 'vertical',						
							loop: true,
							autoHeight: true,
							grabCursor: true,
							 mousewheel: {
								invert: false,
							  },
							pagination: {
							  el: '.swiper-pagination',
							},
						  });
					}
				

				if (USER["LB4: Page URL"]) {
					if (window.location.href.indexOf(USER["LB4: Page URL"]) > -1 && USER["LB4: Page URL"] != '' || USER["LB4: Page URL"] != null){
						var lookbookSwiper = new Swiper ('.lookbook-slider[data-slider="pg4"]', {
							direction: 'vertical',
							loop: true,
							autoHeight: true,
							grabCursor: true,
							 mousewheel: {
								invert: false,
							  },
							pagination: {
							  el: '.swiper-pagination',
							},
						  });
					}	  
				}
			
			}
			
		}); // End USER License Lookup
		

		  	
		
		}
	});// End Configuration Lookup

	
					

});
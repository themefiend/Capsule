
	
	// Template: Home
		
	homePage = function() {
		
		// IG Feed 
		
		var igFeedHeading = (USER("Instagram Section Heading") ? USER("Instagram Section Heading") :  '@Capsule');
		// var igFeedName = (USER("Instagram Feed Name") ? USER("Instagram Feed Name") : 'streetwearxs');
		var igFeedEmebedCode = (USER("Instagram Feed Embed Code") ? USER("Instagram Feed Embed Code") : '<!-- SnapWidget --><iframe src="https://snapwidget.com/embed/592774" class="snapwidget-widget" allowtransparency="true" frameborder="0" scrolling="no" style="border:none; overflow:hidden; width:640px; height:160px"></iframe>');
		
		var igFeed = '<div class="instagram-feed px-3 mb-3">\
						<div class="section-title"><div class="container"><h4 class="h1 mb-5">' + igFeedHeading + '</h4></div></div>\
						<div class="mt-3">' + igFeedEmebedCode + '</div>\
					</div>';
					
					
		// Hero Text
		
		var heroImage1 = {
		   img: USER("Hero Image 1 Image URL").replace(imgA, imgB),
		   heading: USER("Hero Image 1 Heading Text") != null ? USER("Hero Image 1 Heading Text") : '',
		   subheading: USER("Hero Image 1 Sub Heading Text") != null ? USER("Hero Image 1 Sub Heading Text") : '',
		   button: USER("Hero Image 1 Button Text") != null ? USER("Hero Image 1 Button Text") : '',
		   link: USER("Hero Image 1 Link URL") != null ? USER("Hero Image 1 Link URL") : '',
		};
		
		
		var heroImage2 = {
		   img: USER("Hero Image 2 Image URL").replace(imgA, imgB),
		   heading: USER("Hero Image 2 Heading Text") != null ? USER("Hero Image 2 Heading Text") : '',
		   subheading: USER("Hero Image 2 Sub Heading Text") != null ? USER("Hero Image 2 Sub Heading Text") : '',
		   button: USER("Hero Image 2 Button Text") != null ? USER("Hero Image 2 Button Text") : '',
		   link: USER("Hero Image 2 Link URL") != null ? USER("Hero Image 2 Link URL") : '',
		};
		
		var heroImage3 = {
		   img: USER("Hero Image 3 Image URL").replace(imgA, imgB),
		   heading: USER("Hero Image 3 Heading Text") != null ? USER("Hero Image 3 Heading Text") : '',
		   subheading: USER("Hero Image 3 Sub Heading Text") != null ? USER("Hero Image 3 Sub Heading Text") : '',
		   button: USER("Hero Image 3 Button Text") != null ? USER("Hero Image 3 Button Text") : '',
		   link: USER("Hero Image 3 Link URL") != null ? USER("Hero Image 3 Link URL") : '',
		};
	
		// Hero: Grid
		
		var heroGridBegin = '<div id="hero-section" class="row no-gutters" data-hero-type="grid">';
			
			var heroGridItem1 = '<li class="col-md-12 col-xs-12" style="background-image:url(' + heroImage1.img + ')">\
									<a href="' + heroImage1.link + '"></a>\
									<div data-hero-text-position="' + USER("Hero Image 1 Text Alignment").toLowerCase() + '" class="hero-text">' +
										(heroImage1.heading ? '<h2 class="display-4">' + heroImage1.heading + '</h2>' : '') +
										(heroImage1.subheading ? '<p class="mt-2 lead">' + heroImage1.subheading + '</p>' : '') +
										(heroImage1.button ? '<button class="btn primary-btn btn-lg rounded-0">' + heroImage1.button + '</button>' : '') +
									'</div>\
								</li>';
			
			var heroGridItem2 = '<li class="col-md-12 col-xs-12" style="background-image:url(' + heroImage2.img + ')">\
									<a href="' + heroImage2.link + '"></a>\
									<div data-hero-text-position="' + USER("Hero Image 2 Text Alignment").toLowerCase() + '"class="hero-text">' +
										(heroImage2.heading ? '<h3 class="h1">' + heroImage2.heading + '</h2>' : '') +
										(heroImage2.subheading ? '<p class="mt-2 lead">' + heroImage2.subheading + '</p>' : '') +
										(heroImage2.button ? '<button class="btn primary-btn btn-lg rounded-0">' + heroImage2.button + '</button>' : '') +
									'</div>\
								</li>';
			
			var heroGridItem3 = '<li class="col-md-12 col-xs-12" style="background-image:url(' + heroImage3.img + ')">\
									<a href="' + heroImage3.link + '"></a>\
									<div data-hero-text-position="' + USER("Hero Image 3 Text Alignment").toLowerCase() + '"class="hero-text">' +
										(heroImage3.heading ? '<h3 class="h1">' + heroImage3.heading + '</h2>' : '') +
										(heroImage3.subheading ? '<p class="mt-2 lead">' + heroImage3.subheading + '</p>' : '') +
										(heroImage3.button ? '<button class="btn primary-btn btn-lg rounded-0">' + heroImage3.button + '</button>' : '') +
									'</div>\
								</li>';
			
		var heroGridEnd = '</div>';
		
		var heroGrid = 
			heroGridBegin +
				'<div class="left-grid-items col-md-6 col-sm-12 col-xs-12">' + 
					(heroImage1.img.indexOf('.') > -1 ? heroGridItem1 : '') +
				'</div>' +
				'<div class="right-grid-items col-md-6 col-sm-12 col-xs-12">' + 
					(heroImage2.img.indexOf('.') > -1 ? heroGridItem2 : '') +
					(heroImage3.img.indexOf('.') > -1 ? heroGridItem3 : '') +
				'</div>' +
			heroGridEnd;
			
			
	//  Hero: Slider
	
		
		var heroSliderBegin = '<div id="hero-section" class="row no-gutters" data-hero-type="slider">';
	
			var heroSlide1 = '<div id="hs-slide-1" class="hs-slide" style="background-image:url(' + heroImage1.img + ')">\
									<a href="' + heroImage1.link + '"></a>\
									<img src="' + heroImage1 + '">\
									<div data-hero-text-position="' + USER("Hero Image 1 Text Alignment").toLowerCase() + '"class="hero-text">' + 
										(heroImage1.heading ? '<h2 class="h1 display-4 mb-3">' + heroImage1.heading + '</h2>' : '') +
										(heroImage1.subheading ? '<p class="h4 font-weight-light text-capitalize mb-4">' + heroImage1.subheading + '</p>' : '') +
										(heroImage1.button ? '<button class="btn rounded-0 primary-btn btn-lg">' + heroImage1.button + '</button>' : '') +
									'</div>\
								</div>';
			
				var heroSlide2 = '<div id="hs-slide-2" class="hs-slide" style="background-image:url(' + heroImage2.img + ')">\
									<a href="' + heroImage2.link + '"></a>\
									<img src="' + heroImage2 + '">\
									<div data-hero-text-position="' + USER("Hero Image 2 Text Alignment").toLowerCase() + '"class="hero-text">' + 
										(heroImage2.heading ? '<h2 class="h1 display-4 mb-3">' + heroImage2.heading + '</h2>' : '') +
										(heroImage2.subheading ? '<p class="h4 font-weight-light text-capitalize mb-4">' + heroImage2.subheading + '</p>' : '') +
										(heroImage2.button ? '<button class="btn rounded-0 primary-btn btn-lg">' + heroImage2.button + '</button>' : '') +
									'</div>\
								</div>';
			
				var heroSlide3 = '<div id="hs-slide-3" class="hs-slide" style="background-image:url(' + heroImage3.img + ')">\
									<a href="' + heroImage3.link + '"></a>\
									<img src="' + heroImage3 + '">\
									<div data-hero-text-position="' + USER("Hero Image 3 Text Alignment").toLowerCase() + '"class="hero-text">' + 
										(heroImage3.heading ? '<h2 class="h1 display-4 mb-3">' + heroImage3.heading + '</h2>' : '') +
										(heroImage3.subheading ? '<p class="h4 font-weight-light text-capitalize mb-4">' + heroImage3.subheading + '</p>' : '') +
										(heroImage3.button ? '<button class="btn rounded-0 primary-btn btn-lg">' + heroImage3.button + '</button>' : '') +
									'</div>\
								</div>';
			
		var heroSliderEnd = '</div>';
		
		var heroSlider = 
			heroSliderBegin +
					(heroImage1.img.indexOf('.') > -1 ? heroSlide1 : '') +
					(heroImage2.img.indexOf('.') > -1 ? heroSlide2 : '') +
					(heroImage3.img.indexOf('.') > -1 ? heroSlide3 : '') +
			heroSliderEnd;
			
			
			
			
	// Content Blocks
	
		var contentBlockImage1 = USER("Media Card 1 Image").replace(imgA, imgB) || '';
		var contentBlockImage2 = USER("Media Card 2 Image").replace(imgA, imgB) || '';
		var contentBlockImage3 = USER("Media Card 3 Image").replace(imgA, imgB) || '';	
		
		var contentBlockVideo1 = USER("Media Card 1 Video") || '';
		var contentBlockVideo2 = USER("Media Card 2 Video") || '';
		var contentBlockVideo3 = USER("Media Card 3 Video") || '';
		
		var cb1, cb2, cb3;
		
		cb1 = {
		  textPos: USER("Media Card 1 Text Position")
		}
		
		cb2 = {
		  textPos: USER("Media Card 2 Text Position")
		}
		
		cb3 = {
		  textPos: USER("Media Card 3 Text Position")
		}
		
		var mediaCard;
		  if (USER("Media Card Style").indexOf("2") > -1){mediaCard = {colCount: 2, col: 'col-sm-6', textCol: 'col-sm-12', imgCol: 'col-sm-12'}}
		  else if (USER("Media Card Style").indexOf("3") > -1){mediaCard = {colCount: 3, col: 'col-sm-4', textCol: 'col-sm-12', imgCol: 'col-sm-12'}}
		  else {mediaCard = {colCount: 1, col: 'col-sm-12', textCol: 'col-sm-4', imgCol: 'col-sm-8'}}
		
		if (USER("Media Card 1 Type") == 'Video') {
			var cbImgHolder1 = '<div class="cb-image cb-image--video ' + mediaCard.imgCol + '">\
									<div class="embed-responsive embed-responsive-16by9">\
									  <iframe class="embed-responsive-item" src="' + contentBlockVideo1.replace("/watch?v=", "/embed/") + '" allowfullscreen></iframe>\
									</div>\
								</div>';
		} else {
			var cbImgHolder1 = '<div class="cb-image ' + mediaCard.imgCol + '" style="background-image:url(' + contentBlockImage1 + ')"><a href="' + USER("Media Card 1 Link URL") + '"></a></div>';
			
		}
		
		
		if (USER("Media Card 2 Type") == 'Video') {
			var cbImgHolder2 = '<div class="cb-image cb-image--video ' + mediaCard.imgCol + '">\
									<div class="embed-responsive embed-responsive-16by9">\
									  <iframe class="embed-responsive-item" src="' + contentBlockVideo2.replace("/watch?v=", "/embed/") + '" allowfullscreen></iframe>\
									</div>\
								</div>';
		} else {
			var cbImgHolder2 = '<div class="cb-image ' + mediaCard.imgCol + '" style="background-image:url(' + contentBlockImage2 + ')"><a href="' + USER("Media Card 2 Link URL") + '"></a></div>';
		}
		
		
		if (USER("Media Card 3 Type") == 'Video') {
			var cbImgHolder3 = '<div class="cb-image cb-image--video ' + mediaCard.imgCol + '">\
									<div class="embed-responsive embed-responsive-16by9">\
									  <iframe class="embed-responsive-item" src="' + contentBlockVideo3.replace("/watch?v=", "/embed/") + '" allowfullscreen></iframe>\
									</div>\
								</div>';
		} else {
			var cbImgHolder3 = '<div class="cb-image ' + mediaCard.imgCol + '" style="background-image:url(' + contentBlockImage3 + ')"><a href="' + USER("Media Card 3 Link URL") + '"></a></div>';
		}
		
		
		var cbTextHolder1 = '<div class="cb-text ' + mediaCard.textCol + '">\
										<div class="cb-text-inner ' + (cb1 == "Overlay" ? '' : ' pt-3 ') + (mediaCard.colCount == 1 ? ' px-4' : ' px-0') + '">\
											<h3 class="h2">' + USER("Media Card 1 Heading Text") + '</h3>\
											<div class="cb-text-info my-4">' + USER("Media Card 1 Body Text") + '</div>\
											<a class="btn btn-lg rounded-0 primary-btn" href="' + USER("Media Card 1 Link URL") + '">' + USER("Media Card 1 Button Text") + '</a>\
										</div>\
									</div>';
									
		var cbTextHolder2 = '<div class="cb-text ' + mediaCard.textCol + '">\
										<div class="cb-text-inner ' + (cb2 == "Overlay" ? '' : ' pt-3 ') + (mediaCard.colCount == 1 ? ' px-4' : ' px-0') + '">\
											<h3 class="h2">' + USER("Media Card 2 Heading Text") + '</h3>\
											<div class="cb-text-info my-4">' + USER("Media Card 2 Body Text") + '</div>\
											<a class="btn btn-lg rounded-0 primary-btn" href="' + USER("Media Card 2 Link URL") + '">' + USER("Media Card 2 Button Text") + '</a>\
										</div>\
									</div>';
									
		var cbTextHolder3 = '<div class="cb-text ' + mediaCard.textCol + '">\
										<div class="cb-text-inner ' + (cb3 == "Overlay" ? '' : ' pt-3 ') + (mediaCard.colCount == 1 ? ' px-4' : ' px-0') + '">\
											<h3 class="h2">' + USER("Media Card 3 Heading Text") + '</h3>\
											<div class="cb-text-info my-4">' + USER("Media Card 3 Body Text") + '</div>\
											<a class="btn btn-lg rounded-0 primary-btn" href="' + USER("Media Card 3 Link URL") + '">' + USER("Media Card 3 Button Text") + '</a>\
										</div>\
									</div>';
	
	
		var contentBlockBegin = '<div id="content-blocks-section" data-media-card-style="' + USER("Media Card Style") + '" data-cb-columns="' + mediaCard.colCount + '" class="row ' + (mediaCard.colCount == 1 ? 'no-gutters' : ' ') + ' row py-3 px-4 m-0">';
		
		
			
			var contentBlock1 = '<div class="content-block row no-gutters ' + (mediaCard.colCount == 1 ? ' d-flex ' : ' d-block ') + mediaCard.col + ' col-12 mb-4 mx-auto">' + cbImgHolder1 + cbTextHolder1 + '</div>';
			var contentBlock2 = '<div class="content-block row no-gutters flex-sm-row-reverse' + (mediaCard.colCount == 1 ? ' d-flex ' : ' d-block ') + mediaCard.col + ' col-12 mb-4 mx-auto">' + cbImgHolder2 + cbTextHolder2 + '</div>';
			var contentBlock3 = '<div class="content-block row no-gutters ' + (mediaCard.colCount == 1 ? ' d-flex ' : ' d-block ') + mediaCard.col + ' col-12 mb-4 mx-auto">' + cbImgHolder3 + cbTextHolder3 + '</div>';
			
		var contentBlockEnd = '</div>';
		
		var contentBlocks = 
			contentBlockBegin +
					(contentBlockImage1.indexOf('.') > -1 || contentBlockVideo1.indexOf('.') > -1 ? contentBlock1 : '') +
					(contentBlockImage2.indexOf('.') > -1 || contentBlockVideo2.indexOf('.') > -1 ? contentBlock2 : '') +
				  (contentBlockImage3.indexOf('.') > -1 || contentBlockVideo3.indexOf('.') > -1 ? contentBlock3 : '') +
			contentBlockEnd;
	
			
	// Newsletter
			
		var newsletterBlock = '<div class="newsletter-block p-5 mb-5">\
								<div class="container">\
									<div class="row no-gutters text-center">\
										<div class="col-sm-12 mb-2">\
											<h4 class="h1 ">' + mailchimpHeading + '</h4>\
											<p class="h5 my-4 font-weight-normal">' + mailchimpInfo + '</p>\
										</div>\
									</div>\
									<div class="form-group row no-gutters">\
										<form target="_blank" name="mc-embedded-subscribe-form" method="post" id="mc-embedded-subscribe-form"  class="validate col-sm-12 row no-gutters" novalidate action="' + mailchimpURL + '">\
											<div class="col-sm-10">\
												<input id="mce-EMAIL"  name="EMAIL" type="email" class="email form-control form-control-lg rounded-0" placeholder="Enter your email address">\
												<input type="hidden" id="mce-FNAME">\
												<input type="hidden" id="mce-LNAME">\
											</div>\
											 <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\
											<div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name=""b_27b7d5cbfb45164d58769c000_a2cb5cedb8" tabindex="-1" value=""></div>\
											<div class="col-sm-2">\
												<input value="Sign Up" type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" name="subscribe" type="button" class="rounded-0 btn btn-lg btn-dark col-sm-12"/>\
											</div>\
										</form>\
									</div>\
								</div>\
							</div>';
	
		var homeHTML = 
			(USER("Home Page Hero Style").indexOf('Grid') > -1 ? heroGrid : '') +
			(USER("Home Page Hero Style").indexOf('Full') > -1 ? heroSlider : '') +
			(contentBlockImage1 || contentBlockVideo1 ? contentBlocks : '') +
			prodGrid +
			newsletterBlock +
			(igFeedEmebedCode ? igFeed : '');
		
			document.querySelector('body').innerHTML += 
				loader +
				storeHeader + 
				'<div data-template="home">' + 
					homeHTML + 
				'</div>' + 
				storeFooter;
			
		
	};

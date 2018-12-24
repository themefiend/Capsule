// CAPSULE THEME TEMPLATE


 // logo img compressor variables
  var logoA = '/upload/';
  var logoB = '/upload/c_limit,q_auto:eco,w_300,h_100/';
  
  // img compressor variables
  var imgA = '/upload/';
  var imgB = '/upload/c_limit,q_auto:eco,w_2000/';
  
  // loader
  var loader = '<div class="loading_wrap"><div class="spinner"></div></div>';
 
 // Pass variables of current page type (to indicate which page template is being previewed)
 var environment = environment; 
 var licenseKey = licenseKey; 
 
 var pageTitle = pageTitle || '';
 
 function loadjscssfile(filename, filetype){
	    if (filetype=="js"){ //if filename is a external JavaScript file
	        var fileref=document.createElement('script')
	        fileref.setAttribute("type","text/javascript")
	        fileref.setAttribute("src", filename)
	    }
	    else if (filetype=="css"){ //if filename is an external CSS file
	        var fileref=document.createElement("link")
	        fileref.setAttribute("rel", "stylesheet")
	        fileref.setAttribute("type", "text/css")
	        fileref.setAttribute("href", filename)
	    }
	    if (typeof fileref!="undefined")
	        document.getElementsByTagName("head")[0].appendChild(fileref)
  }
 

  var config = {
    apiKey: "AIzaSyC-FgFJGFfqOAUQm7V2VAiLAXK8ygmY8KA",
    authDomain: "capsule-theme-bigcartel.firebaseapp.com",
    databaseURL: "https://capsule-theme-bigcartel.firebaseio.com",
    projectId: "capsule-theme-bigcartel",
    storageBucket: "capsule-theme-bigcartel.appspot.com",
    messagingSenderId: "110118486824"
  };
  firebase.initializeApp(config);
  
  // Load Theme Controls 
  

  loadjscssfile('https://s3.amazonaws.com/themefiend/capsule-theme/_version/v1/' + (typeof environment != 'undefined' ? environment : 'staging/') + 'admin/theme-controls.js', 'js');
  
  // Loading Presets
  
    var presets = {};
    
    presets._userInfo = {};
    
    
    
        presets = {
      _userInfo: {
        "License Key": licenseKey,
        "Store Name": storeName,
        "Registration Date": "",
        "Contact Address" : "123 Theme Street #3\nAnytown, NJ 12345\nUnited States",
		"Contact Email" : "email@example.com",
		"Contact Intro Text" : "For questions, comments or concerns, contact us using the form. ",
		"Contact Page" : "",
		"Contact Phone Number" : "555-555-5555",
		"Contact Success Heading" : "Message Received",
		"Contact Success Message" : "We'll be in touch with you shortly!",
      },
      "ruby": {},
      "fab": {},
      "street": {},
      "legend": {}
    };
    

    function _preset(name) {
      loadjscssfile('https://s3.amazonaws.com/themefiend/capsule-theme/_version/v1/' + (typeof environment != 'undefined' ? environment : 'staging/') + 'theme-presets/' + name + '/default-settings.js', 'js');
    }
    
    // Available Theme Presets
      _preset("ruby");
      _preset("fab");
      _preset("street");
      _preset("legend");
      
      console.log(presets);
  

if (typeof trialID != "undefined") {
	
  var currDate = new Date();
	var currentDate = currDate.toLocaleString();
			
	firebase.database().ref().orderByChild('License Key').equalTo(licenseKey).once("value", function(snapshot) {
		
		var newUserID = storeURL.replace('.bigcartel.com', '').replace('http://','').replace('https://','').replace(/\./g,'-').replace('www', '');
		

		 var loadTheme = snapshot.forEach(function(data) {
			
			$.getScript("https://s3.amazonaws.com/themefiend/js/mousewheel.js");
			$.getScript("https://s3.amazonaws.com/themefiend/js/flexslider/jquery.flexslider-min.js");
			
			var userLicenseKey = licenseKey;
			console.log(userLicenseKey + ' is the users license key!');
			
			 var userData = snapshot.child(data.key);
	         var USER = function (KEY) {
	         		return userData.child(KEY).val() || '';
	         }
	         
	         
	       if (window.location.href.indexOf('about:blank') > -1 && USER("Big Cartel Domain") == null || 
	    	   window.location.href.indexOf('https://secure.bigcartel.com/admin') > -1 && USER("Big Cartel Domain") == null || 
	    	   window.location.href.indexOf('about:blank') > -1 && USER("Big Cartel Domain") == "" || 
	    	   window.location.href.indexOf('https://secure.bigcartel.com/admin') > -1 && USER("Big Cartel Domain") == "" || 
	    	   window.location.href.indexOf('about:blank') > -1 && typeof USER("Big Cartel Domain") == "undefined" ||
	    	   window.location.href.indexOf('https://secure.bigcartel.com/admin') > -1 && typeof USER("Big Cartel Domain") == "undefined") {
	         
	          
	         
	          firebase.database().ref('/' + data.key).update({"Big Cartel Domain": storeURL}).then(function(){
					setTimeout(function() {
				      window.top.onbeforeunload = null;
	  			    	window.top.location.reload();
				   }, 500);
				});
  	         
        			   
	       } else {
			
					function capsuleTheme() {
					
						if (window.location.href.indexOf('about:blank') == -1 ||  window.location.href.indexOf('https://secure.bigcartel.com/admin') > -1) {
							var adminPanel = $('#TFConfigPanel');
							adminPanel.hide();
							adminPanel.remove();
						}
						
						
						// Preview Configuration Bar
						
						if (window.location.href.indexOf('about:blank') > -1 || window.location.href.indexOf('https://secure.bigcartel.com/admin') > -1) {
								
							document.querySelector("body").innerHTML += '<div class="mode-toggle">\
							      <button type="button" class="preview-mode btn"><i class="material-icons">remove_red_eye</i> View Changes</button>\
							      <button type="button" class="customize-mode customize-mode--bouncy btn"><i class="material-icons">build</i> Customize Theme</button>\
							      <button type="button" title="View live store" class="btn rounded-circle live-store"><i class="material-icons" style="margin: 0">open_in_new</i></button>\
							</div>';
							
							  $(document).ready(function(){
							      $(".mode-toggle").animate({
                        bottom: "+=1019",
                    }, 1000);
							  });
							
						}
											
						var faviconImg = (USER("Favicon Image URL") ? USER("Favicon Image URL") : 'https://res.cloudinary.com/theme-fiend/image/upload/v1532797112/shop-favicon.png' );
						
						
						// Multiple Product Option Selection Variables
						var first_option_selection_type = USER("First Product Option Group Style");
						var first_option_group_name = USER("First Product Option Group Name");						
						var second_option_selection_type = USER("Second Product Option Group Style");
						var second_option_group_name = USER("Second Product Option Group Name");
						
						// *********Theme Apps / Add-Ons***********
						function availableApps(url) {
							var script = document.createElement("script");
							script.src = url;	
							document.head.appendChild(script);
						}
						
						
	
						availableApps('https://s3.amazonaws.com/themefiend/capsule-theme/_version/v1/' + (typeof environment != 'undefined'  ? environment : 'staging/') + 'theme-apps/apps_capsule-theme.js');
										
						
						document.head || (document.head = document.getElementsByTagName('head')[0]);
	
						function changeFavicon(src) {
							 var link = document.createElement('link'),
								 oldLink = document.getElementById('dynamic-favicon');
								 link.id = 'dynamic-favicon';
								 link.rel = 'shortcut icon';
								 link.href = src;
								 if (oldLink) {
								  document.head.removeChild(oldLink);
								 }
								 document.head.appendChild(link);				
						}
						
						changeFavicon(faviconImg);
						
	
					// Reusable Components
					
														
						// Default Language
						
						var featured_products_heading = (USER("'Featured Products' Text") ? USER("'Featured Products' Text") : 'New Products');
	
						// Mailchimp info
						
						var mailchimpURL = (USER("MailChimp Form Action URL") ? USER("MailChimp Form Action URL") : 'https://themefiend.us2.list-manage.com/subscribe/post?u=27b7d5cbfb45164d58769c000&amp;id=a2cb5cedb8');
						var mailchimpHeading = (USER("Mailing List Sign Up Heading") ? USER("Mailing List Sign Up Heading") : 'Sign Up for Updates');
						var mailchimpInfo = (USER("Mailing List Sign Up Info") ? USER("Mailing List Sign Up Info") : '');
					
						// Default styles
						var background_color = (USER("Body Background Color") ? USER("Body Background Color") : '#FFF');
						var body_text_color = (USER("Body Text Color") ? USER("Body Text Color") : '#000');
						var headings_text_color = (USER("Headings Text Color") ? USER("Headings Text Color") : '#000');
							
						var header_color = (USER("Header Background Color") ? USER("Header Background Color") : '#FFF');
						var top_header_color = (USER("Top Header Bar Background Color") ? USER("Top Header Bar Background Color") : '#000');
						var header_navigation_link_color = (USER("Header Navigation Link Color") ? USER("Header Navigation Link Color") : '#000');
						var header_navigation_link_hover_color = (USER("Header Navigation Link Hover Color") ? USER("Header Navigation Link Hover Color") : '#999');
						var top_header_navigation_color = (USER("Top Header Bar Link Color") ? USER("Top Header Bar Link Color") : '#fff');
						var accent_color = (USER("Accent Color") ? USER("Accent Color") : 'gold');
						
						var link_color = (USER("Inline Link Color") ? USER("Inline Link Color") : '#666');

						var primary_button_bg_color = (USER("Primary Button Background Color") ? USER("Primary Button Background Color") : '#111');
						var primary_button_tx_color = (USER("Primary Button Text Color") ? USER("Primary Button Text Color") : '#FFF');
						
						var secondary_button_bg_color = (USER("Secondary Button Background Color") ? USER("Secondary Button Background Color") : '#efefef');
						var secondary_button_tx_color = (USER("Secondary Button Text Color") ? USER("Secondary Button Text Color") : '#666');
						
						var hero_heading_tx_color = (USER("Hero Heading Color") ? USER("Hero Heading Color") : '#ffffff' );

						var footer_link_color = (USER("Footer Navigation Link Color") ? USER("Footer Navigation Link Color") : '#666');
						
						
						var navigation_font = (USER("Navigation Font Family") ? USER("Navigation Font Family") : 'Barlow');
						var headings_font = (USER("Headings Font Family") ? USER("Headings Font Family") : 'Barlow Semi Condensed');
						var body_font = (USER("Body Font Family") ? USER("Body Font Family") : 'Barlow');

					  // Font Size Settings
					  var body_font_size, headings_font_size, navigation_font_size, button_font_size;
					  
					  body_font_size = {
					    setting: (USER("Body Font Size") ? USER("Body Font Size") : 'Medium'),
					    small: 
					      'body {font-size: 14px}'
					    ,
					    medium: 
					      ''
					    ,
					    large: 
					      'body {font-size: 18px}'
					  };
					  
						headings_font_size = {
					    setting: (USER("Headings Font Size") ? USER("Headings Font Size") : 'Medium'),
					    small: 
					      'h1, .h1 {font-size: 2rem} h2, .h2 {font-size: 1.5rem} h3, .h3 {font-size: 1.25rem} h4, .h4 {font-size: 1rem} h5, .h5 {font-size: .75rem} h6, .h6 {font-size: .5rem}' +
					      '.hero-text h2 {font-size: 2.5rem}' +
					      '@media screen and (max-width: 767px) {\
					      }'
					    ,
					    medium: 
					      ''
					    ,
					    large: 
					      'h1, .h1 {font-size: 3rem} h2, .h2 {font-size: 2.5rem} h3, .h3 {font-size: 2.25rem} h4, .h4 {font-size: 2rem} h5, .h5 {font-size: 1.75rem} h6, .h6 {font-size: 1.5rem}' +
					      '.hero-text h2 {font-size: 7.5rem}' +
					      '@media screen and (max-width: 767px) {\
					      }'
					  };
					  
					  navigation_font_size = {
					    setting: (USER("Navigation Font Size") ? USER("Navigation Font Size") : 'Medium'),
					    small: 
					      'header nav .nav-link {font-size: .8rem} header .navbar .material-icons {font-size: 1rem; line-height: 1;}'
					    ,
					    medium: 
					      ''
					    ,
					    large: 
					      'header nav .nav-link {font-size: 1.3rem} header .navbar .material-icons {font-size: 1.5rem; line-height: 1;}'
					  };
					  
						button_font_size = {
					    setting: (USER("Button Font Size") ? USER("BUtton Font Size") : 'Medium'),
					    small: 
					      '.btn-lg {font-size: .75rem}'
					    ,
					    medium: 
					      ''
					    ,
					    large: 
					      '.btn-lg {font-size: 1.75rem}'
					  };
						
						// Preset Stylesheet Reference
						var themePreset;
						
						themePreset = {
						  handle: USER("Choose a Preset").toLowerCase() || 'street',
						};
						
						themePreset.styles = '<link data-stylesheet="preset-css" href="https://s3.amazonaws.com/themefiend/capsule-theme/_version/v1/' + (typeof environment != 'undefined' ? environment : 'staging/') + 'theme-presets/' + themePreset.handle + '/styles.css" rel="stylesheet">'

						// Function for translucent header background color (USER("Header Navigation Overlay")
						function hexToRGB(hex, alpha) {
						    var r = parseInt(hex.slice(1, 3), 16),
						        g = parseInt(hex.slice(3, 5), 16),
						        b = parseInt(hex.slice(5, 7), 16);
						
						    if (alpha) {
						        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
						    } else {
						        return "rgb(" + r + ", " + g + ", " + b + ")";
						    }
						}
						
						var header_color_translucent = hexToRGB(header_color, 0.75);
						
						// Stylesheet
						var stylesheet = 
						'<style data-stylesheet="custom-css" type="text/css">' +  
							'body:not(.bc-admin) {background-color:' + background_color + '; font-family: ' + body_font + '}' + 
							'.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {font-family: ' + headings_font + '; color: ' + headings_text_color + '}' +
							'.cb-text-inner h3 {color: ' + headings_text_color + '}' +
							'p, .cb-text-inner .cb-text-info, .product-title a, div, li {color: ' + body_text_color + '}' +
							'a.navbar-brand { font-family: ' + headings_font + '; color:' + header_navigation_link_color + '}' +
							'a {color:' + link_color + '}' +
							'a:hover, a:active, a:focus {text-decoration: none; opacity:.7; color: ' + link_color + '}' +
							'header nav, header .dropdown-menu {background-color:' + header_color + '}' + 
							'.top-header {background-color:' + top_header_color + '}' +
							'body.header-overlay--translucent header nav, body.header-overlay--translucent header .dropdown-menu {background-color:' + header_color_translucent + '}' + 
							'header nav .nav-link, header nav .btn-link, button.search-btn {color:' + header_navigation_link_color + '}' +
							'header nav .nav-link:hover, header nav .btn-link:hover, button.search-btn:hover {color:' + header_navigation_link_hover_color + '}' +
							'.top-header .nav-link, .top-header .btn-link, .top-header button.search-btn, .top-header_promo-text {color:' + top_header_navigation_color + '}' +
							'.top-header .nav-link:hover, .top-header .btn-link:hover, .top-header button.search-btn:hover {opacity:.7; color:' + top_header_navigation_color + '}' +
							'header nav .nav-link.active {border-bottom-color:' + accent_color + '}' +
							'body .swiper-pagination-bullet-active, div.product .badge {background: ' + accent_color + '}' +
							'.slick-dots li.slick-active {background-color: ' + accent_color + ' !important}' +
							'.dropdown-item.active, .dropdown-item:active {color: #fff; background-color: ' + accent_color + '}' +
							'.cb-text:before {background-color: ' + accent_color + '}' +
							'.btn-link {color:' + link_color + '}' +
							'.primary-btn {background-color: ' + primary_button_bg_color + '; color: ' + primary_button_tx_color + '}' +
							'.primary-btn:hover {color: ' + primary_button_tx_color + '}' +
							'.page-link, .secondary-btn {background-color: ' + secondary_button_bg_color + '; color: ' + secondary_button_tx_color + '}' +
							'.cover-text h1, .cover-text h2, .hero-text *, .cover-text p, .lb-caption, .lb-caption *, [data-media-card-style*=Overlay] .cb-text * {color:' + hero_heading_tx_color + '}' +
							'body.header-overlay:not([class*=translucent]) a.navbar-brand, body.header-overlay:not([class*=translucent]) header nav .nav-link, body.header-overlay:not([class*=translucent]) header nav .btn-link, body.header-overlay:not([class*=translucent]) button.search-btn {color:' + hero_heading_tx_color + '}' +
							'footer a {color: ' + footer_link_color + '}' + 
							body_font_size[body_font_size.setting.toLowerCase()] +
							headings_font_size[headings_font_size.setting.toLowerCase()] +
							navigation_font_size[navigation_font_size.setting.toLowerCase()] +
							button_font_size[button_font_size.setting.toLowerCase()] +
							unescape(USER("Custom CSS")) +
						'</style>' +
						themePreset.styles +
						'<link href="https://fonts.googleapis.com/css?family=' + navigation_font.replace(/ /g, "+") + ':100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">\
						<link href="https://fonts.googleapis.com/css?family=' + headings_font.replace(/ /g, "+") + ':100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">\
						<link href="https://fonts.googleapis.com/css?family=' + body_font.replace(/ /g, "+") + ':100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">';
					
						if (typeof trialID != "undefined") {
									
							// Navigation
							var headerPageNav = '';
							var topHeaderPageNav = '';
							var footerPageNav = '';
							var categoryNav = '';
						
						}
										
						// Category Links Output			
						
						if (typeof categoriesData == 'undefined') {
						
						} else {
							for(var x=0; x < categoriesData.category.length; x++){
								
								var subCatNavOpen = '<div class="dropdown-menu rounded-0 p-0 border-top-0 m-0" aria-labelledby="' + categoriesData.category[x].url + 'dropdownMenuButton"><ul class="navbar-nav flex-column">';
								var subCatNavClose = '</ul></div>';
								
								var subCatNavLoop = [];
								
								subCatNavLoop[x] += '<li class="nav-link w-100 p-0"><a class="dropdown-item px-3 py-2" href="/category/' + categoriesData.category[x].url + '">View All</a></li>';
	
								if (categoriesData.category[x].sub_category === undefined || categoriesData.category[x].sub_category.length == 0) {
								} else {
									for(var y=0; y < categoriesData.category[x].sub_category.length; y++){
											subCatNavLoop[x] += '<li class="nav-link w-100 p-0"><a class="dropdown-item px-3 py-2" href="/category/' + categoriesData.category[x].sub_category[y].url + '">' + categoriesData.category[x].sub_category[y].name + '</a></li>';
									}
								}
												
								var subCategoryNav = subCatNavOpen + subCatNavLoop[x] + subCatNavClose;
												
									categoryNav += '<li class="nav-item px-0 position-relative"><a class="' + (categoriesData.category[x].sub_category === undefined || categoriesData.category[x].sub_category.length == 0 ? '' : ' dropdown-toggle ' ) + 'nav-link px-3 py-4 ' + (window.location.href.indexOf("/" + categoriesData.category[x].url) > -1 ? 'active' : '') + '"' + (categoriesData.category[x].sub_category === undefined || categoriesData.category[x].sub_category.length == 0 ? '' : ' id="' + categoriesData.category[x].url + 'dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" ') + ' href="/category/' + categoriesData.category[x].url + '">' + categoriesData.category[x].name + '</a>' + subCategoryNav.replace('undefined', '') + '</li>';
							}
						}
						
						// Page Links Output	
						for(var x=0; x < pagesData.page.length; x++){
							
							var subPageNavOpen = '<div class="dropdown-menu rounded-0 p-0 border-top-0 m-0" aria-labelledby="' + pagesData.page[x].url + 'dropdownMenuButton"><ul class="navbar-nav flex-column">';
							var subPageNavClose = '</ul></div>';
							
							var subPageNavLoop = [];
							
							subPageNavLoop[x] += '<li class="nav-link w-100 p-0"><a class="dropdown-item px-3 py-2" href="/' + pagesData.page[x].url + '">' + pagesData.page[x].name + '</a></li>';
	
							
							if (pagesData.page[x].sub_page === undefined || pagesData.page[x].sub_page.length == 0) {
							} else {
								for(var y=0; y < pagesData.page[x].sub_page.length; y++){
										subPageNavLoop[x] += '<li class="nav-link w-100 p-0"><a class="dropdown-item px-3 py-2" href="/' + pagesData.page[x].sub_page[y].url + '">' + pagesData.page[x].sub_page[y].name + '</a></li>';
								}
							}
							
							
							var subpageNav = subPageNavOpen + subPageNavLoop[x] + subPageNavClose;
							
							if (USER("Hidden Links").indexOf(pagesData.page[x].url) == -1) {
								if (USER("Footer Links").indexOf(pagesData.page[x].url) == -1 && pagesData.page[x].name.indexOf('(&)') == -1 && pagesData.page[x].name.indexOf('(#)') == -1) {
									headerPageNav += '<li class="nav-item px-0 position-relative"><a class="' + (pagesData.page[x].sub_page === undefined || pagesData.page[x].sub_page.length == 0 ? '' : ' dropdown-toggle ' ) + 'nav-link px-3 py-4 ' + (window.location.href.indexOf("/" + pagesData.page[x].url) > -1 ? 'active' : '') + '"' + (pagesData.page[x].sub_page === undefined || pagesData.page[x].sub_page.length == 0 ? '' : ' id="' + pagesData.page[x].url + 'dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" ') + ' href="/' + pagesData.page[x].url + '">' + pagesData.page[x].name + '</a>' + subpageNav.replace('undefined', '') + '</li>';
									topHeaderPageNav += '<li class="nav-item px-0 position-relative"><a class="' + (pagesData.page[x].sub_page === undefined || pagesData.page[x].sub_page.length == 0 ? '' : ' dropdown-toggle ' ) + 'nav-link px-3 py-2 ' + (window.location.href.indexOf("/" + pagesData.page[x].url) > -1 ? 'active' : '') + '"' + (pagesData.page[x].sub_page === undefined || pagesData.page[x].sub_page.length == 0 ? '' : ' id="' + pagesData.page[x].url + 'dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" ') + ' href="/' + pagesData.page[x].url + '">' + pagesData.page[x].name + '</a>' + subpageNav.replace('undefined', '') + '</li>';
								}
								if (USER("Footer Links").indexOf(pagesData.page[x].url) > -1 || pagesData.page[x].name.indexOf('&') > -1) {
										footerPageNav += '<li class="nav-item d-inline-block px-0"><a class="nav-link px-2 py-1" href="/' + pagesData.page[x].url + '">' + pagesData.page[x].name.replace('(&)', '').replace('(!)', '').replace('(!!)', '').replace('(#)', '') + '</a></li>';
								}
							}
						}
	
						
						var socialLinks = USER("Social Media Links").split('\n');
						var socialLinksLoop = '';
						
						for(var x=0; x < socialLinks.length; x++){
								if (socialLinks[x].indexOf('facebook') > -1) { var socialIcon = 'fa-facebook-f'; }
								else if (socialLinks[x].indexOf('twitter') > -1) { var socialIcon = 'fa-twitter'; }
								else if (socialLinks[x].indexOf('instagram') > -1) { var socialIcon = 'fa-instagram'; }
								else if (socialLinks[x].indexOf('pinterest') > -1) { var socialIcon = 'fa-pinterest'; }
								else if (socialLinks[x].indexOf('youtube') > -1) { var socialIcon = 'fa-youtube'; }
								else if (socialLinks[x].indexOf('vimeo') > -1) { var socialIcon = 'fa-vimeo'; }
								else if (socialLinks[x].indexOf('etsy') > -1) { var socialIcon = 'fa-etsy'; }
								else if (socialLinks[x].indexOf('tumblr') > -1) { var socialIcon = 'fa-tumblr'; }
								else if (socialLinks[x].indexOf('wordpress') > -1) { var socialIcon = 'fa-wordpress'; }
								else { var socialIcon = null;}
							socialLinksLoop += '<li class="d-inline-block"><a target="_blank" href="' + socialLinks[x] + '" class="btn btn-sq-xs">' + (socialIcon ? '<i class="fab ' + socialIcon + '"></i>' : socialLinks[x].replace('http://', '').replace('https://', '')) + '</a></li>';
						}
						
						var flyoutCart = '<div class="modal right fade" id="cart-modal-btn" tabindex="-1" role="dialog" aria-labelledby="cart-modal-label">\
											<div class="modal-dialog" role="document">\
												<div class="modal-content">\
													<div class="p-3">\
														<button type="button" class="close" data-dismiss="modal" aria-label="Close"><i class="material-icons">close</i></button>\
													</div>\
													<div class="mb-3"><h1 class="h2 text-center text-uppercase">Cart</h1></div>\
													<div class="modal-body cart-modal-holder"></div>\
												</div>\
											</div>\
										</div>';							
						
	
						var standardNavLinks = '<li class="nav-item px-0 position-relative"><a class="nav-link px-3 py-4 ' + (window.location.href.indexOf("/products") > -1 ? 'active' : '') + '" href="/products">All Products</a></li>' +
														 categoryNav +
														 (USER("Navigation Style").indexOf('Top Nav') == -1 && USER("Navigation Style") != 'Centered Menu with Top Nav Alt' ?
															headerPageNav + 
															(USER("Contact Link Location").indexOf('Header') > -1 ? '<li class="nav-item d-inline-block px-0"><a class="nav-link px-3 py-4 ' + (window.location.href.indexOf("/contact") > -1 ? 'active' : '') + '" href="/contact">Contact</a></li>' : '') +
															(USER("Navigation Style").indexOf('Condensed') == -1 && USER("Navigation Style").indexOf('Top') == -1 ? '<li class="d-none d-md-inline-block nav-item px-1 py-4"><a href="#" data-toggle="modal" data-target="#search-modal-btn" aria-expanded="false" class="search-btn open-search btn btn-link px-1 py-0"><i class="material-icons">search</i></a></li>' : '') +
															(USER("Navigation Style").indexOf('Condensed') == -1 && USER("Navigation Style").indexOf('Top') == -1 ? '<li class="d-none d-md-inline-block nav-item px-3 py-4"><a href="/cart"' + (window.location.href.indexOf('TEMP_MINICART_REMOVAL') == -1 ? ' ' : ' data-toggle="modal" data-target="#cart-modal-btn"') + 'class="nav-link p-0"><i class="material-icons">shopping_basket</i> <span>' + cartData.cartCount + (cartData.cartCount == 1 ? ' Item' : ' Items') + '</span></a></li>' : '')
														  : '');
														 
						
								
						var topNavPageLinks = topHeaderPageNav +
											  (USER("Contact Link Location").indexOf('Header') > -1 && USER("Navigation Style").indexOf('Top Nav') ? '<li class="nav-item d-inline-block px-0"><a class="nav-link px-3 py-2 ' + (window.location.href.indexOf("/contact") > -1 ? 'active' : '') + '" href="/contact">Contact</a></li>' : '');
					
						var topNavSearchCartLinks = '<li class="search-link d-none d-md-inline-block nav-item p-2"><a href="#" data-toggle="modal" data-target="#search-modal-btn" aria-expanded="false" class="search-btn open-search btn btn-link px-1 py-0"><i class="material-icons">search</i><span class="ml-2 search-text">Search</span></a></li>\
													 <li class="cart-link d-none d-md-inline-block nav-item p-2"><a href="/cart"' + (window.location.href.indexOf('TEMP_MINICART_REMOVAL') == -1 ? ' ' : ' data-toggle="modal" data-target="#cart-modal-btn"') + 'class="nav-link p-0"><i class="material-icons">shopping_basket</i> <span>' + cartData.cartCount + (cartData.cartCount == 1 ? ' Item' : ' Items') + '</span></a></li>';
											
						var menuModal = '<div class="modal right fade" id="menu-modal-btn" tabindex="-1" role="dialog" aria-labelledby="menu-modal-label">\
											<div class="modal-dialog" role="document">\
												<div class="modal-content">\
													<div class="p-3">\
														<button type="button" class="close" data-dismiss="modal" aria-label="Close"><i class="material-icons">close</i></button>\
													</div>\
													<div class="modal-body menu-modal-holder px-0"><ul class="navbar-nav d-flex flex-column text-center">' + standardNavLinks.replace(/dropdown-menu/g, 'dropdown-menu w-100 text-center') + '</ul></div>\
												</div>\
											</div>\
										</div>';
										
						var searchModal = '<div class="modal fade" id="search-modal-btn" tabindex="-1" role="dialog" aria-labelledby="search-modal-label">\
											<div class="modal-dialog h-100 w-100 d-flex mx-auto" role="document">\
												 <div class="d-flex w-100 align-self-center text-center">\
													<div class="modal-content">\
														<div class="mb-3"><h1 class="h2 text-center text-uppercase">Search</h1></div>\
														<form action="/products" method="get" class="search">\
														 <div class="input-group mb-3 col-12">\
															<input id="search" class="form-control" type="text" placeholder="Search.." name="search">\
															   <div class="input-group-append">\
																	<button class="btn btn-lg p-3 primary-btn" type="submit"><i class="fa fa-search"></i></button>\
																</div>\
														  </div>\
														</form>\
												  </div>\
												 </div>\
											  </div>\
											</div>';
										
						
						var storeHeader = '<header><nav data-navigation-style="' + USER("Navigation Style") + '" class="navbar ' + (USER("Navigation Style").indexOf('Centered') > -1 || USER("Header Promo Text") || USER("Navigation Style").indexOf('Top') > -1 ? 'd-lg-block ' : '') + 'fixed-top' + (USER("Navigation Style").indexOf('Condensed') == -1 ? ' navbar-expand-lg' : '') + ' py-0 px-0">' +
													  (USER("Navigation Style").indexOf('Top Nav') > -1 || USER("Header Promo Text") ? 
													  '<div class="top-header mt-0 py-2 py-lg-0' + (USER("Header Promo Text") || USER("Navigation Style").indexOf('Top Nav') > -1 ? ' ' : ' d-none ') + 'd-lg-flex navbar-collapse">\
															<div class="top-header_left col-12 col-lg-4 d-lg-flex mr-auto">' + (USER("Header Promo Text") && USER("Navigation Style").indexOf('Standard Expanded with Top Nav') > -1 ? '<ul class="navbar-nav pl-2 container-fluid mx-auto"><span class="top-header_promo-text text-left pl-0">' + USER("Header Promo Text") + '</span></ul>' : '') + (USER("Navigation Style") == 'Centered Menu with Top Nav' ? '<ul class="navbar-nav pl-2 d-none d-lg-flex container-fluid mx-auto">' + topNavPageLinks + '</ul>' : '') + '</div>' +
															'<div class="top-header_middle' + (USER("Navigation Style").indexOf('Standard') > -1 ? ' col ' : ' col-12 col-lg-4 ')  + ' d-flex mx-auto">' + (USER("Header Promo Text") && USER("Navigation Style") == 'Centered Menu with Top Nav' ? '<span class="top-header_promo-text mx-auto text-center">' + USER("Header Promo Text") + '</span>' : '') + '</div>' +
															(USER("Navigation Style").indexOf('Top') > -1 ? '<div class="top-header_right ' + (USER("Navigation Style").indexOf('Standard') > -1 ? ' col-6 ' : ' col-4 ')  + ' d-none d-lg-flex ml-auto"><ul class="navbar-nav pr-2 container-fluid mx-auto justify-content-end">' + (USER("Navigation Style").indexOf('Standard') > -1 ? topNavPageLinks : '') + topNavSearchCartLinks + '</ul></div>' : '') +
													   '</div>' 
													  : '') +
													  '<div class="main-header navbar' + (USER("Navigation Style").indexOf('Centered') > -1 ? ' d-lg-block ' : ' ') + 'navbar-expand-lg w-100 py-0 px-4">\
														  <div class="store-logo ' + (USER("Navigation Style").indexOf('Condensed') > -1 ? 'w-100' : '') + (USER("Navigation Style").indexOf('Centered') > -1 ? 'd-lg-flex col-6 col-lg-12 py-4 pb-lg-0 px-0 d-inline-block justify-content-center' : '') + '"><a class="navbar-brand py-3" href="/">' + (USER("Logo Image URL") ? '<img src=' + USER("Logo Image URL").replace(logoA, logoB) + '>' : USER("Store Name") ) + '</a></div>\
														  <ul data-nav-view="condensed" class="navbar-nav flex-row ' + (USER("Navigation Style").indexOf('Condensed') > -1 ? '' : 'd-lg-none d-flex') + ' px-0 py-4 ml-auto">\
															<li class="nav-item px-2"><a href="#" class="py-0 search-btn open-search btn btn-link px-1 collapsed" data-toggle="modal" data-target="#search-modal-btn" aria-expanded="false"><i class="material-icons">search</i></a></li>\
															<li class="nav-item px-2"><a href="/cart"' + (window.location.href.indexOf('TEMP_MINICART_REMOVAL') == -1 ? ' ' : ' data-toggle="modal" data-target="#cart-modal-btn"') + ' class="nav-link p-0"><i class="material-icons">shopping_basket</i></a></li>\
															<li class="nav-item px-2"><a href="#" class="py-0 px-1 btn btn-link collapsed" data-toggle="modal" data-target="#menu-modal-btn" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i class="material-icons">menu</i></a></li>\
														  </ul>\
													   <div class="collapse navbar-collapse" id="navbarSupportedContent"><ul data-nav-view="expanded" class=" navbar-nav ' + (USER("Navigation Style").indexOf('Centered Alternative') > -1 ? 'container justify-content-between ' : '') + (USER("Navigation Style").indexOf('Condensed') > -1 ? 'd-flex d-lg-none ' : '') +  (USER("Navigation Style").indexOf('Centered') > -1 ? 'mx-auto' : 'ml-auto') + '">' + standardNavLinks + '</ul></div>\
													  </div>\
													</nav></header>' + menuModal + flyoutCart;
								
						var storeFooter = '<footer class="page-footer font-small px-3 mt-5">\
												<div class="py-4 px-0 navbar navbar-expand-lg border-bottom row no-gutters">\
													<nav class="col-md-6 col-sm-12"><ul class="navbar-nav d-block text-center text-md-left">' + footerPageNav + 
														(USER("Contact Link Location").indexOf('Footer') > -1 ? '<li class="nav-item d-inline-block px-0"><a class="nav-link px-2 py-1" href="/contact">Contact</a></li>' : '') + '</ul>\
													</nav>\
													<nav class="col-md-6 col-sm-12"><ul class="navbar-nav d-block text-center text-md-right">' + socialLinksLoop + '</ul></nav>\
												</div>\
												<div class="footer-copyright py-4 text-left">&copy; ' + new Date().getFullYear() + ' Copyright <a href="/">' + USER("Store Name") + '</a><span class="tf-credit ml-2 pl-2 border-left">Designed by <a href="http://themefiend.com?ref=credit" target="_blank">Theme Fiend</a></span></div>\
											</footer>' + searchModal + stylesheet.replace("undefined", "");
									
						// Product Grid
						
							
							var prodGrid = '';
														
							var prodGridBegin = '<div id="products-holder">';
							
							if (location.pathname == '/' || window.document.body.id.indexOf('home-') > -1 ) {
								var prodGridTitle = '<div class="section-title"><div class="container"><h4 class="h1">' + featured_products_heading + '</h4></div></div>';
							} else {
								var prodGridTitle = '';
							}
							
							var prodGridLoopBegin = '<div class="product-loop px-3"><div class="row">';
							var prodGridLoop = '';		
							for(var x=0; x < productGridData.products.length;x++){ 
							
							
								var prodGridOptionsHolder = '';
								var prodGridOptions = '';
								var prodGridUniqueOptions = '';
								var uniqueNames = [];
	
								for(var a=0;a<productGridData.products[x].product_options.length;a++){ 
								
									if(uniqueNames.indexOf(productGridData.products[x].product_options[a].title)===-1){ 
										prodGridOptions += '<li data-index="' + uniqueNames.push(productGridData.products[x].product_options[a].title) + '"><input data-title="' + productGridData.products[x].product_options[a].tag + '"type="radio" id="' + productGridData.products[x].url.replace("/product/", "") + '_option_' + productGridData.products[x].product_options[a].value + '"name="first_group" value="' + productGridData.products[x].product_options[a].value + '"><label data-slug="' + productGridData.products[x].url.replace("/product/", "") + '"data-tag="' + productGridData.products[x].product_options[a].tag + '"for="' + productGridData.products[x].url.replace("/product/", "") + '_option_'  + productGridData.products[x].product_options[a].value + '"><a href="' + productGridData.products[x].url + '?' + first_option_group_name.toLowerCase() + '=' + productGridData.products[x].product_options[a].title.replace(" ", "%20").replace("/", "-") + '"><span data-swatch="' + productGridData.products[x].product_options[a].title + '"class="color-swatch"></span><span class="label-text">' + productGridData.products[x].product_options[a].title + '</span></a></label></li>';
									} 
	
									if(uniqueNames.indexOf(productGridData.products[x].product_options[a].title)===-1){ 
										prodGridUniqueOptions += uniqueNames[a] 
									} 
								}
											
	
								prodGridOptionsHolder += '<div class="product_options_list parent-options" data-product-slug="' + productGridData.products[x].url.replace("/product/", "") + '"><div class="pol-inner">' + prodGridOptions + prodGridUniqueOptions + '</div>\
								</div>';
							
							
								var prodImageLoop = '';
								var prodStatus = '';
								var statusType = '';
								
								
								
								for(var z=0; z<productGridData.products[x].images.length; z++){
									
									if (productGridData.products[x].onSale=="true"){
										statusType = '<span class="badge badge--sale py-2 px-3 position-absolute"><span class="h6">On Sale</span></span>';
									} else if (productGridData.products[x].status=="sold-out") {
										statusType = '<span class="badge badge--sold badge-secondary py-2 px-3 position-absolute"><span class="h6">Sold Out</span></span>';
									} else if (productGridData.products[x].status=="coming-soon") {
										 statusType = '<span class="badge badge--soon badge-secondary py-2 px-3 position-absolute"><span class="h6">Coming Soon</span></span>';
									}
									
									if(productGridData.products[x].onSale=="true"||productGridData.products[x].status=="sold-out"||productGridData.products[x].status=="coming-soon"){
										prodStatus = statusType;
									}
								
									prodImageLoop += '<li data-image="' + productGridData.products[x].images[z] + '" data-slug="' + productGridData.products[x].url.replace("/product/", "") + '">' 
									+ (typeof prodStatus !== undefined ? prodStatus : '') + 
									'<a href="' + productGridData.products[x].url + '"><img alt="Image of ' + productGridData.products[x].title + '" src="' + productGridData.products[x].images[z] + '" data-image="' +  productGridData.products[x].images[z] + '"></a></li>';
								}
								
								
								var prodperRow;
								
								if (USER("Product Grid Columns") == 1) {prodperRow = 'col-sm-12'}
								if (USER("Product Grid Columns") == 2) {prodperRow = 'col-sm-6'}
								if (USER("Product Grid Columns") == 3) {prodperRow = 'col-sm-4'}
								if (USER("Product Grid Columns") == 4) {prodperRow = 'col-sm-3'}
								
								prodGridLoop +=	
								'<div class="product ' + prodperRow + ' mb-4' + (productGridData.products[x].status=="sold-out" ? ' sold-out ' : '') + '">\
									<div class="shop-item-image"><ul style="overflow:hidden">' + prodImageLoop + '</ul></div>\
									<div class="mt-3 text-center">\
										<p class="product-title m-0"><a href="' + productGridData.products[x].url + '">' + productGridData.products[x].title + '</a></p>\
										<p class="product-price mb-3">' + productGridData.products[x].defaultPrice + '</p>\
									</div>' + prodGridOptionsHolder + '\
								</div>';
							}
							
							if (location.pathname == '/' || window.document.body.id.indexOf('home-') > -1) {
								var paginationHolder = '';
							}
							
							if (location.pathname != '/' || window.document.body.id.indexOf('home-') > -1) {
								var paginationHolder = '<div class="band my-3"><nav>' + pagination + '</nav></div>';
							}
							
							var prodGridLoopEnd = '</div></div>';					
							var prodGridEnd = '</div>';
							
							prodGrid = 
								prodGridBegin +
								prodGridTitle +
								prodGridLoopBegin +
									prodGridLoop +
								prodGridLoopEnd +
								paginationHolder +
								prodGridEnd;
					
					
					// Template: Home
	
						var homePage = function() {
							
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
								
								var heroGridItem1 = '<li class="col-md-12 col-xs-12" style="background-image:url(&#x27;' + heroImage1.img + '&#x27;)">\
														<a href="' + heroImage1.link + '"></a>\
														<div data-hero-text-position="' + USER("Hero Image 1 Text Alignment").toLowerCase() + '" class="hero-text">' +
															(heroImage1.heading ? '<h2 class="display-4">' + heroImage1.heading + '</h2>' : '') +
															(heroImage1.subheading ? '<p class="mt-2 lead">' + heroImage1.subheading + '</p>' : '') +
															(heroImage1.button ? '<button class="btn primary-btn btn-lg rounded-0">' + heroImage1.button + '</button>' : '') +
														'</div>\
													</li>';
								
								var heroGridItem2 = '<li class="col-md-12 col-xs-12" style="background-image:url(&#x27;' + heroImage2.img + '&#x27;)">\
														<a href="' + heroImage2.link + '"></a>\
														<div data-hero-text-position="' + USER("Hero Image 2 Text Alignment").toLowerCase() + '"class="hero-text">' +
															(heroImage2.heading ? '<h3 class="h1">' + heroImage2.heading + '</h2>' : '') +
															(heroImage2.subheading ? '<p class="mt-2 lead">' + heroImage2.subheading + '</p>' : '') +
															(heroImage2.button ? '<button class="btn primary-btn btn-lg rounded-0">' + heroImage2.button + '</button>' : '') +
														'</div>\
													</li>';
								
								var heroGridItem3 = '<li class="col-md-12 col-xs-12" style="background-image:url(&#x27;' + heroImage3.img + '&#x27;)">\
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
	
								var heroSlide1 = '<div id="hs-slide-1" class="hs-slide" style="background-image:url(&#x27;' + heroImage1.img + '&#x27;)">\
														<a href="' + heroImage1.link + '"></a>\
														<img src="' + heroImage1 + '">\
														<div data-hero-text-position="' + USER("Hero Image 1 Text Alignment").toLowerCase() + '"class="hero-text">' + 
															(heroImage1.heading ? '<h2 class="h1 display-4 mb-3">' + heroImage1.heading + '</h2>' : '') +
															(heroImage1.subheading ? '<p class="h4 font-weight-light text-capitalize mb-4">' + heroImage1.subheading + '</p>' : '') +
															(heroImage1.button ? '<button class="btn rounded-0 primary-btn btn-lg">' + heroImage1.button + '</button>' : '') +
														'</div>\
													</div>';
								
									var heroSlide2 = '<div id="hs-slide-2" class="hs-slide" style="background-image:url(&#x27;' + heroImage2.img + '&#x27;)">\
														<a href="' + heroImage2.link + '"></a>\
														<img src="' + heroImage2 + '">\
														<div data-hero-text-position="' + USER("Hero Image 2 Text Alignment").toLowerCase() + '"class="hero-text">' + 
															(heroImage2.heading ? '<h2 class="h1 display-4 mb-3">' + heroImage2.heading + '</h2>' : '') +
															(heroImage2.subheading ? '<p class="h4 font-weight-light text-capitalize mb-4">' + heroImage2.subheading + '</p>' : '') +
															(heroImage2.button ? '<button class="btn rounded-0 primary-btn btn-lg">' + heroImage2.button + '</button>' : '') +
														'</div>\
													</div>';
								
									var heroSlide3 = '<div id="hs-slide-3" class="hs-slide" style="background-image:url(&#x27;' + heroImage3.img + '&#x27;)">\
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
								var cbImgHolder1 = '<div class="cb-image ' + mediaCard.imgCol + '" style="background-image:url(&#x27;' + contentBlockImage1 + '&#x27;)"><a href="' + USER("Media Card 1 Link URL") + '"></a></div>';
								
							}
							
							
							if (USER("Media Card 2 Type") == 'Video') {
								var cbImgHolder2 = '<div class="cb-image cb-image--video ' + mediaCard.imgCol + '">\
														<div class="embed-responsive embed-responsive-16by9">\
														  <iframe class="embed-responsive-item" src="' + contentBlockVideo2.replace("/watch?v=", "/embed/") + '" allowfullscreen></iframe>\
														</div>\
													</div>';
							} else {
								var cbImgHolder2 = '<div class="cb-image ' + mediaCard.imgCol + '" style="background-image:url(&#x27;' + contentBlockImage2 + '&#x27;)"><a href="' + USER("Media Card 2 Link URL") + '"></a></div>';
							}
							
							
							if (USER("Media Card 3 Type") == 'Video') {
								var cbImgHolder3 = '<div class="cb-image cb-image--video ' + mediaCard.imgCol + '">\
														<div class="embed-responsive embed-responsive-16by9">\
														  <iframe class="embed-responsive-item" src="' + contentBlockVideo3.replace("/watch?v=", "/embed/") + '" allowfullscreen></iframe>\
														</div>\
													</div>';
							} else {
								var cbImgHolder3 = '<div class="cb-image ' + mediaCard.imgCol + '" style="background-image:url(&#x27;' + contentBlockImage3 + '&#x27;)"><a href="' + USER("Media Card 3 Link URL") + '"></a></div>';
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
						
						// Template: Category / Products
						
						var categoryPage = function() {
							
							
							var categoryHTML = 
								'<div class="category-title mb-5 mt-3"><h1 class="h2 text-center text-uppercase">' + pageTitle + '</h1></div>' +
								prodGrid;
							
								document.querySelector('body').innerHTML += 
									loader +
									storeHeader + 
									'<div data-template="category" class="pt-4 px-4">' + 
										categoryHTML + 
									'</div>' + 
									storeFooter;		
							 
							 
						};
						
						
						// Template: Individual Product
						
						var productPage = function() {	
						
							var prodIntro = '';
							var prodInfo = '';
							var prodPurchase = '';
							var prodImageFeatured = '';
							var prodImageLoop = '';
							var prodImageLoopOffset = '';
							var prodParentOptionLoop = '';
							
							
							var singleStatusType = '';
							var singleProdStatus = '';
							
							
							var prodThumbsBegin = '<div class="product-thumbs col-sm-2 d-none d-md-flex"><ul class="p-0">';
							var prodThumbsEnd = '</div>';
							var prodThumbsLoop = '';
							
							
							for(var x=0; x < productData.products.length;x++){
								
								if (productData.products[x].product_options[0].relationship == null && productData.products[x].product_options[0].original_title.indexOf('/') == -1) { 
					 
								} else {
								  	
								  	$('.parent-options.option-group input, .parent-options.option-group select').on('change', function(){
										//window.location.href = '#';
									  });
									  
								  }
							
								if (productData.products[x].onSale=="true"){
										singleStatusType = '<span class="badge d-inline-block badge-secondary py-2 px-3 ml-3"><span class="h6 font-weight-normal">On Sale</span></span>';
									} else if (productData.products[x].status=="sold-out") {
										singleStatusType = '<span class="badge d-inline-block badge-secondary py-2 px-3 ml-3"><span class="h6 font-weight-normal">Sold Out</span></span>';
									} else if (productData.products[x].status=="coming-soon") {
										 singleStatusType = '<span class="badge d-inline-block badge-secondary py-2 px-3 ml-3"><span class="h6 font-weight-normal">Coming Soon</span></span>';
									}
									
									if(productData.products[x].onSale=="true"||productData.products[x].status=="sold-out"||productData.products[x].status=="coming-soon"){
										singleProdStatus = singleStatusType;
									}
									
							
								for(var z=0; z < 1; z++){ 					
									prodImageFeatured += '<li class="featured"><img src="' + productData.products[x].images[z] + '"></li>';			
								}
								
								for(var z=0; z < productData.products[x].images.length; z++){ 
									prodThumbsLoop += '<li class="mb-2"><a href="#img_' + productData.products[x].images[z].replace('https://assets.bigcartel.com/product_images/', '').split("?")[0] + '"><img src="' + productData.products[x].images[z] + '"></a></li>';
								}					
								
								for(var z=0; z < productData.products[x].images.length; z++){ 
									prodImageLoop += '<div data-hash="img_' + productData.products[x].images[z].replace('https://assets.bigcartel.com/product_images/', '').split("?")[0] + '"  data-image="' + productData.products[x].images[z] + '" data-slug="' + productData.products[x].url.replace("/product/", "") + '" class="swiper-slide">' 
									+ '<img alt="Image of ' + productData.products[x].title + '" src="' + productData.products[x].images[z] + '" data-image="' +  productData.products[x].images[z] + '"></div>';			
								}
								
								for(var z=1; z < productData.products[x].images.length; z++){ 
									prodImageLoopOffset += '<li><img src="' + productData.products[x].images[z] + '"></li>';				
								}
								
								var uniqueNames = [];
								
								for(var a = 0; a < productData.products[x].product_options.length; a++){   
									if(uniqueNames.indexOf(productData.products[x].product_options[a].title) === -1){
									
									if (productData.products[x].product_options[0].original_title.indexOf(" / ") > -1) {
										var optionType = 'parent_option';						
									} else {
										var optionType = 'cart[add][id]';
									}
									
									
									if (productData.products[x].product_options[a].relationship == "parent") { 
										var optVal = productData.products[x].product_options[a].value;
									} else { 
										var optVal = productData.products[x].product_options[a].option_id; 
									} 
									
									
									
									
									if (first_option_selection_type == "Dropdown" || productData.products[x].product_options[0].relationship == null && productData.products[x].product_options[0].original_title.indexOf('/') == -1) { 
										prodParentOptionLoop += '<option' + (productData.products[x].product_options[a].stock_status == "sold-out" ? " disabled " : " ") + ' data-price="' + productData.products[x].product_options[a].price + '" data-index="' + uniqueNames.push(productData.products[x].product_options[a].title) + '" data-title="' + productData.products[x].product_options[a].tag + 
											'" id="' + productData.products[x].product_options[a].value + '" value="' + optVal + '">' + productData.products[x].product_options[a].title + '</option>';
									} else {
										prodParentOptionLoop += '<li data-index="' + uniqueNames.push(productData.products[x].product_options[a].title) + '"><input data-title="' + productData.products[x].product_options[a].tag + 
											'" type="radio" required id="' + productData.products[x].url.replace("/product/", "") + '_option_'  + productData.products[x].product_options[a].value + '" name="' + optionType + '" value="' + optVal + '"><label data-swatch="' + productData.products[x].product_options[a].title + '" for="' + productData.products[x].url.replace("/product/", "") + '_option_'  + productData.products[x].product_options[a].value + '"><span data-swatch="' + productData.products[x].product_options[a].title + '" class="color-swatch"></span><span>' + productData.products[x].product_options[a].title + '</span></label></li>';
									}	
									
									
									}
									
								}
								
								
								if (first_option_selection_type == "Dropdown" || productData.products[x].product_options[0].relationship == null && productData.products[x].product_options[0].original_title.indexOf('/') == -1) { 
									var parentOptionHandler = '<div class="parent-options option-group" data-product-slug="' + productData.products[x].url.replace("/product/","").replace(storeURL, "") + '"><div class="select options"><select required size="1" name="cart[add][id]" class="mb-0 form-control custom-select" data-name="' + (productData.products[x].product_options[0].relationship == null && productData.products[x].product_options[0].original_title.indexOf('/') == -1 ? 'option' : first_option_group_name.toLowerCase()) + '"><option disabled="disabled" selected="selected">Choose ' + (productData.products[x].product_options[0].relationship == null && productData.products[x].product_options[0].original_title.indexOf('/') == -1 ? 'option' : first_option_group_name.toLowerCase()) + '</option>' + prodParentOptionLoop + '</select></div></div>';
								} else {
									var parentOptionHandler = '<div class="parent-options option-group" data-product-slug="' + productData.products[x].url.replace("/product/","").replace(storeURL, "") + '">' + prodParentOptionLoop + '</div>';
								}
								
								if (productData.products[x].product_options[0].original_title.indexOf(" / ") > -1) {
									var subOptions = '<div class="select sub-options mb-4">\
															<label><span class="sub-option_title">' + second_option_group_name + '</span></label>\
															<select name="cart[add][id]" size="1" class="mb-0 form-control custom-select">\
																<option disabled="disabled" selected="selected">Choose ' + second_option_group_name.toLowerCase() + '</option>\
															</select>\
														</div>';
								} else {
									var subOptions = '';
								}
								
								
								 if (productData.products[x].product_options[0].title == "Default" || productData.products[x].product_options[0].title == "default") {
								
									prodPurchase += (productData.products[x].status=="sold-out" ? ' ' : '<div class="product-purchase mt-4">\
														<form method="post" action="/cart">\
														<input class="d-none" checked type="radio" value="' + productData.products[x].product_options[0].option_id + '" name="cart[add][id]">\
														<div class="row">\
															<div class="col-sm-9 col-xs-12"><button class="primary-btn btn btn-lg btn-block rounded-0 add-to-cart-btn" name="submit" type="submit" title="' + USER("'Add to Cart' Text") + '">'
																+ USER("'Add to Cart' Text") + '</button>\
															</div>\
														</div>\
													</form>\
													</div>');
								
								} else {
								
									prodPurchase += (productData.products[x].status=="sold-out" ? ' ' : '<div class="product-purchase mt-4">\
														<form method="post" action="/cart">\
														<div id="multiple_product_options" data-mpo-id="' + productData.products[x].id + '_id">\
															<div class="selector mb-4">\
																' + (productData.products[x].product_options[0].relationship == null && productData.products[x].product_options[0].original_title.indexOf('/') == -1 ? '<div class="option-title">Choose Option</div>' : '<div class="option-title">' + first_option_group_name + '</div>') + 
																parentOptionHandler +
															'</div>' + subOptions + '</div>\
														<div class="row">\
															<div class="col-sm-9 col-xs-12"><button class="primary-btn btn btn-lg btn-block rounded-0 add-to-cart-btn" name="submit" type="submit" title="' + USER("'Add to Cart' Text") + '">'
																+ USER("'Add to Cart' Text") + '</button>\
															</div>\
														</div>\
													</form>\
													</div>');
												
								}
							
								prodIntro += '<div class="product-intro">\
												<div class="mb-4 back-link text-uppercase"><a href="/products"><i class="material-icons">arrow_back</i><span>Back to All Products</span></a></div>\
												<h1 class="product-title mb-4 h3">' + productData.products[x].title + '</h1>\
												<div class="price-holder">\
													<p class="product-price h5 mb-4 d-inline-block"><span data-price="' + parseFloat(productData.products[x].defaultPrice.replace(storeInfo.currencySign, '')) + '" class="price-value">' + productData.products[x].defaultPrice + '</span></p>' + (typeof singleProdStatus !== undefined ? singleProdStatus : '') + 
												'</div>' + 
												(USER("Enable Product Reviews") == 'Yes' ? '<a href="#wpac-review" data-toggle="collapse" data-target="#prod-desc-3" aria-expanded="false" aria-controls="prod-desc-3">Reviews</a>' : '') + 
											  '</div>';
											  
											  
									 var reviews = (USER("Enable Product Reviews") == 'Yes' ? '<div id="wpac-review"></div>' : '');
					
	
									var prodDesc_1 = document.querySelector('.prodDesc1').innerHTML;
								
									var desc1 = (USER("Shipping Tab Info") == '' ? '' : '<div class="tab-content">') +
													 (USER("Shipping Tab Info") == '' ? '' : '<div id="prod-desc-head-1"><h6 class="text-uppercase py-3 mb-0" data-toggle="collapse" data-target="#prod-desc-1" aria-expanded="true" aria-controls="prod-desc-1">\
														<span>Details</span>\
														  <i class="float-right tab-icon material-icons"></i>\
													  </h6></div>') +
													'<div id="prod-desc-1" class="" aria-labelledby="prod-desc-head-1" data-parent="#product-info">\
													  <div class="pb-4">' + prodDesc_1 + 
													 '</div>\
													</div>' + 
												 (USER("Shipping Tab Info") == '' ? '' : '</div>');
	
	
									var shipTab = (USER("Shipping Tab Info") ? '<div class="tab-content">\
													<div id="prod-desc-head-2">\
													 <h6 class="text-uppercase py-3 mb-0" data-toggle="collapse" data-target="#prod-desc-2" aria-expanded="false" aria-controls="prod-desc-2">\
													   <span>' + USER("Shipping Tab Name") + '</span>\
														 <i class="float-right tab-icon material-icons"></i>\
													  </h6>\
													</div>\
													<div id="prod-desc-2" class="collapse" aria-labelledby="prod-desc-head-2" data-parent="#product-info">\
													 <div class="pb-4">' + USER("Shipping Tab Info") + 
													 '</div>\
													</div>\
												  </div>' : '');
												  
									var reviewTab = (USER("Enable Product Reviews") == 'Yes' ? '<div class="tab-content">\
													<div id="prod-desc-head-3">\
													 <h6 class="text-uppercase py-3 mb-0" data-toggle="collapse" data-target="#prod-desc-3" aria-expanded="false" aria-controls="prod-desc-3">\
													   <span>Reviews</span>\
														 <i class="float-right tab-icon material-icons"></i>\
													  </h6>\
													</div>\
													<div id="prod-desc-3" class="collapse" aria-labelledby="prod-desc-head-3" data-parent="#product-info">\
													 <div class="pb-4">' + reviews + 
													 '</div>\
													</div>\
												  </div>' : '');
	
								
														
								prodInfo += '<div id="product-info">' + desc1 + shipTab + reviewTab + '</div>';
																	  
							}
	
							var prodBegin = '<div class="row">';
							var prodImgWidth, prodDescWidth;
							if (USER("Product Image Width") == 'Large' || USER("Product Image Width") == '' || USER("Product Image Width") == null) {prodImgWidth = 'col-sm-8'; prodDescWidth = 'col-sm-4'};
							if (USER("Product Image Width") == 'Small') {prodImgWidth = 'col-sm-4'; prodDescWidth = 'col-sm-8'};
							var prodThumbs = prodThumbsBegin + prodThumbsLoop + prodThumbsEnd;
							var prodImages = '<div class="d-none d-md-flex product-images product-image-gallery ' + prodImgWidth + ' row">' + prodThumbs + '<div class="product-thumbnails-list col-sm-10 swiper-wrapper">' + prodImageLoop + '</div></div>';
							var prodImagesMobile = '<div class="d-flex d-md-none product-images_mobile product-image-gallery row">' + prodThumbs + '<div class="product-thumbnails-list col-sm-10 swiper-wrapper">' + prodImageLoop + '</div></div>';
							var prodDesc = 
								'<div class="product-description col-12 col-md-4 ' + prodDescWidth + '">\
									<div class="description__inner col-md-12">' +
										prodIntro +								
										prodInfo +
										prodPurchase +
									'</div>\
								</div>';
							var prodEnd = '</div>';
							
	
							var productHTML = 
								prodBegin +
									prodImages +
									prodImagesMobile + 
									prodDesc +
								prodEnd;
							
								document.querySelector('body').innerHTML += 
									loader +
									storeHeader + 
									'<div data-template="product" data-current-product-slug="' + productData.products[0].url.replace("/product/", "") + '" class="pt-4 px-4">' + 
										productHTML + 
									'</div>' + 
									storeFooter;
													
	
										
							
						};
						
						// Template: Cart
						
							
							var cartBegin = '<div id="cart-table" class="container-fluid px-2">\
												<form method="post" action="/cart" id="cart-form" class="cart-form">\
													<div class="cart-heading row no-gutters d-none no-gutters mb-4 pb-3 pt-4 border-bottom border-top d-md-flex">\
														<div class="item-info-heading row no-gutters col-md-6">\
															<div class="col-sm-12 row"><div class="col-md-12 h5"></div></div>\
														</div>\
														<div class="item-values-headings row col-md-6">\
															<div class="item-qty-heading text-center col-6 col-sm-6 row no-gutters"><div class="col-md-12 h5">Quantity</div></div>\
															<div class="item-total-heading col-6 col-sm-6 text-md-center row no-gutters"><div class="col-md-12 h5">Total</div></div>\
														</div>\
													</div>\
													<div class="cart-body row">';
							
							var cartEnd = '</div>\
											<div class="cart-footer row">\
												<div class="col-12 col-md-6 row no-gutters">\
													<div class="col-12 col-md-6"><a href="/products" class="primary-btn btn btn-block secondary-btn rounded-0"><i class="fa fa-angle-left"></i> ' + USER("'Continue Shopping' Text") + '</a></div>\
												</div>\
												<div class="checkout-info col-xs-12 col-md-6 py-4 pt-md-0 text-right">\
													<div class="subtotal-row h3 mb-3 text-center col-12 col-md-6 ml-auto"><p class="h5">Subtotal:</p> <p class="h4">' + cartData.cartSubtotal + '</p></div>\
													<div class="subtotal-info-row mb-3 text-center small col-12 col-md-6 ml-auto">' + USER("Checkout Note") + '</div>\
													<div class="checkout-row row no-gutters">\
														<div class="col-12 col-md-6 ml-auto">\
															<button type="submit" name="checkout" title="' + USER("'Checkout' Text") + '" class="primary-btn btn button btn-block btn-lg checkout-btn rounded-0">' + USER("'Checkout' Text") + '</button>\
														</div>\
													</div>\
												</div>\
											</div>\
										</form>\
									</div>';
									
							var flyoutCartBegin = '<div id="cart-table" class="container-fluid px-2">\
												<form method="post" action="/cart" id="cart-form" class="cart-form">\
													<div class="cart-body cart-body-in-modal row">';
									
									
							var flyoutCartEnd = '</div>\
											<div class="cart-footer row">\
												<div class="checkout-info py-4 row col-12 text-right">\
													<div class="subtotal-row h3 mb-3 text-center col-12 ml-auto">Subtotal: ' + cartData.cartSubtotal + '</div>\
													<div class="subtotal-info-row mb-3 text-center small col-12 ml-auto">' + USER("Checkout Note") + '</div>\
													<div class="checkout-row col-12 row no-gutters">\
														<div class="col-12 ml-auto">\
															<button type="submit" name="checkout" title="' + USER("'Checkout' Text") + '" class="primary-btn btn button btn-block btn-lg checkout-btn rounded-0">' + USER("'Checkout' Text") + '</button>\
														</div>\
													</div>\
												</div>\
											</div>\
										</form>\
									</div>';
			
							var cartLoop = '';
							var flyoutCartLoop = '';
							
								
							for(var x=0; x< cartData.items.length; x++){ 
							
								var cartImageLoop = [];
	
									for(var z=0; z < cartData.items[x].images.length; z++){ 
										cartImageLoop[x] += '<img src="' + cartData.items[x].images[z] + '">';
									}
									
									var cartOptionLoop = '';
									var cartOptionUniqueLoop = '';
									
									var uniqueNames=[]; 
									
								
									
									for(var a=0;a<cartData.items[x].product_options.length;a++){ 
										if(uniqueNames.indexOf(cartData.items[x].product_options[a].title)===-1){ 
											cartOptionLoop += '<span data-index="' + uniqueNames.push(cartData.items[x].product_options[a].title) + '"><input name="' + cartData.items[x].url.replace('/product/','') + '" data-title="' + cartData.items[x].product_options[a].tag + '"type="radio" id="' +  cartData.items[x].product_options[a].value + '"value="' + cartData.items[x].product_options[a].value + '"><label data-item-url="' + cartData.items[x].url + '"data-slug="' + cartData.items[x].url.replace("/product/", "") + '"data-title="' + cartData.items[x].product_options[a].tag + '"data-tag="' + cartData.items[x].product_options[a].tag + '"for="' + cartData.items[x].product_options[a].value + '"><span data-swatch="' + cartData.items[x].product_options[a].title + '"class="color-swatch"></span><span class="label-text">' + cartData.items[x].product_options[a].title + '</span></label></span>';
										} 
									}
									
									for(var a=0;a<cartData.items[x].product_options.length;a++){ 
											if(uniqueNames.indexOf(cartData.items[x].product_options[a].title)===-1){ 
												cartOptionUniqueLoop += uniqueNames[a] 
											} 
									}
	
									cartLoop += '<div class="cart-item row no-gutters col-md-12 pb-4 mb-4 border-bottom" data-product-id="' + cartData.items[x].id + '">\
													<div class="item-info no-gutters mb-3 row col-12 col-md-6">\
														<div class="item-image-holder row col-6">\
															<div class="item-image-current col-md-8 col-10 m-md-auto"><a class="item-image" href="' + cartData.items[x].url + '"title="View ' + cartData.items[x].title + '"><img src="' + cartData.items[x].images[0] + '" class="img-responsive current-image" /></a></div>\
															<div class="item_images">' + cartImageLoop[x] + '</div>\
															<div class="swatch-options">' + cartOptionLoop + cartOptionUniqueLoop + '</div>\
														</div>\
														<div class="item-text d-flex flex-column justify-content-center col-6">\
															<div class="item-name h5"><a class="item-product-link" title="View ' + cartData.items[x].title + '" href="' + cartData.items[x].url + '">' + cartData.items[x].title + '</a></div>' +
															(cartData.items[x].current_option.indexOf('Default') == -1 ? '<div class="item-option">' + cartData.items[x].current_option + '</div>' : '') +
															'<div class="item-price">' + cartData.items[x].unit_price + '</div>\
														</div>\
													</div>\
													<div class="item-values align-items-center row no-gutters col-12 justify-content-center col-md-6">\
														<div class="item-qty row justify-content-center col-6 col-sm-6" data-cart-id="' + cartData.items[x].id + '">\
															<div class="item-qty_input col-6 offset-md-3 col-md-3 col-sm-6 align-items-center d-flex row text-center">\
																<input type="number" name="cart[update][' + cartData.items[x].id + ']" value="' + cartData.items[x].quantity + '" autocomplete="off" min="1" class="option-quantity form-control text-center"> </div>\
															<div class="col-6 col-sm-6 align-self-center remove-btn-holder">\
																<button class="btn btn-danger btn-sm item-delete remove-btn" data-item-id="' + cartData.items[x].id + '"><i class="material-icons">close</i></button>\
															</div>\
														</div>\
														<div class="item-total text-md-center text-right col-sm-6 col-6">\
															<div class="item-total_price h5">' + cartData.items[x].total_price + '</div>\
														</div>\
													</div>\
												</div>'; 
												
												
									flyoutCartLoop += '<div class="cart-item row no-gutters pb-4 mb-4 border-bottom" data-product-id="' + cartData.items[x].id + '">\
													<div class="item-info no-gutters mb-3 row col-12">\
														<div class="item-image-holder row col-6">\
															<div class="item-image-current col-10 m-md-auto"><a class="item-image" href="' + cartData.items[x].url + '"title="View ' + cartData.items[x].title + '"><img src="' + cartData.items[x].images[0] + '" class="img-responsive current-image" /></a></div>\
															<div class="item_images">' + cartImageLoop[x] + '</div>\
															<div class="swatch-options">' + cartOptionLoop + cartOptionUniqueLoop + '</div>\
														</div>\
														<div class="item-text d-flex flex-column justify-content-center col-6">\
															<div class="item-name h5"><a class="item-product-link" title="View ' + cartData.items[x].title + '" href="' + cartData.items[x].url + '">' + cartData.items[x].title + '</a></div>' +
															(cartData.items[x].current_option.indexOf('Default') == -1 ? '<div class="item-option">' + cartData.items[x].current_option + '</div>' : '') +
															'<div class="item-price" data-item-price="' + parseFloat(cartData.items[x].unit_price.replace(storeInfo.currencySign, '')) + '">' + cartData.items[x].unit_price + '</div>\
														</div>\
													</div>\
													<div class="item-values align-items-center row no-gutters col-12 justify-content-center">\
														<div class="item-qty row justify-content-center col-6" data-cart-id="' + cartData.items[x].id + '">\
															<div class="item-qty_input col-6 align-items-center d-flex row text-center">\
																<input type="number" name="cart[update][' + cartData.items[x].id + ']" value="' + cartData.items[x].quantity + '" autocomplete="off" min="1" class="option-quantity form-control text-center"> </div>\
															<div class="col-6 align-self-center remove-btn-holder">\
																<button class="btn btn-danger btn-sm item-delete remove-btn" type="button"  data-item-id="' + cartData.items[x].id + '"><i class="material-icons">close</i></button>\
															</div>\
														</div>\
														<div class="item-total text-md-center text-right col-6">\
															<div class="item-total_price h5">' + cartData.items[x].total_price + '</div>\
														</div>\
													</div>\
												</div>'; 
								
							}
								
								if (cartData.cartCount == 0) {
									var cartHTML = '<div class="p-5 text-center">\
														<h3>Your cart is empty!</h3>\
														<a href="/products" class="btn"><i class="fa fa-angle-left"></i> Continue Shopping</a>\
													</div>';
									var flyoutCartHTML = '<div class="p-5 text-center">\
														<h3>Your cart is empty!</h3>\
														<a href="/products" class="btn" data-dismiss="modal" aria-label="Close"><i class="fa fa-angle-left"></i> Continue Shopping</a>\
													</div>';
								} else {
									var cartHTML = 
										cartBegin +
												cartLoop +
										cartEnd;
										
									var flyoutCartHTML = 
										flyoutCartBegin +
												flyoutCartLoop +
										flyoutCartEnd;
								}
							
							if (location.pathname.indexOf('/cart') > -1 || window.document.body.id.indexOf('cart-') > -1) {
								document.querySelector('body').innerHTML += 
									loader +
									storeHeader + 
									'<div data-template="cart" class="pt-4 px-4">' + 
									'<div class="mb-5 mt-3"><h1 class="h2 text-center text-uppercase">' + pageTitle + '</h1></div>' +
										cartHTML + 
									'</div>' + 
									storeFooter;
							}
							
									
								$(".item-delete").click(function(){
									$(this).closest("div.cart-item").find("input.option-quantity").val(0).closest("form").submit();
								});
	
								
								$("input.option-quantity").on('input', function(){
									$(this).closest("form").submit();
								});
								
						// Template: Contact Page
						
						
						var contactPage = (function() {
							
							if(window.location.href.indexOf('/contact?success') > -1){
								var contactFormContent = '<div class="row d-block contact-success"><div class="col-12 mb-3 text-center h5">' +  USER("Contact Success Heading") + '</div><div class="col-12 mb-4 text-center">' +  USER("Contact Success Message") + '</div></div>';
							} else {
								var contactFormContent = '<div class="row d-block">\
																		<div class="col-12">\
																				<div class="form-group">\
																					<label for="name">\
																						Name</label>' +
																						document.querySelector('.contactName').innerHTML + '\
																				</div>\
																				<div class="form-group">\
																					<label for="email">\
																						Email Address</label>\
																					<div class="input-group"><span class="input-group-addon"><span class="glyphicon glyphicon-envelope"></span></span>' +
																						document.querySelector('.contactEmail').innerHTML + '</div>\
																				</div>\
																				<div class="form-group">\
																					<label for="subject">Subject</label>' +
																						document.querySelector('.contactSubject').innerHTML + 
																				'</div>\
																				<div class="captcha-set row">\
																					<div class="form-group col-md-3">\
																						<label for="captcha-image">Captcha Image</label><div class="captcha-image">' +
																							document.querySelector('.contactCaptchaImage').innerHTML + '</div>\
																					</div>\
																					<div class="form-group col-9">\
																						<label for="captcha-text">Enter Captcha Text</label>' +
																							document.querySelector('.contactCaptchaField').innerHTML + 
																					'</div>\
																				</div>\
																			<div class="contact-message-holder">\
																				<div class="form-group">\
																					<label for="name">\
																						Message</label>' +
																						document.querySelector('.contactMessage').innerHTML + '</div>\
																			</div>\
																			<div class="ml-auto col-md-4 col-12">\
																				<button id="contact-submit"  type="submit" class="primary-btn btn button btn-block btn-lg submit-btn rounded-0">Send Message</button>\
																			</div>\
																		</div>';
							}
							
							var contactPageHTML = '<div class="container">\
														<div class="col-12 col-md-8 mx-auto">\
															<div class="col-12">\
																<div class="border-1 px-3 pt-0">\
																	<div class="col-12 mb-4 text-center">' + USER("Contact Intro Text") + '</div>\
																		<div class="col-12 mt-2 mb-5 pb-3 border-bottom text-center">\
																				<p class="contact_store-name mb-0">' + USER("Store Name") + '</strong></p>\
																				<div class="contact_address mb-0"><address>' + USER("Contact Address").replace(/(?:\r\n|\r|\n)/g, '<br>') + '</address></div>\
																				<p class="contact_phone-number mb-0">' + USER("Contact Phone Number") + '</p>\
																				<p class="contact_email mb-0 "><a href="mailto:' + USER("Contact Email") + '">' + USER("Contact Email") + '</a></p>\
																				<div class="m-4 text-center customer-service-info">' + USER("Customer Service Info") + '</div>\
																		</div>\
																	 <form id="contact-form" method="post" action="/contact?success=true">' + contactFormContent + '</form>\
																	</div>\
																</div>\
															</div>\
														</div>\
													</div>';
													
													
									document.querySelector('body').innerHTML += 
									loader +
									storeHeader + 
									'<div data-template="contact" class="pt-4 px-4">' + 
									'<div class="mb-5 mt-3"><h1 class="h2 text-center text-uppercase">' + pageTitle + '</h1></div>' +
										contactPageHTML + 
									'</div>' + 
									storeFooter;
				
							
						});
						
						// Template: Custom Page
						
						var customPage = function() {
							
							var customPageHTML = 
								'<div class="container">' +
									'<div class="mb-5 mt-3"><h1 class="h2 text-center text-uppercase">' + pageTitle + '</h1></div>' +
									document.querySelector('#page-content').innerHTML +
								'</div>';
									
							
								document.querySelector('body').innerHTML += 
									loader +
									storeHeader + 
									'<div data-template="custom-page" class="pt-4 px-4">' + 
										customPageHTML + 
									'</div>' + 
									storeFooter;
							
						}	
						
	
						
						if (location.pathname == '/' || window.document.body.id.indexOf('home-') > -1) {homePage(); document.querySelector('.cart-modal-holder').innerHTML = flyoutCartHTML;}
						else if (location.pathname.indexOf('/products') > -1 || location.pathname.indexOf('/category') > -1 || window.document.body.id.indexOf('products-') > -1) {categoryPage(); document.querySelector('.cart-modal-holder').innerHTML = flyoutCartHTML;}
						else if (location.pathname.indexOf('/product/') > -1 || window.document.body.id.indexOf('product-') > -1) {productPage(); document.querySelector('.cart-modal-holder').innerHTML = flyoutCartHTML;}
						else if(location.pathname.indexOf('/contact') > -1 || window.document.body.id.indexOf('contact-') > -1 ){contactPage(); document.querySelector('.cart-modal-holder').innerHTML = flyoutCartHTML;}
						//if (pageType == 'custom' || window.document.body.classList.indexOf('custom') > -1) {customPage(); document.querySelector('.cart-modal-holder').innerHTML = flyoutCartHTML;}					
						else if (location.pathname.indexOf('/cart') > -1 || window.document.body.id.indexOf('cart-') > -1) {}
						else {customPage(); document.querySelector('.cart-modal-holder').innerHTML = flyoutCartHTML;}	
						
						
						if (location.pathname.indexOf('/product/') > -1 || window.document.body.id.indexOf('product-') > -1) {
							
							var WPID = (USER("Widget Pack ID (for Product Reviews)") ? USER("Widget Pack ID (for Product Reviews)") : 1981);
			
							if (USER("Enable Product Reviews") == 'Yes'){
								wpac_init = window.wpac_init || [];
								wpac_init.push({widget: 'Review', id: WPID});
								wpac_init.push({widget: 'ReviewCount', id: WPID});
								(function() {
									if ('WIDGETPACK_LOADED' in window) return;
									WIDGETPACK_LOADED = true;
									var mc = document.createElement('script');
									mc.type = 'text/javascript';
									mc.async = true;
									mc.src = 'https://embed.widgetpack.com/widget.js';
									var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(mc, s.nextSibling);
								})();
							}
						}
						
		
						
					// GetSiteControl.com integration
						var getSiteControlID = USER("GetSiteControl ID") || '';
					
					//	if (USER("Enable GetSiteControl Widgets") == 'Yes') {
							
						  (function (w,i,d,g,e,t,s) {w[d] = w[d]||[];t= i.createElement(g);
						    t.async=1;t.src=e;s=i.getElementsByTagName(g)[0];s.parentNode.insertBefore(t, s);
						  })(window, document, '_gscq','script','//widgets.getsitecontrol.com/' + getSiteControlID +'/script.js');
						  
					//	}
						
					// MPO cart actions
					$("div.cart-item .swatch-options label[data-title]").each(function(){ $(this).click(function(){ var selectedOption = $(this).attr("data-title"); var productId = $(this).parents("div.cart-item").attr("data-product-id"); var productUrl = $(this).attr("data-item-url"); $("div.cart-item[data-product-id=" + productId + "] .item_images img[src*='_" + selectedOption + "_']:first").each(function() { var currentOptionImage = $(this).attr('src'); $("div.cart-item[data-product-id=" + productId + "] .current-image").attr('src', currentOptionImage).parents("a").attr("href", productUrl + "?" + first_option_group_name.toLowerCase() + "=" + selectedOption.replace("+", "%20")); }); }); }); $(document).ready(function() { $(".remove-btn").click(function() { var product_id = $(this).attr('data-item-id'); }); $("div.cart-item .swatch-options label[data-title]").trigger("click");}); $('div.cart-item span[data-swatch]').each(function() { if ($(this).css('background-color') == 'rgba(0, 0, 0, 0)' && $(this).css('background-image') == 'none') { $(this).remove(); } });
					
			
				} // End Capsule Theme build function
				
	       }
	       
				if (userLicenseKey == USER("License Key").trim()) {				
					console.log('License Key ' + USER("License Key").trim() + ' is registered in database.');
					var isRegistered = true;
					capsuleTheme();	
				}
				
				if (isRegistered != true || typeof isRegistered == "undefined") {
							//console.log('License Key is NOT registered in database. Show Capsule theme default settings.');					
							//	userLicenseKey = 'TF-XXXX-XXXX-XXXX-XXXX';
								capsuleTheme();
							//	console.log(licenseKey + ' (Defaults to setting of "' + userLicenseKey + '")');			
				}
				
				
				// End User database lookup
				
						
				
					$(window).ready(function() {
						
				
				
						if (window.location.pathname == '/' || window.document.body.id.indexOf('home-') > -1) {
							
							if (USER("Header Navigation Overlay") == 'Transparent' || USER("Header Navigation Overlay") == 'Yes') {
									document.getElementsByTagName("Body")[0].classList.add('pt-0');
									document.getElementsByTagName("Body")[0].classList.add('header-overlay');
									
									$(window).scroll(function(){
								        var ScrollTop = parseInt($(window).scrollTop());
		
								        if (ScrollTop > 100) {
								            document.getElementsByTagName("Body")[0].classList.remove('header-overlay');
								        } else if (ScrollTop <= 100) {
								        	document.getElementsByTagName("Body")[0].classList.add('header-overlay');
								        }
								    });
								
							}
							
							if (USER("Header Navigation Overlay") == 'Translucent') {
									document.getElementsByTagName("Body")[0].classList.add('pt-0');
									document.getElementsByTagName("Body")[0].classList.add('header-overlay');
									document.getElementsByTagName("Body")[0].classList.add('header-overlay--translucent');
									
									$(window).scroll(function(){
								        var ScrollTop = parseInt($(window).scrollTop());
		
								        if (ScrollTop > 100) {
								            document.getElementsByTagName("Body")[0].classList.remove('header-overlay');
								            document.getElementsByTagName("Body")[0].classList.remove('header-overlay--translucent');
								        } else if (ScrollTop <= 100) {
								        	document.getElementsByTagName("Body")[0].classList.add('header-overlay');
								        	document.getElementsByTagName("Body")[0].classList.add('header-overlay--translucent');
								        }
								    });
								
							}
		
							
						}
						
						
					// Change product price on option select
					$("body").on("change", ".select select", function(){
						var optionPrice = $(this).find(":selected").attr("data-price");
						if (optionPrice != "undefined") { $(".price-holder .price-value").html(optionPrice); }
					});
					
					// Change product price on parent option select, based on value of sub option
					$("body").on("change", "[name=parent_option]", function(){
						var optionPrice = $(".select select").find(":selected").attr("data-price");
						if (optionPrice != "undefined") { $(".price-holder .price-value").html(optionPrice); }
					});

					var body = $("body");
					var headerHeight = $('header nav.navbar').height();

					if (USER("Header Navigation Overlay").indexOf('Trans') > -1 && window.location.pathname != '/' && window.document.body.id.indexOf('home-') == -1) {
						
							body.css('padding-top', headerHeight);
							
							window.addEventListener("resize", function() {
								headerHeight = $('header nav.navbar').height();
								body.css('padding-top', headerHeight);
							}, false);
					
					}
					
					if (USER("Header Navigation Overlay").indexOf('Trans') == -1) {
						
							body.css('padding-top', headerHeight);
							
							window.addEventListener("resize", function() {
								headerHeight = $('header nav.navbar').height();
								body.css('padding-top', headerHeight);
							}, false);
					
					}
					
					
					  $('.loading_wrap').fadeOut(100);
					  
					  
					  
					  if($('.page-item:contains(1)').length) {
					  } else {
						 $('.pagination').remove(); 
					  }
								  
						$('#hero-section[data-hero-type=slider]').slick({
						  dots: true,
						  arrows: false,
						  infinite: true,
						   autoplay: true,
						  speed: 500,
						  fade: true,
						  cssEase: 'linear'
						});
	
						 if (window.location.href.indexOf('/product/') > -1) {
		  
							   var mySwiper = new Swiper ('.product-images', {
								// Optional parameters
								direction: 'vertical',
								loop: true,
								grabCursor: true,
								preventClicks: false,
								preventClicksPropagation: false,
								slideToClickedSlide	: true,
								hashNavigation: {
									replaceState: false,
									watchState: true,
								},
								 mousewheel: {
										invert: false,
								},
								// And if we need scrollbar
								scrollbar: {
								  el: '.swiper-scrollbar',
								},
							  });
	
							  
							   var mobileSwiper = new Swiper ('.product-images_mobile', {
								// Optional parameters
								direction: 'horizontal',
								loop: true,
								autoHeight: true,
								watchOverflow: true,
								grabCursor: true,
								preventClicks: false,
								preventClicksPropagation: false,
								slideToClickedSlide	: true,
								hashNavigation: {
									replaceState: false,
									watchState: true,
								}
							  });
							  
							  
							var allProdImgHeight = 0;
								var prodImgSet = document.querySelectorAll('.product-thumbnails-list img');
								
								for (var i = 0; i < prodImgSet.length; i++){
									var singleProdImgHeight = prodImgSet[i].scrollHeight;
									allProdImgHeight += parseInt(singleProdImgHeight);		
								}
			  
							 document.querySelector('.product-thumbnails-list').style.setProperty('height', '100vh' , 'important');
						
						 }
										
						//Search
						
							$('.open-search').on('click', function() {
								document.querySelector('.overlay').style.display = 'block';
							});
	
							$('.close-search').on('click', function() {
								document.querySelector('.overlay').style.display = 'none';
							});
							
					 // Add to Cart AJAX
					 
					 
					/* document.querySelector('[data-target="#cart-modal-btn")').addEventListener('click', function(){
							window.scrollBy(0, -200);
					}); */
						
					//document.querySelector('[data-target="#menu-modal-btn")').addEventListener('click', function(){
						//var menuModalContent = document.createRange().createContextualFragment(standardNav);
						//document.querySelector('.menu-modal-holder .navbar-nav').appendChild(menuModalContent);
					//});
					
					 var currentCartCount = cartData.cartCount;
					 
					 
					 /* function flyoutCartItemDelete() {
						 
						 $('.cart-body-in-modal .item-delete').click(function(){
								var itemtoRemove = $(this).attr('data-item-id');
								Cart.removeItem(itemtoRemove, function(cart) {
									$('.cart-item[data-product-id*=' + itemtoRemove + ']').remove();
									Cart.refresh(function(cart) {
										$('.nav-link[href*="/cart") span').html(cart.item_count + ' Items');
										$('.subtotal-row').html('Subtotal: ' + Format.money(cart.total, true, true));
										
										
										if (cart.item_count == 0) {
											document.querySelector('.cart-footer').innerHTML = '';	
											document.querySelector('.cart-modal-holder').innerHTML = 
											'<div style="min-width:300px;" class="p-5 text-center">\
												<h3>Your cart is empty!</h3>\
												<a href="/products" class="btn" data-dismiss="modal" aria-label="Close"><i class="fa fa-angle-left"></i> Continue Shopping</a>\
											</div>';
											
										}
										
									});
								});									
						});
						
					 } 
					 
					  function flyoutCartInputUpdate() {
					 
						 $('.option-quantity').on('input', function(){
							 optionVal = $(this).val();
							 optionID = $(this).parents('div.cart-item').attr('data-product-id');
							 optUnit = $(this).parents('div.cart-item').find('.item-price').attr('data-item-price');
							 optTotalinCart = $(this).parents('div.cart-item').find('.item-total_price');
							 
							 Cart.updateItem(optionID, optionVal, function(cart) {
								Cart.refresh(function(cart) {
									$('.nav-link[href*="/cart") span').html(cart.item_count + ' Items');
									optTotalinCart.html(Format.money((optUnit * optionVal), true, true));
									if (currentCartCount > 0) {	
											$('.subtotal-row').html('Subtotal: ' + Format.money(cart.total, true, true));
									}
								});
							});
							 
						 });
					 
					 }
					 
					 flyoutCartInputUpdate();
					 flyoutCartItemDelete(); */
					 
					 
					 // Refresh Cart
					 /*  $('[data-target="#cart-modal-btn")').click(function(){
						 
						 Cart.refresh(function(cart) {
							 
							 var cartItemData = ''
							 var cartItemImg = [];
							 var cartItemId = [];
							 var cartItem = [];
								
									for (var x = 0; x < cart.items.length; x++){
										
										cartItemId[x] = cart.items[x].option;
										
											cartItem[x] = cart.items[x].product;
	
											cartItemData += '<div class="cart-item row no-gutters pb-4 mb-4 border-bottom" data-product-id="' + cart.items[x].id + '">\
													<div class="item-info no-gutters mb-3 row col-12">\
														<div class="item-image-holder row col-6">\
															<div class="item-image-current col-10 m-md-auto"><a data-img="' + cart.items[x].product + '" class="item-image" href="/product/' + cart.items[x].product + '" title="View ' + cart.items[x].name + '">[ITEM IMAGE]</a></div>\
															<div class="item_images">[IMAGES LOOP]</div>\
															<div class="swatch-options">[CART OPTIONS / UNIQUE OPTIONS LOOP]</div>\
														</div>\
														<div class="item-text d-flex flex-column justify-content-center col-6">\
															<div class="item-name h5"><a class="item-product-link" title="View ' + cart.items[x].name + '" href="/product/' + cart.items[x].product + '">' + cart.items[x].name + '</a></div>\
															<div class="item-option">' + cart.items[x].option + '</div>\
															<div class="item-price" data-item-price="' + cart.items[x].unit_price + '">' + Format.money(cart.items[x].unit_price, true, true) + '</div>\
														</div>\
													</div>\
													<div class="item-values align-items-center row no-gutters col-12 justify-content-center">\
														<div class="item-qty row justify-content-center col-6" data-cart-id="' + cart.items[x].id + '">\
															<div class="item-qty_input col-6 align-items-center d-flex row text-center">\
																<input type="number" name="cart[update][' + cart.items[x].id + ']" value="' + cart.items[x].quantity + '" autocomplete="off" min="1" class="option-quantity form-control text-center"> </div>\
															<div class="col-6 align-self-center remove-btn-holder">\
																<button class="btn btn-danger btn-sm item-delete remove-btn" type="button"  data-item-id="' + cart.items[x].id + '"><i class="material-icons">close</i></button>\
															</div>\
														</div>\
														<div class="item-total text-md-center text-right col-6">\
															<div class="item-total_price h5">' + Format.money(cart.items[x].price, true, true) + '</div>\
														</div>\
													</div>\
												</div>';
												
												
											Product.find(cartItem[x], function(product) {
												
												cartItemImg[x] = '<img src="' + product.images[0].url + '" class="img-responsive current-image" />';
												//console.log(cartItemImg[x]);
																					
												for (var a = 0; a < product.options.length; a++){
													//console.log("I've got " + product.options[a].id + " in the cart!" );
												}
												
											});	
											
											
									}
			
										
								$('.cart-body-in-modal').html(cartItemData);	
								
								flyoutCartInputUpdate();
								flyoutCartItemDelete();
					 
						 });
						 
					 }); */
					 
					 
					 /* $(".add-to-cart-btn").click(function(){
						 
							
						 
							var currOption = $('select[name="cart[add][id]")').val();
							var currProductName = document.querySelector('.product-intro h1').innerHTML;
							var currProductPrice = document.querySelector('.product-intro p').innerHTML;
							//var currProductImg = document.querySelector('.featured img').src;
							var currProductImg = document.querySelector('.product-thumbnails-list .swiper-slide.swiper-slide-active img').src;
							var currProductURL = document.querySelector('[data-current-product-slug]').getAttribute('data-current-product-slug');
							var currProductOpt1 = document.querySelector('.ot-name').innerHTML;
							
							$('[data-target="#cart-modal-btn")').trigger('click'); 
							Cart.addItem(currOption, 1, function(cart) {
								
								$('.add-to-cart-btn').text('Item Added');
								
								setTimeout(function(){ $('.add-to-cart-btn').text(USER("'Add to Cart' Text")) }, 2000);
	
								
								
								Cart.refresh(function(cart) {
									$('.nav-link[href*="/cart") span').html(cart.item_count + ' Items');
	
									var cartItemId = [];
			   
									
									if (currentCartCount  > 0) {	
										$('.subtotal-row').html('Subtotal: ' + Format.money(cart.total, true, true));
									}
									
									
									var flyoutCartBeginAlt = '<div id="cart-table" class="container-fluid px-2">\
												<form method="post" action="/cart" ="cart-form" class="cart-form">\
													<div class="cart-body cart-body-in-modal row">';
									
									
									var flyoutCartEndAlt = '</div>\
												<div class="cart-footer row">\
													<div class="checkout-info py-4 row col-12 text-right">\
														<div class="subtotal-row h3 mb-3 text-center col-12 ml-auto">Subtotal: ' + Format.money(cart.total, true, true) + '</div>\
														<div class="subtotal-info-row mb-3 text-center small col-12 ml-auto">Shipping, taxes, and discounts calculated at checkout.</div>\
														<div class="checkout-row col-12 row no-gutters">\
															<div class="col-12 ml-auto">\
																<button type="submit" name="checkout" title="' + USER("'Checkout' Text") + '" class="primary-btn btn button btn-block btn-lg checkout-btn rounded-0">' + USER("'Checkout' Text") + '</button>\
															</div>\
														</div>\
													</div>\
												</div>\
											</form>\
										</div>';
									
									
									var newCartItem = '<div class="cart-item row no-gutters pb-4 mb-4 border-bottom" data-product-id="' + currOption + '">\
											<div class="item-info no-gutters mb-3 row col-12">\
												<div class="item-image-holder row col-6">\
													<div class="item-image-current col-10 m-md-auto">\
														<a class="item-image" href="/product/' + currProductURL + '" title="View ' + currProductName + '"><img src="' + currProductImg + '" class="img-responsive current-image"></a>\
													</div>\
													<div class="item_images"><img src="https://assets.bigcartel.com/product_images/219743335/objects-tee_black_.jpg?auto=format&amp;fit=max&amp;w=900"></div>\
													<div class="swatch-options"><span data-index="1"><input name="objects-tee" data-title="Black" type="radio" id="black" value="black"><label data-item-url="/product/objects-tee" data-slug="objects-tee" data-title="Black" data-tag="Black" for="black"><span data-swatch="Black" class="color-swatch"></span><span class="label-text">Black</span></label>\
														</span>\
													</div>\
												</div>\
												<div class="item-text d-flex flex-column justify-content-center col-6">\
													<div class="item-name h5"><a class="item-product-link" title="View ' + currProductName + '" href="/product/' + currProductURL + '">' + currProductName + '</a></div>\
													<div class="item-option">' + currProductOpt1 + ' / S</div>\
													<div class="item-price" data-item-price="' + parseFloat(currProductPrice.replace(storeInfo.currencySign, '')) + '">' + currProductPrice + '</div>\
												</div>\
											</div>\
											<div class="item-values align-items-center row no-gutters col-12 justify-content-center">\
												<div class="item-qty row justify-content-center col-6" data-cart-id="' + currOption + '">\
													<div class="item-qty_input col-6 align-items-center d-flex row text-center">\
														<input type="number" name="cart[update][' + currOption + ']" value="1" autocomplete="off" min="1" class="option-quantity form-control text-center"> </div>\
													<div class="col-6 align-self-center remove-btn-holder">\
														<button class="btn btn-danger btn-sm item-delete remove-btn" type="button" data-item-id="' + currOption + '"><i class="material-icons">close</i></button>\
													</div>\
												</div>\
												<div class="item-total text-md-center text-right col-6">\
													<div class="item-total_price h5">' + currProductPrice + '</div>\
												</div>\
											</div>\
										</div>';
									
									if (currentCartCount  > 0) {								
										$('.cart-body-in-modal').append(newCartItem);
									} else {
										$('.cart-modal-holder').html(flyoutCartBeginAlt + newCartItem + flyoutCartEndAlt);
									}
									
									
									
	
								});
								
								 flyoutCartInputUpdate();
								 flyoutCartItemDelete();
								
							});
							
							var currentProductSlug = document.querySelector('div[data-template=product]').getAttribute('data-current-product-slug');
							var currSelectedOption = $('select[name*="cart[add][id]")').val();
							
							
								// Identify current product
								Product.find(currentProductSlug, function(product) {
								  for (var i = 0; i < product.options.length; i++){
									  if (product.options[i].id == currSelectedOption) {
										 // console.log("I've added " + product.name + ' : ' + product.options[i].name + '(' + product.options[i].id + ')' + "to the cart!");
										 // Add item to the cart
										 Cart.addItem(product.options[i].id, 1, function(cart) {
											
											
											
											// Refresh the cart
											Cart.refresh(function(cart) {
											  
											});
											  
										 });
										 
									  }
								  }
		 
							});
							
							
	
					}); */
						
						
	
				});
				
				
		});
		
		// Check if user exists (if Big Cartel Shop has been registered)
		if (snapshot.exists()){
			console.log('License Key is registered!')
			 loadTheme;
		} else {
			
			console.log('License Key is not registered. Create new user');
		
			firebase.database().ref().limitToLast(1).once('child_added', function(childSnapshot) {
					
					// Previous user ID method: parseInt(childSnapshot.key) + 1;
					console.log('Registered user ' + newUserID);
					

					 // Update data for user
					  
					  
					   firebase.database().ref(newUserID).update(presets._userInfo);
					   firebase.database().ref(newUserID).update(presets.street.install);
					   firebase.database().ref(newUserID).update(presets.street.demoContent);
					        
					        $(document).ready(function() {
					        
  					         $("body").prepend(
  					            '<header class="fixed-top">\
                              <div class="container-fluid py-4 d-flex justify-content-between align-items-center border-bottom">\
                                  <div class="col-md-2 col-4"><img src="https://themefiend.com/wp-content/uploads/theme-fiend-logo.svg"></div>\
                              </div>\
                          </header>\
                          <div class="page-wrap d-flex flex-row align-items-center" style="min-height: 100vh">\
                      		    <div class="container">\
                      		        <div class="row justify-content-center text-center">\
                      		            <div class="col-md-12 text-left">\
                      		                <h1 class="d-block font-weight-bold mt-3 mb-4" style="font-size: 50px">Theme Updated</h1>\
                      		                <div><button class="d-flex text-uppercase btn btn-lg installer-btn" onclick="window.top.location.reload()">Continue</button></div>\
                      		            </div>\
                      		        </div>\
                      		    </div>\
                      		</div>\
                      		<style type="text/css">body {padding-top: 0 !important}.installer-btn {background-color: rgb(109, 171, 60);box-shadow: none;font-weight: 400; display:flex;color: rgb(255, 255, 255);padding: 15px 30px;border-radius: 30px !important}</style>'
  					         );
  					         $(".loading_wrap").remove();

					        });
					   
					   
						    window.top.onbeforeunload = null;
	          				window.top.location.pathname = 'admin/design';
   
					   
				});
	
			
		}
		
	});
		
	
}
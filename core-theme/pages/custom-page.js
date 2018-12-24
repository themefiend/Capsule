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
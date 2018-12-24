	// Template: Category / Products
						
						var categoryPage = function() {
							
							
							var categoryHTML = 
								'<div class="mb-5 mt-3"><h1 class="h2 text-center text-uppercase">' + pageTitle + '</h1></div>' +
								prodGrid;
							
								document.querySelector('body').innerHTML += 
									loader +
									storeHeader + 
									'<div data-template="category" class="pt-4 px-4">' + 
										categoryHTML + 
									'</div>' + 
									storeFooter;		
							 
							 
						};
						
						
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
				window.location.href = '#';
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
			+ (typeof prodStatus !== undefined ? prodStatus : '') + 
			'<img alt="Image of ' + productData.products[x].title + '" src="' + productData.products[x].images[z] + '" data-image="' +  productData.products[x].images[z] + '"></div>';			
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
				prodParentOptionLoop += '<option data-index="' + uniqueNames.push(productData.products[x].product_options[a].title) + '" data-title="' + productData.products[x].product_options[a].tag + 
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
		
		prodPurchase += (productData.products[x].status=="sold-out" ? ' ' : '<div class="product-purchase mt-4">\
							<form method="post" action="/cart">\
							<div id="multiple_product_options" data-mpo-id="' + productData.products[x].id + '_id">\
								<div class="selector">\
									' + (productData.products[x].product_options[0].relationship == null && productData.products[x].product_options[0].original_title.indexOf('/') == -1 ? '' : '<div class="option-title">' + first_option_group_name + '</div>') + 
									parentOptionHandler +
								'</div>' + subOptions + '</div>\
							<div class="row">\
								<div class="col-sm-9 col-xs-12"><button class="primary-btn btn btn-lg btn-block rounded-0 add-to-cart-btn" name="submit" type="submit" title="' + USER("'Add to Cart' Text") + '">'
									+ USER("'Add to Cart' Text") + '</button>\
								</div>\
							</div>\
						</form>\
						</div>');
	
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
							'<div id="prod-desc-1" class="collapse show" aria-labelledby="prod-desc-head-1" data-parent="#product-info">\
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
		'<div class="product-description ' + prodDescWidth + '">\
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
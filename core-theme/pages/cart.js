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
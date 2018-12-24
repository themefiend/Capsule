// Product Grid
	
var prodGrid = '';
							
var prodGridBegin = '<div id="products-holder">';

if (location.pathname == '/' || window.location.href.indexOf('/product/') > -1) {
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
			statusType = '<span class="badge badge--sale badge-secondary py-2 px-3 position-absolute"><span class="h6">On Sale</span></span>';
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
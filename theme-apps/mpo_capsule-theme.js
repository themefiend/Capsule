
firebase.database().ref().orderByChild('License Key').equalTo(licenseKey).once("value", function(snapshot) {	
	
		/*!
			Zoom 1.7.20
			license: MIT
			http://www.jacklmoore.com/zoom
		*/
		(function(o){var t={url:!1,callback:!1,target:!1,duration:120,on:"mouseover",touch:!0,onZoomIn:!1,onZoomOut:!1,magnify:1};o.zoom=function(t,n,e,i){var u,c,r,a,m,l,s,f=o(t),h=f.css("position"),d=o(n);return t.style.position=/(absolute|fixed)/.test(h)?h:"relative",t.style.overflow="hidden",e.style.width=e.style.height="",o(e).addClass("zoomImg").css({position:"absolute",top:0,left:0,opacity:0,width:e.width*i,height:e.height*i,border:"none",maxWidth:"none",maxHeight:"none"}).appendTo(t),{init:function(){c=f.outerWidth(),u=f.outerHeight(),n===t?(a=c,r=u):(a=d.outerWidth(),r=d.outerHeight()),m=(e.width-c)/a,l=(e.height-u)/r,s=d.offset()},move:function(o){var t=o.pageX-s.left,n=o.pageY-s.top;n=Math.max(Math.min(n,r),0),t=Math.max(Math.min(t,a),0),e.style.left=t*-m+"px",e.style.top=n*-l+"px"}}},o.fn.zoom=function(n){return this.each(function(){var e=o.extend({},t,n||{}),i=e.target&&o(e.target)[0]||this,u=this,c=o(u),r=document.createElement("img"),a=o(r),m="mousemove.zoom",l=!1,s=!1;if(!e.url){var f=u.querySelector("img");if(f&&(e.url=f.getAttribute("data-src")||f.currentSrc||f.src),!e.url)return}c.one("zoom.destroy",function(o,t){c.off(".zoom"),i.style.position=o,i.style.overflow=t,r.onload=null,a.remove()}.bind(this,i.style.position,i.style.overflow)),r.onload=function(){function t(t){f.init(),f.move(t),a.stop().fadeTo(o.support.opacity?e.duration:0,1,o.isFunction(e.onZoomIn)?e.onZoomIn.call(r):!1)}function n(){a.stop().fadeTo(e.duration,0,o.isFunction(e.onZoomOut)?e.onZoomOut.call(r):!1)}var f=o.zoom(i,u,r,e.magnify);"grab"===e.on?c.on("mousedown.zoom",function(e){1===e.which&&(o(document).one("mouseup.zoom",function(){n(),o(document).off(m,f.move)}),t(e),o(document).on(m,f.move),e.preventDefault())}):"click"===e.on?c.on("click.zoom",function(e){return l?void 0:(l=!0,t(e),o(document).on(m,f.move),o(document).one("click.zoom",function(){n(),l=!1,o(document).off(m,f.move)}),!1)}):"toggle"===e.on?c.on("click.zoom",function(o){l?n():t(o),l=!l}):"mouseover"===e.on&&(f.init(),c.on("mouseenter.zoom",t).on("mouseleave.zoom",n).on(m,f.move)),e.touch&&c.on("touchstart.zoom",function(o){o.preventDefault(),s?(s=!1,n()):(s=!0,t(o.originalEvent.touches[0]||o.originalEvent.changedTouches[0]))}).on("touchmove.zoom",function(o){o.preventDefault(),f.move(o.originalEvent.touches[0]||o.originalEvent.changedTouches[0])}).on("touchend.zoom",function(o){o.preventDefault(),s&&(s=!1,n())}),o.isFunction(e.callback)&&e.callback.call(r)},r.setAttribute("role","presentation"),r.src=e.url})},o.fn.zoom.defaults=t})(window.jQuery);


		function getScript(source, callback) {
			var el = document.createElement('script');
			el.onload = callback;
			el.src = source;
			
			document.body.appendChild(el);
		}


	snapshot.forEach(function(data) {
	
			var userLicenseKey = licenseKey;

			 var userData = snapshot.child(data.key);
	         var USER = function (KEY) {
	         		return userData.child(KEY).val() || '';
	         }
	
			if (USER("License Key") == licenseKey) {
				
				// Multiple Product Option Selection Variables
			var first_option_selection_type, first_option_group_name, second_option_selection_type, second_option_group_name;
			
				first_option_selection_type = USER("First Product Option Group Style") || "";
				first_option_group_name = USER("First Product Option Group Name") || "Color";
				second_option_selection_type = USER("Second Product Option Group Style") || "";
				second_option_group_name = USER("Second Product Option Group Name") || "Size";
				
			}						
	
			
				(function($) {


					$(document).ready(function() {
						
							console.log('MPO Functionality detected');
		
						
						$('span.color-swatch').each(function() {
								if ($(this).css('background-color') == 'rgba(0, 0, 0, 0)' && $(this).css('background-image') == 'none' ) {
									$(this).remove();
								}
						});
						  
					  // ******Individual Product Page Scripts******
						
						//$("ul#product_thumbnails:first .thumbnail img").click(function(){ $(".product-image-gallery:first .featured img").hide();$(".product-image-gallery:first .featured img").attr('src',$(this).attr('src')).fadeIn(100);});		  		  
						//$("ul#product_thumbnails:first .thumbnail a").click(function(){$(".product-image-gallery:first .featured a").attr('href',$(this).attr('href'));});  
						
				  
					   $("#option, select:last").on('change', function(){
						 var current_price = $(this).find("option:selected").attr('data-price');
						 $("#product_content div.price.font-alt span.amount").html(current_price);
					   });
					   
		
						$("select#option").remove();
						
						var OptionImageChange = function() {
							
						  var parentVal = $(this).attr("value");
						  var selectedOption = $(this).attr("data-title");
						  
							$(".selected-option-name:first").html("<span data-swatch=" + selectedOption + " class=color-swatch></span><span>" + selectedOption + "</span>");
							
							$("option[data-quantity*=sold-out]").attr("disabled", "disabled");
							 
							 $("option[disabled] ~ option").click();
							 
							 $(".option-holder").removeClass("active");
							 					
		
							// $("ul#product_thumbnails:first li a[href*='_" + selectedOption + "_']:first, ul#product_thumbnails:first li img[src*='_" + selectedOption + "_']:first, ul[class*=thumbnails]:first li a[href*='_" + selectedOption + "_']:first").trigger("click");
							
							
		
							var text = "";
							var uniqueNamesAlt = []; 
							
							for(var x = 0; x < productData.products.length; x++){		
		
						
									for (var a = 0; a < productData.products[x].product_options.length; a++) {
									  for (var b = 0; b < productData.products[x].product_options[a].options.length; b++) {
									   if (productData.products[x].product_options[a].options[b].parent == parentVal && productData.products[x].product_options[a].options[b].product_id == productData.current_product_id) {
											if (uniqueNamesAlt.indexOf(productData.products[x].product_options[a].options[b].title) === -1) {
											  text += "<option" +  (productData.products[x].product_options[a].options[b].stock_status == "sold-out" ? " disabled " : " ") + "value=" + productData.products[x].product_options[a].options[b].id + " data-price=" + productData.products[x].product_options[a].options[b].price + ">" +  productData.products[x].product_options[a].options[b].title +  "</option>" + uniqueNamesAlt.push(productData.products[x].product_options[a].options[b].title);
											}
										}
									  }
									}
									
								if(document.querySelector(".mfp-wrap") == null){
									if (productData.products[x].product_options[0].relationship == null && productData.products[x].product_options[0].original_title.indexOf('/') == -1) {
									} else {
										window.history.pushState({urlPath:"?" + first_option_group_name.toLowerCase() + "=" + selectedOption.replace(/\+/g, "%20").replace("/", "-")},"","?" + first_option_group_name.toLowerCase() + "=" + selectedOption.replace(/\+/g, "%20").replace("/", "-"));	
									}												
										
								}
								
								if (window.location.href.indexOf("/product/") > -1) {
									$(".mfp-wrap, .mfp-content, .mfp-close").click(function(e){
										if (e.target == this) {
												window.location.href=document.location.href
										}					
									 });
								} 
		
							}	
							
							$(".select select[name*=cart]").html(text); 
							
							$(".option-title").html("<span>" + first_option_group_name + ":</span><span class='ot-name'>" + selectedOption.replace(/\+/g, " ").replace("-", "/") + "</span>");
							
							$("a[href*='_" + selectedOption + "_']").click(function(){
								var currHash = $(this).attr('href');
								window.location.hash = currHash;
								
							});
							
							$("a[href*='_" + selectedOption + "_']").trigger('click');
		
		
					   }
					   
					   
					   
						
						$(".parent-options input[type=radio]").bind("change click", OptionImageChange);
						
						
						var SelectOptionImageChange = function() {
							
		
						  var parentVal = $(this).val();
						  var DropdownSelectedOption = $(this).find(':selected').attr('data-title')
		
						  
							$(".selected-option-name:first").html("<span data-swatch=" + DropdownSelectedOption + " class=color-swatch></span><span>" + DropdownSelectedOption + "</span>");
							
							$("option[data-quantity*=sold-out]").attr("disabled", "disabled");
							 
							 $("option[disabled] ~ option").click();
							 
							 $(".option-holder").removeClass("active");
							
		
							// $("ul#product_thumbnails:first li a[href*='_" + DropdownSelectedOption + "_']:first, ul#product_thumbnails:first li img[src*='_" + DropdownSelectedOption + "_']:first, ul[class*=thumbnails]:first li a[href*='_" + DropdownSelectedOption + "_']:first").trigger("click");
		
							
							var text = "";
							var uniqueNamesAlt = []; 
							
							for(var x = 0; x < productData.products.length; x++){		
		
						
									for (var a = 0; a < productData.products[x].product_options.length; a++) {
									  for (var b = 0; b < productData.products[x].product_options[a].options.length; b++) {
									   if (productData.products[x].product_options[a].options[b].parent == parentVal && productData.products[x].product_options[a].options[b].product_id == productData.current_product_id) {
											if (uniqueNamesAlt.indexOf(productData.products[x].product_options[a].options[b].title) === -1) {
											 text += "<option" +  (productData.products[x].product_options[a].options[b].stock_status == "sold-out" ? " disabled " : " ") + "value=" + productData.products[x].product_options[a].options[b].id + " data-price=" + productData.products[x].product_options[a].options[b].price + ">" +  productData.products[x].product_options[a].options[b].title +  "</option>" + uniqueNamesAlt.push(productData.products[x].product_options[a].options[b].title);
											}
										}
									  }
									}
									
								if(document.querySelector(".mfp-wrap") == null){
									if (productData.products[x].product_options[0].relationship == null && productData.products[x].product_options[0].original_title.indexOf('/') == -1) {
									} else {
										window.history.pushState({urlPath:"?" + first_option_group_name.toLowerCase() + "=" + DropdownSelectedOption.replace(/\+/g, "%20").replace("/", "-")},"","?" + first_option_group_name.toLowerCase() + "=" + DropdownSelectedOption.replace(/\+/g, "%20").replace("/", "-"))
									}
								}
								
								if (window.location.href.indexOf("/product/") > -1) {
									$(".mfp-wrap, .mfp-content, .mfp-close").click(function(e){
										if (e.target == this) {
											$(window).scroll(function() {						
												window.location.href=document.location.href
											});	
										}					
									 });
								}
		
							}	
							
							$("#multiple_product_options .select.sub-options select[name*=cart]:last").html(text); 
							
		
					   }
						
						$(".parent-options select").bind("change", SelectOptionImageChange);
						
		
						
						// Choose product option on load (based on URL)
						
							
						if(window.location.href.indexOf("/product/") !== -1) {  
							 
							 for(var x = 0; x < productData.products.length; x++){	
							 
							 
								
								if (productData.products[x].id == productData.current_product_id) {
							
										for(var a = 0; a < productData.products[x].product_options.length; a++){ 
											 
												if(window.location.href.indexOf(first_option_group_name.toLowerCase() + "=" + productData.products[x].product_options[a].title.replace(' ', '%20').replace('/', '-')) !== -1) {
												   
												   var selectVal = $(".parent-options select option[data-title='" + productData.products[x].product_options[a].tag + "']").attr("value");
												   
												   $(".parent-options select").val(selectVal).trigger('change');
												   
												   var Chosen = productData.products[x].product_options[a].title.replace(' ', '+').replace('/', '-');
												   													   
												   
												   $("#multiple_product_options li label[data-swatch='" + productData.products[x].product_options[a].title + "']").click();
												   
												   $("a[href*='_" + Chosen + "_']").click(function(){
														var currHash = $(this).attr('href');
														window.location.hash = currHash;
														
													});
													
													$("a[href*='_" + Chosen + "_']").trigger('click');
																		   
												}
													 
												   
										 } 
										 
								}
								
								if (first_option_selection_type == 'Dropdown') {
									// Select a product option by default if there's only one default option
									var productSelectMenuHolder = document.querySelector(".parent-options.option-group .select");
									var productSelectMenu = document.querySelector(".parent-options.option-group .select select");
										
									if (typeof productSelectMenuHolder != 'undefined' && productData.products[0].product_options.length > 1 && productData.products[0].product_options[0].title.indexOf('Default') == -1) {
										productSelectMenuHolder.style.display = 'block';
									}
								
									if (typeof productSelectMenuHolder != 'undefined' && productData.products[0].product_options.length == 1) {
										productSelectMenu.selectedIndex = "1";
									}
									
								}
					
					
							 }
						
						}
						
						
						// ******Product Grid Scripts******
						
							var colorSwatches = document.querySelectorAll('.pol-inner');
							
							for (var i=0; i < colorSwatches.length; i++) {
								colorSwatches[i].style.visibility = 'visible';
							}
						
							$(".product_options_list label").on("mouseover", function() {
								var selectedOption = $(this).attr("data-tag");
								var selectedProduct = $(this).attr("data-slug");
								
								if ($("[data-slug*=" + selectedProduct + "][data-image*='" + selectedOption + "']").length) {
								
									$(".shop-item-image li[data-slug*='" + selectedProduct + "'][data-image*='_" + selectedOption + "_']:first, [class*=product] img[data-slug*='" + selectedProduct + "'][data-image*='_" + selectedOption + "_']:first,  img.product-image[data-slug*='" + selectedProduct + "'][data-image*='_" + selectedOption + "_']:first").css("display", "block");
									$(".shop-item-image li[data-slug*='" + selectedProduct + "']:not([data-image*='_" + selectedOption + "_']:first), [class*=product] img[data-slug*='" + selectedProduct + "']:not([data-image*='_" + selectedOption + "_']:first), img.product-image[data-slug*='" + selectedProduct + "']:not([data-image*='_" + selectedOption + "_']:first)").css("display", "none");
								}
							});

					  
					});
					
				})(jQuery);
		
	
		
	}


)});

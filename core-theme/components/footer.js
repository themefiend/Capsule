var storeFooter = '<footer class="page-footer font-small px-3 mt-5">\
						<div class="py-4 px-0 navbar navbar-expand-lg border-bottom row no-gutters">\
							<nav class="col-md-6 col-sm-12"><ul class="navbar-nav d-block text-center text-md-left">' + footerPageNav + 
								(USER("Contact Link Location").indexOf('Footer') > -1 ? '<li class="nav-item d-inline-block px-0"><a class="nav-link px-2 py-1" href="/contact">Contact</a></li>' : '') + '</ul>\
							</nav>\
							<nav class="col-md-6 col-sm-12"><ul class="navbar-nav d-block text-center text-md-right">' + socialLinksLoop + '</ul></nav>\
						</div>\
						<div class="footer-copyright py-4 text-left">&copy; ' + new Date().getFullYear() + ' Copyright <a href="/">' + USER("Store Name") + '</a><span class="tf-credit ml-2 pl-2 border-left">Designed by <a href="http://themefiend.com?ref=credit" target="_blank">Theme Fiend</a></span></div>\
					</footer>' + searchModal + stylesheet;
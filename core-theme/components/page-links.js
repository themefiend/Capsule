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
		}
		if (USER("Footer Links").indexOf(pagesData.page[x].url) > -1 || pagesData.page[x].name.indexOf('&') > -1) {
				footerPageNav += '<li class="nav-item d-inline-block px-0"><a class="nav-link px-2 py-1" href="/' + pagesData.page[x].url + '">' + pagesData.page[x].name.replace('(&)', '').replace('(!)', '').replace('(!!)', '').replace('(#)', '') + '</a></li>';
		}
	}
}
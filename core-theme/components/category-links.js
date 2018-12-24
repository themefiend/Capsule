// Category Links Output			
						
if (typeof categoriesData == 'undefined') {
	location.reload();
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
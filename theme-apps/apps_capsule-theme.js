function loadApp(app) {
	var script = document.createElement("script");
	script.src = 'https://s3.amazonaws.com/themefiend/capsule-theme/_version/v1/' + (typeof environment != 'undefined' ? environment : 'staging/') + 'theme-apps/' + app + '_capsule-theme.js';	
	document.head.appendChild(script);
}
		
// Lookbook App
loadApp('lookbook');
loadApp('mpo');
function loadApp(app) {
	var script = document.createElement("script");
	script.src = 'https://raw.githubusercontent.com/themefiend/Capsule/' + (typeof environment != 'undefined' ? environment : 'staging/') + 'theme-apps/' + app + '_capsule-theme.js';	
	document.head.appendChild(script);
}
		
// Lookbook App
loadApp('lookbook');
loadApp('mpo');

	
				var trialNum = Math.floor(Math.random() * 100000);
				var trialA = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
				var trialB = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
				var trialC = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
				var trialD = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
				var trialID =  trialA + trialB + trialC + trialD + '_' + trialNum;
				console.log(trialID);
				
				
	$.ajax({
		url: 'https://capsule-theme-licenses.firebaseio.com//.json',
		type: "GET",
		crossDomain: true,
		dataType: "json",
		success: function(data) {
			
			
			for (i=0; i < data.length; i++) {
				if (data[i]["License Key"] == licenseKey) {
					console.log('Valid License');
					var isLicensed = true;
					break;
				}		
			}
			
			if (isLicensed != true) {
				
				console.log('Invalid License');
					
				var trialModal = '<div id="' + trialID + '" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="trial-modal-label">\
						  <div class="buy-trial modal-dialog" role="document">\
							<div class="modal-content">\
							  <div class="modal-header">\
								<h5 class="modal-title">Buy Capsule</h5>\
								<button data-toggle="modal" data-target="#' + trialID + '"  type="button" class="close" data-dismiss="modal" aria-label="Close">\
								  <span aria-hidden="true">&times;</span>\
								</button>\
							  </div>\
							  <div class="modal-body p-5">\
								<p>Enjoying the Capsule theme trial? Buy Capsule now and unlock these powerful feartures for your shop!</p>\
								<a target="_blank" href="http://themefiend.com/theme/capsule?medium=trial-modal&ref=' + window.location.hostname + '&page=' + window.location.pathname.replace('/', '') + '#capsule-info" class="btn btn-primary">Buy Now</a>\
							  </div>\
							</div>\
						  </div>\
						</div><button style="display:none"  data-toggle="modal" data-target="#' + trialID + '"  type="button" class="open" data-toggle="modal" aria-label="Open">Open modal</button>\
						<style>\
						#' + trialID + ' .buy-trial.modal-dialog {display: block !important; position: absolute;left: 50%; top: 50%;transform: translateX(-50%) translateY(-50%)}\
						#' + trialID + ' {font-family: inherit;font-size: 16px;line-height: 1.75;margin: 0;font-weight: 300;}\
						#' + trialID + ' .h1, #' + trialID + ' h1 {font-size: 2.75rem;font-weight: 500;text-transform: uppercase; line-height: 1;margin-bottom: 2rem}\
						#' + trialID + ' .h2, #' + trialID + ' h2 {font-size: 2rem;margin-bottom: 2rem;margin-top: -0.5rem;color: #555;}\
						#' + trialID + ' .h3, #' + trialID + ' h3 {font-size: 1.75rem;font-family: inherit;color: #222;font-weight: 600}\
						#' + trialID + ' .h5, #' + trialID + ' h5 { font-size: 1.1rem;letter-spacing: 1px;}\
						#' + trialID + ' .modal-header {border-bottom: none;padding-top: 2rem}\
						#' + trialID + ' .modal-title {font-size: 2.75rem;text-transform: uppercase;margin-bottom: 0;line-height: 1.5;font-family: inherit; font-weight: 600;letter-spacing: 0;color: #000;display: block;width: 100%;}\
						#' + trialID + ' hr {border-top: 1px solid #ccc !important;margin-top: 0;}\
						#' + trialID + ' .btn-primary {background-color: #89c54a;border-color: #89c54a;border-radius: 100px;text-transform: uppercase;letter-spacing: 1px;font-size: 1rem;padding: 1rem;display: block;width: 100%;line-height: 1;margin-top: 2rem;}\
						#' + trialID + ' .btn-primary:hover {background-color: #53a007;border-color: #53a007;}\
						#' + trialID + ' input {width: 100%;display: block;border-radius: 100px;border-style: solid;border-width: 1px;border-color: #ddd;padding: 1rem;line-height: 1;box-sizing: border-box}\
						#' + trialID + ' textarea {overflow: auto;resize: vertical;display: block; width: 100%;border-radius: 30px;border-color: #ddd;padding: 1rem 1.5rem;height: 150px;margin-top: 1rem}\
						#' + trialID + ' .modal-content {border-radius: 0;border: 0;border-top: 8px solid #88c64a; text-align: center}\
						#' + trialID + ' input[type="text"] {text-align: center;font-weight: 300}\
						#' + trialID + ' label {color: #000 !important;font-weight: 600 !important;letter-spacing: 1px;}\
						#' + trialID + ' .p-5 {padding-top: 0 !important}\
						#' + trialID + ' .close {font-family: inherit;font-weight: 300;font-size: 2rem;position: absolute;right: 1rem}\
						#' + trialID + ' .modal-header .close {padding-top: 0;}\
						</style>';
						
						
						if (window.location.href.indexOf('about:blank') > -1 ) {
							
						} else {
							
							if(
							window.location.href.indexOf('streetcapsule.bigcartel.com') == -1 &&
							window.location.href.indexOf('capsuletheme.bigcartel.com') == -1 &&
							window.location.href.indexOf('fabcapsule.bigcartel.com') == -1 &&
							window.location.href.indexOf('rubycapsule.bigcartel.com') == -1
							) {
	
								$(trialModal).appendTo($("body"));
			
								
								$(document).ready(function(){
									setTimeout(function(){ 
										$('[data-target*="' + trialID + '"]').trigger('click');
									}, 10000);
								});
								
							}
							
						}
						
				
					
				
			}
			
	
		},
		error: function(xhr, status) {	
			
		}
	});













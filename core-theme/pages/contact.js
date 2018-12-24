			// Template: Contact Page


var contactPage = (function() {
	
	if(window.location.href.indexOf('/contact?success') > -1){
		var contactFormContent = '<div class="row d-block contact-success"><div class="col-12 mb-3 text-center h5">' +  USER("Contact Success Heading") + '</div><div class="col-12 mb-4 text-center">' +  USER("Contact Success Message") + '</div></div>';
	} else {
		var contactFormContent = '<div class="row d-block">\
												<div class="col-12">\
														<div class="form-group">\
															<label for="name">\
																Name</label>' +
																document.querySelector('.contactName').innerHTML + '\
														</div>\
														<div class="form-group">\
															<label for="email">\
																Email Address</label>\
															<div class="input-group"><span class="input-group-addon"><span class="glyphicon glyphicon-envelope"></span></span>' +
																document.querySelector('.contactEmail').innerHTML + '</div>\
														</div>\
														<div class="form-group">\
															<label for="subject">Subject</label>' +
																document.querySelector('.contactSubject').innerHTML + 
														'</div>\
														<div class="captcha-set row">\
															<div class="form-group col-md-3">\
																<label for="captcha-image">Captcha Image</label><div class="captcha-image">' +
																	document.querySelector('.contactCaptchaImage').innerHTML + '</div>\
															</div>\
															<div class="form-group col-9">\
																<label for="captcha-text">Enter Captcha Text</label>' +
																	document.querySelector('.contactCaptchaField').innerHTML + 
															'</div>\
														</div>\
													<div class="contact-message-holder">\
														<div class="form-group">\
															<label for="name">\
																Message</label>' +
																document.querySelector('.contactMessage').innerHTML + '</div>\
													</div>\
													<div class="ml-auto col-md-4 col-12">\
														<button id="contact-submit"  type="submit" class="primary-btn btn button btn-block btn-lg submit-btn rounded-0">Send Message</button>\
													</div>\
												</div>';
	}
	
	var contactPageHTML = '<div class="container">\
								<div class="col-12 col-md-8 mx-auto">\
									<div class="col-12">\
										<div class="border-1 px-3 pt-0">\
											<div class="col-12 mb-4 text-center">' + USER("Contact Intro Text") + '</div>\
												<div class="col-12 mt-2 mb-5 pb-3 border-bottom text-center">\
														<p class="contact_store-name mb-0">' + USER("Store Name") + '</strong></p>\
														<div class="contact_address mb-0"><address>' + USER("Contact Address").replace(/(?:\r\n|\r|\n)/g, '<br>') + '</address></div>\
														<p class="contact_phone-number mb-0">' + USER("Contact Phone Number") + '</p>\
														<p class="contact_email mb-0 "><a href="mailto:' + USER("Contact Email") + '">' + USER("Contact Email") + '</a></p>\
														<div class="m-4 text-center customer-service-info">' + USER("Customer Service Info") + '</div>\
												</div>\
											 <form id="contact-form" method="post" action="/contact?success=true">' + contactFormContent + '</form>\
											</div>\
										</div>\
									</div>\
								</div>\
							</div>';
							
							
			document.querySelector('body').innerHTML += 
			loader +
			storeHeader + 
			'<div data-template="contact" class="pt-4 px-4">' + 
			'<div class="mb-5 mt-3"><h1 class="h2 text-center text-uppercase">' + pageTitle + '</h1></div>' +
				contactPageHTML + 
			'</div>' + 
			storeFooter;

	
});
					

	function loadjscssfile(filename, filetype){
	    if (filetype=="js"){ //if filename is a external JavaScript file
	        var fileref=document.createElement('script')
	        fileref.setAttribute("type","text/javascript")
	        fileref.setAttribute("src", filename)
	    }
	    else if (filetype=="css"){ //if filename is an external CSS file
	        var fileref=document.createElement("link")
	        fileref.setAttribute("rel", "stylesheet")
	        fileref.setAttribute("type", "text/css")
	        fileref.setAttribute("href", filename)
	    }
	    if (typeof fileref!="undefined")
	        document.getElementsByTagName("head")[0].appendChild(fileref)
	}
	
  
	loadjscssfile("https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.js", "js");
	loadjscssfile("https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/js/bootstrap.bundle.min.js", "js");

	loadjscssfile("https://res.cloudinary.com/demo/raw/upload/jquery.ui.widget_ypnflw.js", "js");
	loadjscssfile("https://res.cloudinary.com/demo/raw/upload/jquery.iframe-transport_ajzwk5.js", "js");
	loadjscssfile("https://res.cloudinary.com/demo/raw/upload/jquery.fileupload_adf5kt.js", "js");
	loadjscssfile("https://res.cloudinary.com/demo/raw/upload/v1425809551/jquery.cloudinary_t0p9km.js", "js");
	
	loadjscssfile("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-colorpicker/3.0.0-beta.3/js/bootstrap-colorpicker.js", "js");
	
	loadjscssfile("https://fonts.googleapis.com/css?family=PT+Sans:400,400i,700,700i", "css");

	loadjscssfile("https://fonts.googleapis.com/icon?family=Material+Icons", "css");
	loadjscssfile("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-colorpicker/3.0.0-beta.3/css/bootstrap-colorpicker.min.css", "css");
	
	loadjscssfile("https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.5.9/js/mdb.min.js", "js");
	
	loadjscssfile("https://use.typekit.net/hss4wgu.js", "js");

	try{Typekit.load({"async":true});}catch(e){}
	
/* Customize Panel Interface */
 
 

var userLicense = licenseKey;

firebase.database().ref().orderByChild('License Key').equalTo(userLicense).once("value", function(snapshot) {
    snapshot.forEach(function(data) {
    	


      
      var adminHTML = 
		'<header class="fixed-top">\
		    <div class="container-fluid d-flex justify-content-between align-items-center border-bottom">\
				<div class="col-md-2 col-4"><img src="https://themefiend.com/wp-content/uploads/theme-fiend-logo.svg"></div>\
				<div class="customizer-bar col-md-3 col-3 d-flex justify-content-end"><div class=""><button data-action="save-changes" type="button" class="action-btn save-changes btn btn-lg" data-loading-text="<i class=&#x27;fa fa-circle-o-notch fa-spin&#x27;></i>  Saving...">Save Changes</button></div></div>\
			</div>\
			<div class="container-fluid d-flex justify-content-between align-items-center py-3 border-bottom">\
				<div class="btn-group btn-group-toggle" data-toggle="buttons">\
					<label class="tf-admin_tab btn btn-lg btn-link"><input type="radio" name="admin-view" data-admin-view="Presets" value="tf-admin_presets" autocomplete="off" checked=""><i class="material-icons mr-2">dashboard</i><span>Presets<span></label>\
					<label class="tf-admin_tab btn btn-lg btn-link active"><input type="radio" name="admin-view" data-admin-view="Home Page" value="tf-admin_home-page" autocomplete="off"><i class="material-icons mr-2">home</i><span>Home Page</span></label>\
					<label class="tf-admin_tab btn btn-lg btn-link"><input type="radio" name="admin-view" data-admin-view="Core Pages" value="tf-admin_core-pages" autocomplete="off"><i class="material-icons mr-2">settings</i><span>Core Pages</span></label>\
					<label class="tf-admin_tab btn btn-lg btn-link"><input type="radio" name="admin-view" data-admin-view="Appearance" value="tf-admin_appearance" autocomplete="off"><i class="material-icons mr-2">palette</i><span>Appearance</span></label>\
					<label class="tf-admin_tab btn btn-lg btn-link"><input type="radio" name="admin-view" data-admin-view="Layout" value="tf-admin_layout" autocomplete="off"><i class="material-icons mr-2">web</i><span>Layout</span></label>\
					<label class="tf-admin_tab btn btn-lg btn-link"><input type="radio" name="admin-view" data-admin-view="Extra Settings" value="tf-admin_extra-settings" autocomplete="off"><i class="material-icons mr-2">code</i><span>Extra Settings</span></label>\
			 	</div>\
			</div>\
		</header>\
		<form action="" method="post" class="customizer-form container-fluid"><div class="row customizer-form_holder col-12 mx-auto"></div></form>\
		<link rel="stylesheet" type="text/css" href="https://themefiend.com/_Capsule/' + (typeof environment != 'undefined' ? environment : '/master') + 'admin/admin_capsule-theme.css"/>';

    		
    
    
     /* var config = {
        apiKey: "AIzaSyC-FgFJGFfqOAUQm7V2VAiLAXK8ygmY8KA",
        authDomain: "capsule-theme-bigcartel.firebaseapp.com",
        databaseURL: "https://capsule-theme-bigcartel.firebaseio.com",
        projectId: "capsule-theme-bigcartel",
        storageBucket: "capsule-theme-bigcartel.appspot.com",
        messagingSenderId: "110118486824"
      };
      firebase.initializeApp(config); */
      
      
    var customizerForm = document.querySelector('.customizer-form_holder');
    
    	customizerForm.innerHTML += 
    		'<div class="options-container px-0 py-4 mb-4 container-fluid border-bottom">\
    				<div class="intro">\
    					<h1>Home Page</h1>\
    				</div>\
    		</div>';
      
      
      var userData = snapshot.child(data.key);
       var USER = function (KEY) {
       		return userData.child(KEY).val();
       }
       
     
	
	console.log(data);


	var checkboxes = [];
	var presetChoices = [];
	var listItems = [];
	var valuePush = [];
	
		// CHOOSE PRESET
			

	for (var a = 0; a < formData.items.length; a++) {
	
	  /* Value of each theme control = Corresponding value from the user's database record
		 Example: If user set 'Store Name' to 'Amazing Store', the value of the 'Store Name' input to 'Amazing Store'
	  */
	  formData.items[a].value = USER([formData.items[a].title]) || '';
	  

	  if (formData.items[a].type.toLowerCase() == 'section_header' && formData.items[a].title.indexOf('NEXT PAGE') == -1) { 
			  
				customizerForm.innerHTML += '<div data-category="tf-admin_' + formData.items[a].category + '"class="section-heading admin-category col-12 mt-3 mb-0 d-none"><h4>' + formData.items[a].title + '</h4></div>'
			  
	  } 
			  
			  
	  if (formData.items[a].type.toLowerCase() != 'section_header') {
	  
			  if (formData.items[a].type.toLowerCase() == 'section_header' && formData.items[a].title.indexOf('NEXT PAGE') > -1) { 
			  
				 customizerForm.innerHTML += '<div data-category="tf-admin_' + formData.items[a].category + '" class="row col-12 ' + (formData.items[a].controlWidth ? formData.items[a].controlWidth : 'col-md-12') + ' section-divider d-none"><hr/></div>'
			  
			  } else if (formData.items[a].title != "Choose a Preset" && formData.items[a].type.toLowerCase() == 'checkbox' || formData.items[a].title != "Choose a Preset" && formData.items[a].type.toLowerCase() == 'multiple_choice') {  
			    
				  for (var b = 0; b < formData.items[a].choices.length; b++) {	
				    
				     checkboxes[a] += 
				        '<div class="custom-control ' + (typeof formData.items[a].choices[b].image != 'undefined' ? 'image-option ' : '') + (formData.items[a].type.toLowerCase() == 'checkbox' ? '' : 'custom-radio') + '">\
				            <input ' + (formData.items[a].value != null && formData.items[a].value ? (formData.items[a].value != null && formData.items[a].value.indexOf(formData.items[a].choices[b]) > -1 ? 'checked ' : '') : '') + (typeof formData.items[a].choices[b].image != 'undefined' && formData.items[a].value && formData.items[a].value != null && formData.items[a].value.indexOf(formData.items[a].choices[b].value) != -1 ? ' checked ' : '') + 'name="' + formData.items[a].title  + '" type="' + (formData.items[a].type.toLowerCase() == 'checkbox' ? 'checkbox' : 'radio') + '" class="custom-control-input" value="' + (typeof formData.items[a].choices[b].image != 'undefined' ? formData.items[a].choices[b].value : formData.items[a].choices[b]) + '" id="' + formData.items[a].title.toLowerCase().replace(' ', '-').replace(/\s/gi, '-') + '_'+ (typeof formData.items[a].choices[b].image != 'undefined' ? formData.items[a].choices[b].value : formData.items[a].choices[b].toLowerCase().replace(' ', '-').replace(/\s/gi, '-')) + '" name="' + formData.items[a].title + '">\
				            <label class="custom-control-label" for="' + formData.items[a].title.toLowerCase().replace(' ', '-').replace(/\s/gi, '-') + '_'+ (typeof formData.items[a].choices[b].image != 'undefined' ? formData.items[a].choices[b].value :  formData.items[a].choices[b].toLowerCase().replace(' ', '-').replace(/\s/gi, '-')) + '"><div class="' + (typeof formData.items[a].choices[b].image != 'undefined' ? 'image-option_img ' : '') + '" style="background-image:url(' + (typeof formData.items[a].choices[b].image != 'undefined' ? formData.items[a].choices[b].image : '') + ');"></div><span>' + (typeof formData.items[a].choices[b].image != 'undefined' ? formData.items[a].choices[b].value :  formData.items[a].choices[b]) + '</span></label>\
				        </div>'; 
				
				  } 
			  
			      customizerForm.innerHTML += 
			      '<div data-category="tf-admin_' + formData.items[a].category + '" data-field-name="' + formData.items[a].title + '" class="form-field col-12 ' + (formData.items[a].controlWidth ? formData.items[a].controlWidth : 'col-md-6') + ' d-none">\
			    	<label>' + formData.items[a].title + '</label><p class="helper-text">' + formData.items[a].helpText + '</p>' + checkboxes[a].replace('undefined', '') +
			    '</div>'; 
			       
			  } else if (formData.items[a].title == "Choose a Preset") {  
			    
				  for (var b = 0; b < formData.items[a].choices.length; b++) {	
				    
				     presetChoices[a] += 
				     
						'<div class="theme-preset col-12 col-md-4 px-4 mb-5' + (USER("Choose a Preset") == formData.items[a].choices[b].value.toLowerCase() ? 'theme-preset--current' : '') + '">' +
							'<div class="shadow theme-preset_image-holder  mb-4">' +
								(USER("Choose a Preset") == formData.items[a].choices[b].value.toLowerCase() ? '<i class="fa fa-check"></i>' : '') +
								'<button data-action="theme-preset-selection" data-preset-name="' + formData.items[a].choices[b].value + '" type="button" class="theme-preset_btn">\
									<img src="' + formData.items[a].choices[b].image + '">\
								</button>' +
							'</div>' +
							'<h5>' + formData.items[a].choices[b].value + '</h5>' +
						'</div>';

				  } 
			  
			      customizerForm.innerHTML += 
			      '<div data-category="tf-admin_' + formData.items[a].category + '" data-field-name="' + formData.items[a].title + '" class="row theme-preset-list col-12 ' + (formData.items[a].controlWidth ? formData.items[a].controlWidth : 'col-md-12') + ' d-none">' + 
			    	presetChoices[a].replace('undefined', '') +
			    '</div>' +
			    
			    '<div class="preset-single container p-0" style="display:none">' +
				    '<div class="px-0 py-4 mb-0">\
				        <div class="intro">\
				            <button data-action="view-presets" type="button" class="btn btn-link px-0 mb-4"><i class="fa fa-caret-left mr-3"></i>Back to Presets</button>\
				        </div>' +
				    '</div>' +
				    '<div class="row">\
				        <div class="col-12 col-md-4">\
				            <h1 class="preset-view_name"></h1>\
				            <div class="preset-view_description mt-3"></div>\
				            <div class="view-preset_actions mt-5">\
				                <button data-loading-text="<i class=&#x27;fa fa-circle-o-notch fa-spin mr-2&#x27;></i>Installing Theme..." data-action="merge-install" type="button" class="mb-3 w-75 text-center action-btn d-block btn">Install Theme</button>\
								<button data-loading-text="<i class=&#x27;fa fa-circle-o-notch fa-spin mr-2&#x27;></i>Installing Theme..." data-action="full-install" type="button" class="mb-2 action-btn btn-sm btn-danger d-block align-items-center d-flex btn">Install + Demo Content</button>\
								<button data-action="view-preset-demo" type="button" class="btn btn-link my-3 p-0">View Demo</button>\
				            </div>\
				        </div>\
				        <div class="col-12 col-md-8 preset-view_image"><img class="shadow" src="https://themefiend.com/wp-content/uploads/ruby-thumb.jpg"></div>\
				    </div>\
				</div>'; 
			       
			  } else if (formData.items[a].type.toLowerCase() == 'list') {  
			  
				   for (var b = 0; b < formData.items[a].choices.length; b++) {	
				      listItems[a] += 
				    	'<li>\
				    		<input ' + (formData.items[a].value != null && formData.items[a].value ? (formData.items[a].value != null && formData.items[a].value.indexOf(formData.items[a].choices[b]) > -1 ? 'checked ' : '') : '') + (typeof formData.items[a].choices[b].image != 'undefined' && formData.items[a].value && formData.items[a].value != null && formData.items[a].value.indexOf(formData.items[a].choices[b].value) != -1 ? ' checked ' : '') + 'name="' + formData.items[a].title  + '" type="' + (formData.items[a].type.toLowerCase() == 'checkbox' ? 'checkbox' : 'radio') + '" class="custom-control-input" value="' + (typeof formData.items[a].choices[b].image != 'undefined' ? formData.items[a].choices[b].value : formData.items[a].choices[b]) + '" id="' + formData.items[a].title.toLowerCase().replace(' ', '-').replace(/\s/gi, '-') + '_'+ (typeof formData.items[a].choices[b].image != 'undefined' ? formData.items[a].choices[b].value : formData.items[a].choices[b].toLowerCase().replace(' ', '-').replace(/\s/gi, '-')) + '" name="' + formData.items[a].title + '">\
				    		<label for="' + formData.items[a].title.toLowerCase().replace(' ', '-').replace(/\s/gi, '-') + '_'+ (typeof formData.items[a].choices[b].image != 'undefined' ? formData.items[a].choices[b].value : formData.items[a].choices[b].toLowerCase().replace(' ', '-').replace(/\s/gi, '-')) + '"  class="dropdown-item">' + formData.items[a].choices[b] + '</label>\
				    	</li>';
				   }
				   
				   customizerForm.innerHTML += 
				     '<div data-category="tf-admin_' + formData.items[a].category + '" data-field-name="' + formData.items[a].title + '" class="form-field col-12 ' + (formData.items[a].controlWidth ? formData.items[a].controlWidth : 'col-md-6') + ' d-none"><label>' + formData.items[a].title + '</label>\
						  <div class="dropdown">\
						    	<button class="btn dropdown-toggle" type="button" data-toggle="dropdown"><span class="list-option-name">' + (formData.items[a].value != null && formData.items[a].value ? formData.items[a].value : "Select options") + '</span><span class="caret"></span></button>\
							    <ul class="dropdown-menu">\
							      ' + listItems[a].replace('undefined', '') + 
							    '</ul>\
						  </div>\
					   </div>';
			  
			  
			  } else if(formData.items[a].type.toLowerCase() == 'paragraph_text') {
			  
			  
					customizerForm.innerHTML += 
					    '<div data-category="tf-admin_' + formData.items[a].category + '" data-field-name="' + formData.items[a].title + '" class="form-field col-12 ' + (formData.items[a].controlWidth ? formData.items[a].controlWidth : 'col-md-6') + ' d-none">\
					      <label for="' + formData.items[a].title.toLowerCase().replace(/\s/gi, '-') + '">' + formData.items[a].title + '</label>\
					      <p class="helper-text">' + formData.items[a].helpText + '</p>' + 
					     (formData.items[a].value && formData.items[a].title.indexOf('TEMPORARY_REMOVAL') > -1 ? '<input class="tags-group">' : '<textarea name="' + formData.items[a].title + '" id="' + formData.items[a].title.toLowerCase().replace(' ', '-').replace(/\s/gi, '-') + '" class="form-control">' + formData.items[a].value + '</textarea>') +
					    '</div>';
			    
			    	var tagsList = [];
			    
			    
			    	/* if (formData.items[a].title.indexOf('Links') > -1) {        
			        
			        	tagsList[a] = formData.items[a].value.split(/[\r\n]+/);
			        
				        for (var i = 0; i < tagsList[a].length; i++) {
								//	$('div[data-field-name*="' + formData.items[a].title + '"] .tags-group').tagsinput('add', tagsList[a][i]);
				        }        
			
			 		 } */
			    
			   } else if(formData.items[a].type.toLowerCase() == 'export') {
			   	
			   	
			   		customizerForm.innerHTML += 
					    '<div data-category="tf-admin_' + formData.items[a].category + '" data-field-name="' + formData.items[a].title + '" class="form-field col-12 ' + (formData.items[a].controlWidth ? formData.items[a].controlWidth : 'col-md-6') + ' d-none">\
					      <label for="' + formData.items[a].title.toLowerCase().replace(/\s/gi, '-') + '">' + formData.items[a].title + '</label>\
					      <p class="helper-text">' + formData.items[a].helpText + '</p>' + 
					      '<a href="" target="_blank" data-loading-text="<i class=&#x27;fa fa-circle-o-notch fa-spin mr-2&#x27;></i>Exporting..." data-action="export-settings" class="mb-3 text-center align-items-center d-inline-flex btn-secondary btn"><i class="material-icons mr-2">cloud_download</i>Export Settings</a>' +
					    '</div>';
					    
			   } else if(formData.items[a].type.toLowerCase() == 'import') {
			   	
			   	
			   		customizerForm.innerHTML += 
					    '<div data-category="tf-admin_' + formData.items[a].category + '" data-field-name="' + formData.items[a].title + '" class="form-field col-12 ' + (formData.items[a].controlWidth ? formData.items[a].controlWidth : 'col-md-6') + ' d-none">\
					      <label for="' + formData.items[a].title.toLowerCase().replace(/\s/gi, '-') + '">' + formData.items[a].title + '</label>\
					      <p class="helper-text">' + formData.items[a].helpText + '</p>' + 
					      '<textarea rows="2" cols="50" data-action="imported-theme-settings" class="mb-3"></textarea>' +
					      '<a href="" target="_blank" data-loading-text="<i class=&#x27;fa fa-circle-o-notch fa-spin mr-2&#x27;></i>Exporting..." data-action="import-settings" class="mb-3 text-center align-items-center d-inline-flex btn-secondary btn"><i class="material-icons mr-2">cloud_upload</i>Import Settings</a>' +
					    '</div>';
			   
			   } else if(formData.items[a].type.toLowerCase() == 'file_upload') {
			   
			   	customizerForm.innerHTML +=  
				    '<div data-category="tf-admin_' + formData.items[a].category + '" data-field-name="' + formData.items[a].title + '" class="form-field col-12 ' + (formData.items[a].controlWidth ? formData.items[a].controlWidth : 'col-md-6') + ' d-none">\
				    		 <label for="' + formData.items[a].title.toLowerCase().replace(/\s/gi, '-') + '">' + formData.items[a].title + '</label>\
				    		 <p class="helper-text">' + formData.items[a].helpText + '</p>\
				        <div class="image-preview">\
				          <div class="image-preview_img">' + (formData.items[a].value ? '<img src="' + formData.items[a].value + '">' : '') + '</div>\
				          <label for="' + formData.items[a].title.toLowerCase().replace(/\s/gi, '-') + '_image-upload" class="upload-file">\
				            <span class="add-img"><i class="material-icons">add_circle_outline</i></span>\
				            <input id="' + formData.items[a].title.toLowerCase().replace(/\s/gi, '-') + '_image-upload" title="Upload Image" type="file" name="file" class="upload_field">\
				          </label>\
				          <input id="' + formData.items[a].title.toLowerCase().replace(' ', '-').replace(/\s/gi, '-') + '" value="' + (typeof formData.items[a].value != 'undefined' || formData.items[a].value ? formData.items[a].value : '') + '" type="hidden" class="image-input">\
				          <button title="Delete Image" type="button" class="delete-image"><span><i class="material-icons">delete</i></span></button>\
				      </div>\
				  </div>';
			
			   } else if(formData.items[a].type.toLowerCase() == 'sub_section') {
			  
				 customizerForm.innerHTML += 
				    '<div data-category="tf-admin_' + formData.items[a].category + '" data-field-name="' + formData.items[a].title + '" class="form-field col-12 col-md-12 my-3 d-none">\
				    	<h5>' + formData.items[a].title + '</h5>\
				    </div>';
			    
			    } else if(formData.items[a].type.toLowerCase() != 'page_break') {
			  
				 customizerForm.innerHTML += 
				    '<div data-category="tf-admin_' + formData.items[a].category + '" data-field-name="' + formData.items[a].title + '" class="form-field col-12 ' + (formData.items[a].controlWidth ? formData.items[a].controlWidth : 'col-md-6') + ' d-none">\
				      <label for="' + formData.items[a].title.toLowerCase().replace(/\s/gi, '-') + '">' + formData.items[a].title + '</label>\
				      <p class="helper-text">' + formData.items[a].helpText + '</p>\
				      <div class="form-field_input-holder ' + (formData.items[a].title.indexOf('Color') > -1 ? 'input-group colorpicker-component' : '') + '"><input ' + (formData.items[a].title.indexOf('License Key') > -1 ? 'disabled' : '') + ' value="' + (typeof formData.items[a].value != 'undefined' || formData.items[a].value ? formData.items[a].value : '') + '" type="' + (formData.items[a].title.indexOf('Email') > -1 ? 'email' : formData.items[a].type.toLowerCase()) + '" id="' + formData.items[a].title.toLowerCase().replace(' ', '-').replace(/\s/gi, '-') + '" class="form-control">' + (formData.items[a].title.indexOf('Color') > -1 ? '<label for="' + formData.items[a].title.toLowerCase().replace(/\s/gi, '-') + '"><span class="input-group-addon"><i style="background-color:' + (typeof formData.items[a].value != 'undefined' && formData.items[a].value && formData.items[a].title.indexOf('Color') > -1 ? formData.items[a].value : '') + '"></i></span></label>' : '') +
				    '</div></div>';
			    
			    }
	  }
	  
	}
    
    $(document).ready(function(){
    	
    	
	    	// Initial theme preset installation
	    	$(document.body).on('click', 'label[for*=choose-preset]', function(){
					 firebase.database().ref('/' + data.key).update(presets.street.install);
					 firebase.database().ref('/' + data.key).update(presets.street.demoContent);
					 setTimeout(function() {
	        			      window.top.onbeforeunload = null;
	          			    	window.top.location.reload();
	        		  }, 1000);
	    	});
	    
	    	
	    	function loadPresetDesc(preset) {
	    		return $(".preset-view_description").html(presets[preset].desc);
	    	}
	    	
	    	var presetName, presetImg;
	    	
	    	var currDate = new Date();
			var currentDate = currDate.toLocaleString();
	    	
	    	$(document.body).on('click', '[data-action=theme-preset-selection]', function(){
					presetName = $(this).attr('data-preset-name');
					presetImg = $(this).find('img').attr('src');
					$(".theme-preset-list, [data-category=tf-admin_presets], .options-container").fadeOut();
					$(".preset-single").fadeIn();
					$(".preset-single").attr('data-preset-name', presetName.toLowerCase());
					$('.preset-view_name').text(presetName);
					$('.preset-view_image img').attr('src', presetImg);
					//loadPresetDesc(presetName.toLowerCase());
					
					// View demo
			    	$(document.body).on('click', '[data-action="view-preset-demo"]', function(){
						window.open(presets[presetName.toLowerCase()].demoLink, "_blank", "")
			    	});
			    	
			    	var loadingThemeText = $('[data-action*="install"]').attr('data-loading-text');
			    	
			    	// Merge: Install theme (without demo images)
			    	$(document.body).on('click', '[data-action="merge-install"]', function(){
						$(this).html(loadingThemeText);
						firebase.database().ref('/' + data.key).update({"Last Updated" : currentDate});
						firebase.database().ref('/' + data.key).update(presets[presetName.toLowerCase()].install).then(function(){
							setTimeout(function() {
	        			      window.top.onbeforeunload = null;
	          			    	window.top.location.reload();
	        			   }, 1000);
						});
			    	});
	    	
	    			// Full: Install theme with demo images
	    			$(document.body).on('click', '[data-action="full-install"]', function(){
	    				$(this).html(loadingThemeText);
	    				firebase.database().ref('/' + data.key).update({"Last Updated" : currentDate});
	    				firebase.database().ref('/' + data.key).update(presets[presetName.toLowerCase()].install);
						firebase.database().ref('/' + data.key).update(presets[presetName.toLowerCase()].demoContent).then(function(){
							setTimeout(function() {
	        			      window.top.onbeforeunload = null;
	          			    	window.top.location.reload();
	        			   }, 1000);
						});
			    	});
	    			
	    	
			});
	    	
	    	
	    	// Back to 'View Presets'
	    	$(document.body).on('click', '[data-action=view-presets]', function(){
	    			presetName = '';
					$(".preset-single").fadeOut();
					$(".theme-preset-list, [data-category=tf-admin_presets], .options-container").fadeIn();
					
	    	});
	    	
    
			$('body').on('change', 'input[type=radio][name*=Alignment]', function() {
				var selectField = $(this).val();
				var formField = $(this).attr('name');
		    	$("[data-field-name='" + formField + "'] .list-option-name").text(selectField);
		    });
		
			$(".dropdown-menu > .form-control").on("keyup", function() {
			    var value = $(this).val().toLowerCase();
			    $(".dropdown-menu li").filter(function() {
			      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
			    });
			});
		
			$('[data-field-name*="Color"] input').colorpicker();
		 
			$('[data-field-name*="Color"] input').on('colorpickerChange', function(event) {
		        $(this).siblings('label').find('.input-group-addon i').css('background-color', event.color.toString());
		    });
		    
		    var userUpdates = {};
		    var checkedOptions = [];
		    
		    
		    function formValuesLoop() {
			    	for (var a = 0; a < formData.items.length; a++) {
				    	
						  if (formData.items[a].title != 'Choose a Preset') {
						      
								        checkedOptions[a] = [];
								      
					              if (formData.items[a].type.toLowerCase() == 'checkbox') {
					                  
					                  $('[data-field-name="' + formData.items[a].title + '"] input[name="' + formData.items[a].title + '"][type="checkbox"]:checked').each(function() {
					                     checkedOptions[a].push($(this).val());
					                  });
					                  
					                 formData.items[a].value = checkedOptions.join(',');
					        
					
					              } else if (formData.items[a].title == 'Big Cartel Domain') {
					              
					                formData.items[a].value = storeURL;
					              
					              } else if (formData.items[a].title == 'License Key') {
					              
					                formData.items[a].value = licenseKey;
					              
					              } else {
					             
								      		formData.items[a].value = 
								      		  $('[data-field-name="' + formData.items[a].title + '"]:not([data-field-name="Big Cartel Domain"]) input:not([type="file"]):not([type="radio"]):not([type="checkbox"])').val() || 
								      		  $('[data-field-name="' + formData.items[a].title + '"] input[type="radio"]:checked').val() || 
								      		  $('[data-field-name="' + formData.items[a].title + '"] textarea').val() || 
								      		  $('[data-field-name="' + formData.items[a].title + '"] select').val() ||
								      		  '';
								      		  
					              }
					              
						  }
				        	
				        userUpdates[formData.items[a].title] = formData.items[a].value;     
				        
				        
				  	}

				  
		    }
		    
		    
		    // EXPORT: Export customization settings
		   
		    $(document.body).on('mouseover', '[data-action*="export-settings"]', function(){
		    	
		    	formValuesLoop();
		    	
		    	delete userUpdates["License Key"];
		    	
		    	var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(userUpdates));
				$('[data-action*="export-settings"]').attr('href', 'data:' + data);
				$('[data-action*="export-settings"]').attr('download', 'theme-settings.json');
		    	
		    	
		    	setTimeout(function() {
		    		console.log(userUpdates);
		    	}, 1000);
		    	
		    });
		    
		    // IMPORT: Import customization settings
		    
		    $(document.body).on('click', '[data-action*="import-settings"]', function(){
		    	
		    	var userImportData = JSON.parse($('[data-action="imported-theme-settings"]').val());
		    	
		    	 firebase.database().ref('/' + data.key).update(userImportData).then(function(){
        			
        			   console.log("Your settings have been imported.");
        			   
        			   firebase.database().ref('/' + data.key).update({"Last Updated" : currentDate});
            
			           setTimeout(function() {
        			    	$('[data-action*="save-changes"]').html('Saved');
        			    	$('[data-action*="save-changes"]').css('background-color', '#ccc')
        			    }, 500);
			    
			           setTimeout(function() {
        			      //window.top.onbeforeunload = null;
          			      //window.top.location.reload();
          			      window.close();
        			   }, 1000);
        			   
        		});
		    	
		    });



		
		    // SAVE: Saves customization changes
		    
			$(document.body).on('click', '[data-action*="save-changes"]', function(){
				
				var loadingText = $('[data-action*="save-changes"]').attr('data-loading-text');
				
				  $('[data-action*="save-changes"]').html(loadingText);
				  
				formValuesLoop();
			  	
			  	document.querySelector('#TFConfigPanel .customizer-form').style.setProperty("display", "none", "important");

			  	
			    firebase.database().ref('/' + data.key).update(userUpdates).then(function(){
        			
        			   console.log("Your changes have been saved.");
        			   
        			   firebase.database().ref('/' + data.key).update({"Last Updated" : currentDate});
        			   
        			   // Save Pages
        			   var Pages = [];
        			   var x = '0';
        			   for(var x=0; x < pagesData.page.length; x++){
					      Pages.push({ "name": pagesData.page[x].name, "url": pagesData.page[x].url});
					      for(var y=0; y < pagesData.page[x].sub_page.length; y++){
					    	  Pages.push({"name": pagesData.page[x].sub_page[y].name, "parentName": pagesData.page[x].sub_page[y].parent_name, "url": pagesData.page[x].sub_page[y].url});
					   	  }
					   }
	
					   
					   // Save Categories
        			   var Categories = [];
        			   var x = '0';
        			   for(var x=0; x < categoriesData.category.length; x++){
					      Categories.push({"name": categoriesData.category[x].name, "url": categoriesData.category[x].url});
					      for(var y=0; y < categoriesData.category[x].sub_category.length; y++){
					    	 Categories.push({"name": categoriesData.category[x].sub_category[y].name , "parentName": categoriesData.category[x].sub_category[y].parent_name, "url": categoriesData.category[x].sub_category[y].url});
						  }
					   }
					   
					   // Save Products
        			   var Products = [];
        			   var x = '0';

        			   for(var x=0; x < productGridData.products.length; x++){
					      Products.push({ "title": productGridData.products[x].title, "url": productGridData.products[x].url});
					   }
					   
        			    
        			   firebase.database().ref('/' + data.key).update({"Store Data": {Pages, Categories, Products}});		
        			   
				 
            
			           
			           setTimeout(function() {
        			    	$('[data-action*="save-changes"]').html('Saved');
        			    	$('[data-action*="save-changes"]').css('background-color', '#ccc')
        			    }, 500);

			    
			           setTimeout(function() {
        			      window.top.onbeforeunload = null;
          			    	window.top.location.reload();
        			   }, 1000);
        			   
          }).catch(function(error) {
	            alert("There was an error saving your changes. " + error);
          });
			    
			    
			});
			
			
		
		
			// UPLOAD: Adds image to Firestore
			
			$(document).ready(function(){
					
				var auth = firebase.auth();
    			var storageRef = firebase.storage().ref();  
    			
    			var imgNum = Math.floor(1000 + Math.random() * 9000);

    			$('input[type="file"]').change(function(e) {
			           e.stopPropagation();
			           e.preventDefault();
			           var currentField = $(this).parents("div[data-field-name]").attr('data-field-name');
			           var currentInput = $(this).parents("div[data-field-name]").find(".image-input").attr('id');
			           var fileName = e.target.files[0].name + '_' + imgNum;
			           var file = e.target.files[0];
			           var metadata = {
			               'contentType': file.type
			           };
			           var uploadTask = storageRef.child('/' + data.key).child('/' + currentInput).child(file.name).put(file, metadata);
			           uploadTask.on('state_changed', null, function(error) {
			           }, function() {
			               var uploadedImage = 'https://firebasestorage.googleapis.com/v0/b/capsule-theme-bigcartel.appspot.com/o/' + data.key + '%2F' + currentInput + '%2F' + file.name + '?alt=media';
			               $('[data-field-name="' + currentField + '"] .image-preview_img').html('<img width="200" src="' + uploadedImage + '">');
			               $('[data-field-name="' + currentField + '"] .image-input').val($('[data-field-name="' + currentField + '"] .image-preview_img img').attr('src'));
			           });
			      });
	              
			}); 
	
			
			// DELETE: Adds image to 'List of images to delete' database (for deletion queue)
			
			var deleteImage = function() {
				
				var parentOfImage = $(this).parents('div[data-field-name]').attr('data-field-name');
				var delImgSrc = $('[data-field-name="' + parentOfImage + '"] .image-input').val();
				
				if (delImgSrc.indexOf('cloudinary') > -1) {
					
					// Add image to deletion record on Cloudinary
					// (Note: This method to be removed by January 2019. Migrate all images to Firebase by then.)
					
					var imgDeletionList = "https://sheetsu.com/apis/v1.0su/2f4d0c7fe003"; 

				    var objToday = new Date(),
		        	weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
		        	dayOfWeek = weekday[objToday.getDay()],
		        	// domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
		        	dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() : objToday.getDate(),
		        	months = new Array('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'),
		        	curMonth = months[objToday.getMonth()],
		        	curYear = objToday.getFullYear(),
		        	curHour = objToday.getHours(),
		        	curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
		        	curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds();
		          var today = curMonth + "/" + dayOfMonth + "/" + curYear + " " + curHour + ":" + curMinute + ":" + curSeconds;
		
		
						  var imageRecord = { 'Image URL': delImgSrc, 'Date': today, 'Website': storeInfo.shopURL, 'License Key': userLicense};    
						  $.ajax({ 
						    	type: "POST", 
						    	url: imgDeletionList, 
						    	data: imageRecord, 
						    	success: '' 
						  });
						  console.log('Image added to deletion databse: ' + imageRecord['Image URL']);
						  document.querySelector('[data-field-name="' + parentOfImage + '"] .image-preview_img').innerHTML = '';  
						  document.querySelector('[data-field-name="' + parentOfImage + '"] .image-input').value = '';
					
				} else {
					
					// Remove image from firebase
					// (Note: Images hosted on Firebase as of October 1, 2018)
						
							var desertRef = firebase.storage().refFromURL(delImgSrc);
			
							// Delete the file
							desertRef.delete().then(function() {
							  // File deleted successfully
							  console.log('Image deleted');
							  document.querySelector('[data-field-name="' + parentOfImage + '"] .image-preview_img').innerHTML = '';  
							  document.querySelector('[data-field-name="' + parentOfImage + '"] .image-input').value = '';
							  
							  var imageUpdate = {};
							  
								  for (var a = 0; a < formData.items.length; a++) {
						              if (formData.items[a].title == parentOfImage) {
						                	formData.items[a].value = document.querySelector('[data-field-name="' + formData.items[a].title + '"] input[type="file"]').files[0].path;
						              } 
								      imageUpdate[formData.items[a].title] = formData.items[a].value;       
								  }
								  	

								 formValuesLoop();
							  		
								 firebase.database().ref('/' + data.key).update(imageUpdate);
								  

		    					  // firebase.database().ref('/' + data.key).update(userImportData)
			 
							}).catch(function(error) {
							  // Uh-oh, an error occurred!
							});
							
							
				}
				
			}

			
			$(document.body).on('click', '.delete-image', deleteImage);

    });
    
    
    /* Launch Admin (Customize and Preview) */
      		
      if (window.location.href.indexOf('about:blank') > -1 ) {
       
      	$(document).ready(function(){
      	    $('body').addClass('bc-admin preview-overlay');
      	    
      	    var userCustomCSS = document.querySelector('[data-stylesheet="custom-css"]');
	      	var presetCSS = document.querySelector('[data-stylesheet="preset-css"]');
	      	
	      	$('body').on('click', '.customize-mode', function(){ 
				userCustomCSS.disabled = true;
				presetCSS.disabled = true;
	      		$('body').addClass('customize-mode-view');
	      		$('body').removeClass('preview-overlay');
	      		$(this).removeClass('customize-mode--bouncy');
	      	});
      	//	document.querySelector('#TFConfigPanel').innerHTML += adminHTML;
      	});
      	
      	$('body').on('click', '.preview-mode', function(){ 
      		//$('body').removeClass('customize-mode-view');
      		$('[data-action="save-changes"]').trigger('click');
      	});
      	
      	$('body').on('click', '.live-store', function(){ 
      		window.open(storeURL, "_blank", "");
      	});
      	
      
      	
      	setTimeout(function(){ 
      		$('body.preview-overlay').removeClass('preview-overlay');
      	}, 2500);

		
      	
      	
      	$('[data-category*="home"]').removeClass('d-none');
      	
          $('body').on('change', '[name="admin-view"]' , function(){
          	 $(".preset-single").fadeOut();
          	 $(".theme-preset-list, [data-category=tf-admin_presets], .options-container").css("display", "");
              var activeAdminPanel = {
              	value: $("[name='admin-view']:checked").val(),
              	name:  $("[name='admin-view']:checked").attr('data-admin-view')
              }
              $('[data-category="' + activeAdminPanel.value + '"]').removeClass('d-none');
              $('[data-category]:not([data-category="' + activeAdminPanel.value + '"])').addClass('d-none');
             
              $('.customizer-form_holder .intro h1').text(activeAdminPanel.name);
          });
          
      }
      
    
    
  });


});


      
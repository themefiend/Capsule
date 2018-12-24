// Default styles
var background_color = (USER("Body Background Color") ? USER("Body Background Color") : '#FFF');
var body_text_color = (USER("Body Text Color") ? USER("Body Text Color") : '#000');
var headings_text_color = (USER("Headings Text Color") ? USER("Headings Text Color") : '#000');
	
var header_color = (USER("Header Background Color") ? USER("Header Background Color") : '#FFF');				
var header_navigation_link_color = (USER("Header Navigation Link Color") ? USER("Header Navigation Link Color") : '#000');
var header_navigation_link_hover_color = (USER("Header Navigation Link Hover Color") ? USER("Header Navigation Link Hover Color") : '#999');
var accent_color = (USER("Accent Color") ? USER("Accent Color") : 'gold');

var link_color = (USER("Inline Link Color") ? USER("Inline Link Color") : '#666');

var primary_button_bg_color = (USER("Primary Button Background Color") ? USER("Primary Button Background Color") : '#111');
var primary_button_tx_color = (USER("Primary Button Text Color") ? USER("Primary Button Text Color") : '#FFF');

var secondary_button_bg_color = (USER("Secondary Button Background Color") ? USER("Secondary Button Background Color") : '#efefef');
var secondary_button_tx_color = (USER("Secondary Button Text Color") ? USER("Secondary Button Text Color") : '#666');

var hero_heading_tx_color = (USER("Hero Heading Color") ? USER("Hero Heading Color") : '#ffffff' );

var footer_link_color = (USER("Footer Navigation Link Color") ? USER("Footer Navigation Link Color") : '#666');


var navigation_font = (USER("Navigation Font Family") ? USER("Navigation Font Family") : 'Barlow');
var headings_font = (USER("Headings Font Family") ? USER("Headings Font Family") : 'Barlow Semi Condensed');
var body_font = (USER("Body Font Family") ? USER("Body Font Family") : 'Barlow');

// Font Size Settings
var body_font_size, headings_font_size, navigation_font_size, button_font_size;

body_font_size = {
setting: (USER("Body Font Size") ? USER("Body Font Size") : 'Medium'),
small: 
  'body {font-size: 14px}'
,
medium: 
  ''
,
large: 
  'body {font-size: 18px}'
};

headings_font_size = {
setting: (USER("Headings Font Size") ? USER("Headings Font Size") : 'Medium'),
small: 
  'h1, .h1 {font-size: 2rem} h2, .h2 {font-size: 1.5rem} h3, .h3 {font-size: 1.25rem} h4, .h4 {font-size: 1rem} h5, .h5 {font-size: .75rem} h6, .h6 {font-size: .5rem}' +
  '.hero-text h2 {font-size: 2.5rem}' +
  '@media screen and (max-width: 767px) {\
  }'
,
medium: 
  ''
,
large: 
  'h1, .h1 {font-size: 3rem} h2, .h2 {font-size: 2.5rem} h3, .h3 {font-size: 2.25rem} h4, .h4 {font-size: 2rem} h5, .h5 {font-size: 1.75rem} h6, .h6 {font-size: 1.5rem}' +
  '.hero-text h2 {font-size: 7.5rem}' +
  '@media screen and (max-width: 767px) {\
  }'
};

navigation_font_size = {
setting: (USER("Navigation Font Size") ? USER("Navigation Font Size") : 'Medium'),
small: 
  'header nav .nav-link {font-size: .8rem} header .navbar .material-icons {font-size: 1rem; line-height: 1;}'
,
medium: 
  ''
,
large: 
  'header nav .nav-link {font-size: 1.3rem} header .navbar .material-icons {font-size: 1.5rem; line-height: 1;}'
};

button_font_size = {
setting: (USER("Button Font Size") ? USER("BUtton Font Size") : 'Medium'),
small: 
  '.btn-lg {font-size: .75rem}'
,
medium: 
  ''
,
large: 
  '.btn-lg {font-size: 1.75rem}'
};

// Preset Stylesheet Reference
var themePreset;

themePreset = {
  handle: USER("Choose a Preset").toLowerCase() || 'street',
};

themePreset.styles = '<link data-stylesheet="preset-css" href="https://s3.amazonaws.com/themefiend/capsule-theme/_version/v1/' + (typeof environment != 'undefined' ? environment : 'staging/') + 'theme-presets/' + themePreset.handle + '/styles.css" rel="stylesheet">'

// Stylesheet
var stylesheet = 
'<style data-stylesheet="custom-css" type="text/css">' +  
	'body:not(.bc-admin) {background-color:' + background_color + '; font-family: ' + body_font + '}' + 
	'.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6, .cb-text-inner * {font-family: ' + headings_font + '; color: ' + headings_text_color + '}' +
	'p, .cb-text-inner .cb-text-info, .product-title a, div, li {color: ' + body_text_color + '}' +
	'a.navbar-brand { font-family: ' + headings_font + '; color:' + header_navigation_link_color + '}' +
	'a {color:' + link_color + '}' +
	'a:hover, a:active, a:focus {text-decoration: none; opacity:.7, color: ' + link_color + '}' +
	'header nav {background-color:' + header_color + '}' + 
	'header nav .nav-link, header nav .btn-link, button.search-btn {color:' + header_navigation_link_color + '}' +
	'header nav .nav-link:hover, header nav .btn-link:hover, button.search-btn:hover {color:' + header_navigation_link_hover_color + '}' +
	'header nav .nav-link.active {border-bottom-color:' + accent_color + '}' +
	'body .swiper-pagination-bullet-active, div.product .badge {background: ' + accent_color + '}' +
	'.slick-dots li.slick-active {background-color: ' + accent_color + ' !important}' +
	'.dropdown-item.active, .dropdown-item:active {color: #fff; background-color: ' + accent_color + '}' +
	'.cb-text:before {background-color: ' + accent_color + '}' +
	'.btn-link {color:' + link_color + '}' +
	'.primary-btn {background-color: ' + primary_button_bg_color + '; color: ' + primary_button_tx_color + '}' +
	'.primary-btn:hover {color: ' + primary_button_tx_color + '}' +
	'.page-link, .secondary-btn {background-color: ' + secondary_button_bg_color + '; color: ' + secondary_button_tx_color + '}' +
	'.cover-text h1, .cover-text h2, .hero-text *, .cover-text p, .lb-caption, .lb-caption *, [data-media-card-style*=Overlay] .cb-text * {color:' + hero_heading_tx_color + '}' +
	'footer a {color: ' + footer_link_color + '}' + 
	body_font_size[body_font_size.setting.toLowerCase()] +
	headings_font_size[headings_font_size.setting.toLowerCase()] +
	navigation_font_size[navigation_font_size.setting.toLowerCase()] +
	button_font_size[button_font_size.setting.toLowerCase()] +
	unescape(USER("Custom CSS")) +
'</style>' +
themePreset.styles +
'<link href="https://fonts.googleapis.com/css?family=' + navigation_font.replace(/ /g, "+") + ':100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">\
<link href="https://fonts.googleapis.com/css?family=' + headings_font.replace(/ /g, "+") + ':100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">\
<link href="https://fonts.googleapis.com/css?family=' + body_font.replace(/ /g, "+") + ':100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">';

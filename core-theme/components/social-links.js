var socialLinks = USER("Social Media Links").split('\n');
var socialLinksLoop = '';

for(var x=0; x < socialLinks.length; x++){
		if (socialLinks[x].indexOf('facebook') > -1) { var socialIcon = 'fa-facebook-f'; }
		else if (socialLinks[x].indexOf('twitter') > -1) { var socialIcon = 'fa-twitter'; }
		else if (socialLinks[x].indexOf('instagram') > -1) { var socialIcon = 'fa-instagram'; }
		else if (socialLinks[x].indexOf('pinterest') > -1) { var socialIcon = 'fa-pinterest'; }
		else if (socialLinks[x].indexOf('youtube') > -1) { var socialIcon = 'fa-youtube'; }
		else if (socialLinks[x].indexOf('vimeo') > -1) { var socialIcon = 'fa-vimeo'; }
		else if (socialLinks[x].indexOf('etsy') > -1) { var socialIcon = 'fa-etsy'; }
		else if (socialLinks[x].indexOf('tumblr') > -1) { var socialIcon = 'fa-tumblr'; }
		else if (socialLinks[x].indexOf('wordpress') > -1) { var socialIcon = 'fa-wordpress'; }
		else { var socialIcon = null;}
	socialLinksLoop += '<li class="d-inline-block"><a target="_blank" href="' + socialLinks[x] + '" class="btn btn-sq-xs">' + (socialIcon ? '<i class="fab ' + socialIcon + '"></i>' : socialLinks[x].replace('http://', '').replace('https://', '')) + '</a></li>';
}
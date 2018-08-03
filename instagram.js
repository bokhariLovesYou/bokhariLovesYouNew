document.querySelector('body').setAttribute("id", "one");  

setTimeout(
    function() {

var d1 = document.getElementById('one');
d1.insertAdjacentHTML('beforeend', '<div style="" id="ig-popup"><div class="ig-flex"><div class="ig-image"></div><div class="ig-content"><h2>Follow us on Instagram!</h2><hr><p>Always be the first to know about new arrivals, sales and sneak peaks</p><a href="https://www.instagram.com/lux_zurich/" target="_blank"><button id="browse">browse now</button></a><button id="close">X</button></div></div></div><div style="" id="overlay"></div>');



var overlay = document.getElementById('overlay');
var close = document.getElementById('close');


overlay.addEventListener('click', function() { 

	document.getElementById('ig-popup').classList.add('hide-me');
	document.getElementById('overlay').classList.add('hide-me');

	setTimeout(
		function() {

		document.getElementById('ig-popup').classList.add('display-none');
	document.getElementById('overlay').classList.add('display-none');

		}, 300);

 }, false);

close.addEventListener('click', function() { 

	document.getElementById('ig-popup').classList.add('hide-me');
	document.getElementById('overlay').classList.add('hide-me');

	setTimeout(
		function() {

		document.getElementById('ig-popup').classList.add('display-none');
	document.getElementById('overlay').classList.add('display-none');

		}, 300);

 }, false);


 }, 5000);



  	function checkCookie() {
	    var username = getCookie("returningUser");
	    if (username != "") {
	setTimeout(
    function() {
    document.getElementById('ig-popup').classList.add('display-none');
	document.getElementById('overlay').classList.add('display-none');
    }, 5000);
	    } 
	}	


checkCookie();



	function setCookie(cname, cvalue, exdays) {
	    var d = new Date();
	    d.setTime(d.getTime() + (exdays*24*60*60*1000));
	    var expires = "expires="+ d.toUTCString();
	    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}

	function getCookie(cname) {
	    var name = cname + "=";
	    var decodedCookie = decodeURIComponent(document.cookie);
	    var ca = decodedCookie.split(';');
	    for(var i = 0; i <ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0) == ' ') {
	            c = c.substring(1);
	        }
	        if (c.indexOf(name) == 0) {
	            return c.substring(name.length, c.length);
	        }
	    }
	    return "";
	}



	setCookie('returningUser', 'set', 1 );

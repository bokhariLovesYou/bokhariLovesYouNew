document.addEventListener('DOMContentLoaded', function() {
	// Add Content For Brand Pages Over Here As Variables
	var hermesTitle = 'Secondhand Hermes Handbags, Scarves, Shoes & Accessories'
	var hermesParagraph = 'Hermes is one of the top designers you’ll find here at LUX. We carry a wide variety of secondhand Hermes handbags and other items, with options that can match any look and personality. Whether you’re looking for the perfect handbag, scarf, or other Hermes product, LUX has one of the largest selections you’ll find anywhere.'
	var chanelTitle = 'Secondhand Chanel Handbags, Dresses, Shoes & Accessories'
	var chanelParagraph = 'Chanel is among the best designers you’ll find in our collection when shopping at LUX. Our selection of luxury secondhand Chanel bags includes a variety of unique designs. Whether you’re searching for the perfect Chanel handbag, shoe, wallet, or other product, LUX has one of the largest selections you’ll find anywhere. You won’t need to worry about being unable to find your favorite Chanel products when you shop with us today. We also promise 100% authenticity with every Chanel bag and other product from our store, as we check each item to ensure it’s authentic prior to putting it up for sale.'

	var lvTitle = 'Secondhand Louis Vuitton Handbags, Clothing, Shoes & Accessories'
	var lvParagraph = 'Louis Vuitton is one of the many reputable designers you’ll find here at LUX. We carry a wide range of secondhand Louis Vuitton handbags and other items, with options that can match your individual look and personality. Whether you’re looking for the perfect handbag, sandal, blouse, or other elegant Louis Vuitton item, LUX has one of the largest selections you’ll find anywhere.'

	var gucciTitle = 'Secondhand Gucci Handbags, Dresses, Shoes & Accessories'
	var gucciParagraph = 'Gucci is among the top designers available in our collection here at LUX. Our selection of luxury secondhand Gucci bags includes a variety of unique designs. Whether you’re searching for the perfect Gucci monogram handbag, shoe, belt, or other product, LUX has one of the largest selections you’ll find anywhere. You’ll be able to find many of your favorite Gucci products when you shop with us today. We also promise 100% authenticity with every Gucci monogram bag and other products in our store, as we perform a check of each item to ensure its authenticity before it goes on the market.'

	var valentinoTitle = 'Secondhand Valentino Handbags, Clothing, Shoes & Accessories'
	var valentinoParagraph = 'Valentino is among the many well-known and reputable designers available here at LUX. We carry a wide variety of pre-owned Valentino handbags and many other items, with plenty of options to match your style. Whether you’re searching for the ideal handbag, blouse, sandal, or other Valentino item, LUX has one of the most expansive selections of luxury Valentino products on the market.'

	// Script Works From Here.
	var paragraphNode = document.createElement('p');
	var breadList = document.querySelectorAll('.breadcrumbs ul.items li');
	var currentURL = window.location.href;
	var splitURL = currentURL.split('/');
	var lastURL = splitURL.pop();
	var splitLastURL = lastURL.split('?');

	// Reusable Function
	function contentReplace(title, paragraph ) {
		document.querySelector('h1.page-title').innerHTML = title;
		document.querySelector('.page-title-wrapper').appendChild(paragraphNode);
		paragraphNode.appendChild(document.createTextNode(paragraph));
		document.querySelector('.breadcrumbs').style['margin-bottom'] = '0';
		document.querySelector('.category-view').style['margin-bottom'] = '0';
		document.querySelector('.page-title-wrapper').style['padding-bottom'] = '50px';
	}

	// Conditions
	if (breadList[2].innerText === 'Hermes' && breadList[1].innerText === 'Designers' && breadList.length > 2 && breadList.length < 4 && (splitLastURL.length === 1 || splitLastURL.indexOf('p=1') > -1)) {
		contentReplace(hermesTitle, hermesParagraph);
	}

	if (breadList[2].innerText === 'Chanel' && breadList[1].innerText === 'Designers' && breadList.length > 2 && breadList.length < 4 && (splitLastURL.length === 1 || splitLastURL.indexOf('p=1') > -1)) {
		contentReplace(chanelTitle, chanelParagraph);
	}

	if (breadList[2].innerText === 'Louis Vuitton' && breadList[1].innerText === 'Designers' && breadList.length > 2 && breadList.length < 4 && (splitLastURL.length === 1 || splitLastURL.indexOf('p=1') > -1)) {
		contentReplace(lvTitle, lvParagraph);
	}


	if (breadList[2].innerText === 'Gucci' && breadList[1].innerText === 'Designers' && breadList.length > 2 && breadList.length < 4 && (splitLastURL.length === 1 || splitLastURL.indexOf('p=1') > -1)) {
		contentReplace(gucciTitle, gucciParagraph);
	}

	if (breadList[2].innerText === 'Valentino' && breadList[1].innerText === 'Designers' && breadList.length > 2 && breadList.length < 4 && (splitLastURL.length === 1 || splitLastURL.indexOf('p=1') > -1)) {
		contentReplace(valentinoTitle, valentinoParagraph);
	}




})

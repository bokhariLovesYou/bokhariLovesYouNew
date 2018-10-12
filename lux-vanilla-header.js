document.addEventListener('DOMContentLoaded', function() {
	// Add Content For Brand Pages Over Here As Variables
	var hermesTitle = 'Secondhand Hermes Handbags, Scarves, Shoes & Accessories'
	var hermesParagraph = 'Hermes is one of the top designers you’ll find here at LUX. We carry a wide variety of secondhand Hermes handbags and other items, with options that can match any look and personality. Whether you’re looking for the perfect handbag, scarf, or other Hermes product, LUX has one of the largest selections you’ll find anywhere.'
	var chanelTitle = 'Secondhand Chanel Handbags, Dresses, Shoes & Accessories'
	var chanelParagraph = 'Chanel is among the best designers you’ll find in our collection when shopping at LUX. Our selection of luxury secondhand Chanel bags includes a variety of unique designs. Whether you’re searching for the perfect Chanel handbag, shoe, wallet, or other product, LUX has one of the largest selections you’ll find anywhere. You won’t need to worry about being unable to find your favorite Chanel products when you shop with us today. We also promise 100% authenticity with every Chanel bag and other product from our store, as we check each item to ensure it’s authentic prior to putting it up for sale.'
	// Script Works From Here.
	var paragraphNode = document.createElement('p');
	var breadList = document.querySelectorAll('.breadcrumbs ul.items li');
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
	if (breadList[2].innerText === 'Hermes' && breadList[1].innerText === 'Designers' && breadList.length > 2 && breadList.length < 4) {
		contentReplace(hermesTitle, hermesParagraph);
	}

	if (breadList[2].innerText === 'Chanel' && breadList[1].innerText === 'Designers' && breadList.length > 2 && breadList.length < 4) {
		contentReplace(chanelTitle, chanelParagraph);
	}
})

	

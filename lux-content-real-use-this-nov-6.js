window.onload = function () {

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
	
	var badTitle = 'Secondhand Badgley Mischka Handbags, Clothing, Shoes & Accessories';
	var badParagraph = 'Established in 1988 by Mark Badgley and James Mischka, Badhley Mischka has since grown into one of the most reputable and recognized brands in the world, known for producing top-quality clothing, handbags, and a wide variety of other luxury goods using some of the best available materials. With Badgley Mischka products, you get the highest level of quality with each and every design.';
	var badParagraphTwo = '<p>Here at LUX, we’re proud to feature pre-owned Badgley Mischka handbags, shoes, and accessories that are available at some of the best prices on the market, with the same level of quality you’d find with newer Badgley Mischka products. We only carry authentic consignment that meets the highest standards.</p>';
	var badTitleTwo = '<h2 style="margin: 25px 0;">Shop Our Badgley Mischka Handbags, Clothing, and More</h2>';
	var badTitleTwoParagraphOne = '<p>Here at LUX, you’ll find plenty of pre-owned Badgley Mischka products, as well as consignment from many other top designers. You won’t need to worry about being unable to find the perfect products for you with our expansive selection of secondhand consignment. Regardless of your particular tastes and style, we have something for everyone, whether you’re looking for designer handbags or other luxury consignment.</p>';

	var yvesTitle = 'Secondhand Yves Saint Laurent Handbags, Dresses, Shoes & Accessories';
	var yvesParagraph = 'Yves Saint Laurent is among the top designers available in our collection here at LUX. Whether you’re searching for the perfect Yves Saint Laurent handbag, shoe, or other product, LUX has one of the largest selections you’ll find anywhere. We also promise 100% authenticity with every Yves Saint Laurent handbag and other products in our store, as we perform a check of each item to ensure its authenticity before it goes on the market.'
	var $yvesExtendedContent = '<p>Yves Saint Laurent has developed since its founding in 1961 into one of the most widely recognized French brands, responsible for creating high-quality designer Yves Saint Laurent Marmont handbags, Yves Saint Laurent clothing, shoes, and much more. Here at LUX we offer more affordable prices for these products without sacrificing quality.</p>';
	$yvesExtendedContent += '<h2 style="margin: 25px 0;">Find the Best Luxury Yves Saint Laurent Clothing, Handbags, Shoes, and More</h2>'
	$yvesExtendedContent += '<p>Whether you’re searching for secondhand bags by Yves Saint Laurent or other top-quality products from Yves Saint Laurent, LUX likely has everything you’re looking for in a complete selection. Regardless of your needs, we have something for everyone based on their personal style and preferences. </p>';
	$yvesExtendedContent += '<p>If you have any questions regarding any of our Yves Saint Laurent products or other designers available, simply contact us today and we’ll get back to you as soon as possible.</p>';



	var chloeTitle = 'Secondhand Chloé Handbags, Clothing, Shoes & Accessories';
	var chloeParagraph = 'Chloé is among the many well-known and reputable designers available here at LUX. We carry a wide variety of pre-owned Chloé handbags and many other items, with plenty of options to match your style. Whether you’re searching for the ideal handbag or other Chloé item, LUX has one of the most expansive selections of luxury Chloé products on the market. '
	var $chloeExtendedContent = '<p>Established in 1952 by world-renowned fashion designer Gaby Aghion, this French brand is known for its impeccable quality across all of its products, with a selection of handbags, tote bags, shoes, blouses, and much more, all of which is made using the best materials. This brand’s commitment to quality is why we’re proud to carry them in our growing inventory of secondhand consignment. </p>';
	$chloeExtendedContent += '<h2 style="margin: 25px 0;">Shop Our Entire Inventory of Pre-Owned Chloé Handbags, Chloé Clothing, and Products from Other Designers</h2>';
	$chloeExtendedContent += '<p>Here at LUX, you’ll find a wide variety of pre-owned Chloé handbags and clothing, along with other products and consignment from many other reputable designers. Regardless of your specific style and desired look, we have something to leave you satisfied when you shop at LUX today.</p>';
	$chloeExtendedContent += '<p>Have any questions or concerns about any of our Chloé products or other consignment available from LUX? Contact us today and we’ll get back to you as quickly as possible.</p>';


	const alexTitle = 'Secondhand Alexander McQueen Dresses, Coats, Boots & Clutches';
	let $alexExtendedContent = '<p>Alexander McQueen is one of the most well-recognized and respected designers, which is why we’re proud to include them in our inventory here at LUX. We carry a variety of secondhand Alexander McQueen dresses, coats, clutch purses, and other items, with plenty of unique options for everyone looking for the perfect Alexander McQueen clothing and accessories. Whether you’re searching for the an elegant Alexander McQueen embellished clutch or stylish Alexander McQueen boots, we have what you’re looking for from this renowned designer. <br><br> Established in 1992 by young fashion designer Lee Alexander McQueen, the British label has since grown into one of the most well-known brands worldwide, with a reputation for producing top-quality clothing, clutches, and many other other luxury goods using some of the best available materials. With Alexander McQueen products from LUX, you get peak quality with each and every design. We’re proud to feature some of the best pre-owned Alexander McQueen coats, dresses, jackets, boots, and other products that are available at some of the best prices you’ll find anywhere, with the same level of quality you’d find with newer Alexander McQueen products. We carry purely authentic consignment that meets the highest standards.</p>'
	$alexExtendedContent += '<h2 style="margin: 25px 0;">Pre-Owned Alexander McQueen Clothing and Much More</h2>';
	$alexExtendedContent += '<p>Here at LUX, we have one of the largest collections of Alexander McQueen products available, including a variety of clothing, Alexander McQueen embellished sequined handbags, and many others. We also carry a selection of Alexander McQueen flats, boots, and other footwear that can complement your look. You can combine any of our Alexander McQueen products with other secondhand items from LUX, with Alexander McQueen clothing and much more available in our wide selection, along with consignment from many other reputable designers.</p>';
	$alexExtendedContent += '<p>Browse our complete inventory of secondhand Alexander McQueen bags and more below, and shop with us today. We likely have what you’re searching for in our vast selection of designer products.</p>';
	$alexExtendedContent += '<h2 style="margin: 25px 0;">Find the Perfect Alexander McQueen Boots, Jackets, Dresses, and Accessories</h2>';
	$alexExtendedContent += '<p>In addition to Alexander McQueen clothing, we also carry a wide range of Alexander McQueen flats, boots, and accessories that are designed with some of the highest quality materials, available here at LUX at some of the most reasonable prices available. All of our secondhand Alexander McQueen consignment can complete your collection of products from this designer, without forcing you to spend more than you need to on top-quality designer handbags and more. <br><br> When you shop here at LUX, you’ll be able to find everything you want from a wide selection of trusted designers, with one of the most extensive selections of Alexander McQueen products available anywhere. Whether you’re searching for a signature sequined clutch, or an Alexander McQueen shoe or other type of clothing or accessory, simply browse our complete selection below and you’ll be able to locate the perfect products based on your personal style.</p>';
	$alexExtendedContent += '<h2 style="margin: 25px 0;">Shop Our Alexander McQueen Clutch Purses, Clothing, and More</h2>'
	$alexExtendedContent += '<p>Here at LUX, you’ll find plenty of pre-owned Alexander McQueen products, as well as consignment from many other widely recognized designers. You won’t need to worry about having trouble finding the perfect products for you with our expansive selection of consignment. Regardless of your particular style and tastes, we have something for everyone in our expansive selection.</p>'
	
	
	// Script Works From Here.
	var paragraphNode = document.createElement('p');
	var headingNode = document.createElement('h2');
	var breadList = document.querySelectorAll('.breadcrumbs ul.items li');
	var currentURL = window.location.href;
	var splitURL = currentURL.split('/');
	var lastURL = splitURL.pop();
	var splitLastURL = lastURL.split('?');
	var appendParent = jQuery('.page-title-wrapper');

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
		document.title = 'High-Quality Pre-Owned Louis Vuitton Handbags & Clothing';
		document.querySelector('meta[name="keywords"]').setAttribute("content", 'Louis Vuitton is one of the most reputable and well-recognized designers on the market, and for good reason. Here at LUX, you’ll find many high-quality secondhand Louis Vuitton handbags and much more. Browse our selection of Louis Vuitton products here and shop with us today.');
	}


	if (breadList[2].innerText === 'Gucci' && breadList[1].innerText === 'Designers' && breadList.length > 2 && breadList.length < 4 && (splitLastURL.length === 1 || splitLastURL.indexOf('p=1') > -1)) {
		contentReplace(gucciTitle, gucciParagraph);
		document.title = 'High-Quality Secondhand Gucci Handbags & Accessories for Sale';
		document.querySelector('meta[name="keywords"]').setAttribute("content", 'If you’re looking for some of the best bags, shoes, belts, clothing, or other accessories from this reputable brand, you’ll find many high-quality pre-owned Gucci handbags and much more here at LUX. Browse our selection of Louis Vuitton products here and shop with us today.');
	}

	if (breadList[2].innerText === 'Valentino' && breadList[1].innerText === 'Designers' && breadList.length > 2 && breadList.length < 4 && (splitLastURL.length === 1 || splitLastURL.indexOf('p=1') > -1)) {
		contentReplace(valentinoTitle, valentinoParagraph);
		document.title = 'High-Quality Pre-Owned Valentino Handbags & Accessories';
		document.querySelector('meta[name="keywords"]').setAttribute("content", 'If you’re looking for some of the best bags, shoes, belts, clothing, or other accessories from this reputable brand, you’ll find many high-quality pre-owned Valentino handbags and much more here at LUX. Browse our selection of Valentino products here and shop with us today. ');
	}
	

	if (breadList[2].innerText === 'Badgley Mischka' && breadList[1].innerText === 'Designers' && breadList.length > 2 && breadList.length < 4 && (splitLastURL.length === 1 || splitLastURL.indexOf('p=1') > -1)) {
		contentReplace(badTitle, badParagraph);
		appendParent.append(badParagraphTwo);
		appendParent.append(badTitleTwo);
		appendParent.append(badTitleTwoParagraphOne);
		document.title = 'High-Quality Pre-Owned Badgley Mischka Designer Consignment';
		document.querySelector('meta[name="keywords"]').setAttribute("content", 'Badgley Mischka is one of the most reputable and well-recognized designers on the market, and for good reason. Here at LUX, you’ll find many high-quality secondhand Badgley Mischka clothing, handbags and much more. Browse our selection of Badgley Mischka products here and shop with us today.');
	}
	
	if (breadList[2].innerText === 'Yves Saint Laurent' && breadList[1].innerText === 'Designers' && breadList.length > 2 && breadList.length < 4 && (splitLastURL.length === 1 || splitLastURL.indexOf('p=1') > -1)) {
		contentReplace(yvesTitle, yvesParagraph);
		appendParent.append($yvesExtendedContent);
		document.title = 'Secondhand Yves Saint Laurent Handbags & Clothing';
		document.querySelector('meta[name="keywords"]').setAttribute("content", 'If you’re looking for some of the best bags, shoes, belts, clothing, or other accessories from Yves Saint Laurent, you’ll find many high-quality pre-owned Yves Saint Laurent handbags, shoes and much more here at LUX. Browse our selection of Yves Saint Laurent products here and shop with us today.');
	}
	
	if (breadList[2].innerText === 'Chloé' && breadList[1].innerText === 'Designers' && breadList.length > 2 && breadList.length < 4 && (splitLastURL.length === 1 || splitLastURL.indexOf('p=1') > -1)) {
		contentReplace(chloeTitle, chloeParagraph);
		appendParent.append($chloeExtendedContent);
		document.title = 'High-Quality Pre-Owned Chloé Handbags, Shoes & Clothing';
		document.querySelector('meta[name="keywords"]').setAttribute("content", 'If you’re looking for some of the best bags, shoes, belts, clothing, or other accessories from this reputable brand, you’ll find many high-quality pre-owned Chloé handbags and much more here at LUX. Browse our selection of Chloé products here and shop with us today.');
	}

	if (breadList[2].innerText === 'Alexander McQueen' && breadList[1].innerText === 'Designers' && breadList.length > 2 && breadList.length < 4 && (splitLastURL.length === 1 || splitLastURL.indexOf('p=1') > -1)) {
		contentReplace(alexTitle, null);
		appendParent.append($alexExtendedContent);
		document.title = 'High-Quality Pre-Owned Alexander McQueen Consignment';
		document.querySelector('meta[name="keywords"]').setAttribute("content", 'Alexander McQueen is among the most reputable and well-known designers in the industry, as a result of their consistent quality of products. Here at LUX, you’ll find many high-quality Alexander McQueen consignment, from elegant dresses to sequined clutches.');
	}


	
	
// 	Adding Read More Button	
let hidden = false;
let originalText = jQuery('.page-title-wrapper h1:first').next().text();

if (jQuery('.page-title-wrapper').text().length > 700) {
		const nextAll = jQuery('.page-title-wrapper h1:first').next().nextAll();
		const next = jQuery('.page-title-wrapper h1:first').next();
		nextAll.hide();
		hidden = true;
    	next.text(next.text().substring(0,250) + '...');
    	jQuery('.page-title-wrapper').append('<div class="read-more-button-parent" style="text-align: right;"><span class="read-more-button" style="font-weight: bold; border: 1px solid #000; padding: 0.3rem 0.6rem; cursor: pointer;">Read More +</span></div>')
  }


const readMoreButton = jQuery('.read-more-button');
readMoreButton.click( () => {
	if (hidden === true) {
	jQuery('.page-title-wrapper h1:first').next().text(originalText);
	jQuery('.page-title-wrapper h1:first').next().nextAll().show();
	readMoreButton.text('Read Less -');
	hidden = false;
	} else if (hidden === false) {
	const nextt = jQuery('.page-title-wrapper h1:first').next();
	nextt.text(nextt.text().substring(0,250) + '...');
	jQuery('.page-title-wrapper h1:first').next().nextAll().not('.read-more-button-parent').hide();
	readMoreButton.text('Read More +');
	hidden = true;
	}
});
	
}

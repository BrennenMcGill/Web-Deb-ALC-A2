var tl = TweenLite;

// load XML
var xhr;
if (window.XMLHttpRequest) xhr = new XMLHttpRequest(); 		// all browsers except IE
else xhr = new ActiveXObject("Microsoft.XMLHTTP"); 		// for IE
xhr.open('GET', 'https://secure.img-cdn.mediaplex.com/0/18916/lt-generator.xml');
xhr.onreadystatechange = function () {
	if (xhr.readyState===4 && xhr.status===200) {
        // update HTML content in ad with XML
		text2.innerHTML = xhr.responseXML.getElementsByTagName('apr')[1].firstChild.nodeValue;
		ttext9.innerHTML = xhr.responseXML.getElementsByTagName('apr')[0].firstChild.nodeValue;
		ttext6.innerHTML = xhr.responseXML.getElementsByTagName('apr')[1].firstChild.nodeValue;
		ttext3.innerHTML = xhr.responseXML.getElementsByTagName('apr')[2].firstChild.nodeValue;
		ttext8.innerHTML = xhr.responseXML.getElementsByTagName('rates')[1].firstChild.nodeValue;
		ttext5.innerHTML = xhr.responseXML.getElementsByTagName('rates')[2].firstChild.nodeValue;
		ttext2.innerHTML = xhr.responseXML.getElementsByTagName('rates')[3].firstChild.nodeValue;
	}
}
xhr.send();

// ANIMATION
tl.to(banner, 0.5, {opacity:1, ease:Power0.easeNone});
// -----------
tl.to(text1, 1, {opacity:1, left:0, ease:Power4.easeOut, delay:0.1});
tl.to(text2, 1, {opacity:1, left:0, ease:Power4.easeOut, delay:0.1});
tl.to(row1, 1, {opacity:1, left:20, ease:Power4.easeOut, delay:.9});
tl.to(divider1, 1, {opacity:1, left:20, ease:Power4.easeOut, delay:.9});
tl.to(row2, 1, {opacity:1, left:20, ease:Power4.easeOut, delay:1.3});
tl.to(divider2, 1, {opacity:1, left:20, ease:Power4.easeOut, delay:1.3});
tl.to(row3, 1, {opacity:1, left:20, ease:Power4.easeOut, delay:1.7});
tl.to(cta, 0.4, {opacity:1, bottom:8, ease:Back.easeOut, delay:3.2});
tl.to(shine, 0.8, {left:320, ease:Power0.easeNone, delay:3.9, onComplete:resetShine});
    
function resetShine() {
    shine.style.left = '-220px';
}

// out
tl.to(text1, 0.8, {left:-300, opacity:0, ease:Power4.easeIn, delay:6});
tl.to(text2, 0.8, {left:300, opacity:0, ease:Power4.easeIn, delay:6});
// set
tl.to(text1, 0.01, {left:300, delay:6.8});
tl.to(text2, 0.01, {left:-300, delay:6.8});
// in
tl.to(text1, 1, {opacity:1, left:0, ease:Power4.easeOut, delay:7});
tl.to(text2, 1, {opacity:1, left:0, ease:Power4.easeOut, delay:7});
tl.to(shine, 0.8, {left:320, ease:Power0.easeNone, delay:8, onComplete:resetShine});

// out
tl.to(text1, 0.8, {left:-300, opacity:0, ease:Power4.easeIn, delay:12});
tl.to(text2, 0.8, {left:300, opacity:0, ease:Power4.easeIn, delay:12});
// set
tl.to(text1, 0.01, {left:300, delay:12.8});
tl.to(text2, 0.01, {left:-300, delay:12.8});
// in
tl.to(text1, 1, {opacity:1, left:0, ease:Power4.easeOut, delay:13});
tl.to(text2, 1, {opacity:1, left:0, ease:Power4.easeOut, delay:13});
tl.to(shine, 0.8, {left:320, ease:Power0.easeNone, delay:14});

// row bgs
tl.to(rowbg1, 1.2, {opacity:1, ease:Power0.easeNone, delay:3});
tl.to(rowbg1, 1.2, {opacity:0, ease:Power0.easeNone, delay:4.2});
tl.to(rowbg2, 1.2, {opacity:1, ease:Power0.easeNone, delay:5});
tl.to(rowbg2, 1.2, {opacity:0, ease:Power0.easeNone, delay:6.2});
tl.to(rowbg3, 1.2, {opacity:1, ease:Power0.easeNone, delay:7});
tl.to(rowbg3, 1.2, {opacity:0, ease:Power0.easeNone, delay:8.2});


// main hit clickTAG functions
hitClick = function(e) {
    window.open(clickTAG, "_blank");
}

hitOver = function(e) {
    cta.style.backgroundPosition = "0 -44px";
}
hitOut = function(e) {
    cta.style.backgroundPosition = "0 0px";
}

hit.addEventListener('mouseover', hitOver);
hit.addEventListener('mouseout', hitOut);
hit.addEventListener('click', hitClick);


// rate table button .row functions
rowOver = function(e) {
    this.children[0].style.color = "white";
    this.children[1].style.color = "white";
    this.children[2].style.color = "white";
    this.children[3].style.opacity = "1";
}

rowOut = function(e) {
    this.children[0].style.color = "#31353b";
    this.children[1].style.color = "#31353b";
    this.children[2].style.color = "#31353b";
    this.children[3].style.opacity = "0";
}

for (var i = 1; i <= 3; i++) {
    this['row'+i].addEventListener('mouseover', rowOver);
    this['row'+i].addEventListener('mouseout', rowOut);
    this['row'+i].addEventListener('click', hitClick);
}
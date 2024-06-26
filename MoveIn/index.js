window.onload = function() {
	const preloader = document.getElementById('preloader');
	const content = document.querySelector('.bodyWrapper');
	
	setTimeout(function() {
		preloader.style.display = 'none';
		content.style.display = 'block';
	}, 1000); 
	set_bodyFontSize();
}

function set_bodyFontSize()
{
	var xs_scale = 1;
		
	const BASE_WIDTH = 1366; //this is set as base width resolution with 1em ~ 16px as font size
	const BASE_HEIGHT = 657; //this is set as base height resolution with 1em ~ 16px as font size
		
	var curwidth = parseInt(window.innerWidth);
	var curheight = parseInt(window.innerHeight);
	var wScale = (curwidth/BASE_WIDTH).toFixed(2);
	var hScale = (curheight/BASE_HEIGHT).toFixed(2);
	var avgScale = ((Number(wScale)+Number(hScale))/2);
	xs_scale = avgScale;
	document.body.style.fontSize = (avgScale*16).toFixed(2)+"px";
}
function set_page_orientation()
{
	// alert(window.orientation);
	var mainElem = document.getElementsByTagName('body')[0];
	
	var pageAngle = getCurrentRotation(mainElem);
	var device = window.orientation;
	var val, topVal, hVal, wVal;
	// alert(pageAngle+'  ||  device: '+device);
	switch(device)
	{
		case 180:
		case 0:
		{
			val = -90;
			topVal = 100;
			wVal = '100vh';
			hVal = '100vw';
			// wVal = '100%';
			// hVal = '100%';
		}
		break;
		case 90:
		case -90:
		{
			val = 0;
			topVal =0;
			wVal = '100vw';
			hVal = '100vh';
			// wVal = '100%';
			// hVal = '100%';
		}
		break;
	}
	if(pageAngle != val)
	{
		mainElem.style.cssText+='transform: rotate('+val+'deg);transform-origin: left top;width: '+wVal+';height:'+hVal+';overflow-x: hidden;position: absolute;top: '+topVal+'%;left: 0;';
	}
}
function getCurrentRotation(el)
{
	var st = window.getComputedStyle(el, null);
	var tr = st.getPropertyValue("-webkit-transform") ||
	st.getPropertyValue("-moz-transform") ||
	st.getPropertyValue("-ms-transform") ||
	st.getPropertyValue("-o-transform") ||
	st.getPropertyValue("transform") ||
	"none";
	var angle = 0;
	if( tr !== "none") {
		var values = tr.split('(')[1];
		values = values.split(')')[0];
		values = values.split(',');
		
		var a = values[0];
		var b = values[1];
		var c = values[2];
		var d = values[3];

		angle = Math.round(Math.asin(b) * (180/Math.PI));
	}
	return angle;
}


function moveCarousel(direction) {
	const list = document.querySelector(".list");

	const item = document.querySelector(".item");
	const itemWidth = item.offsetWidth;
	if(direction === "previous") {
	  list.scrollBy({ left: -itemWidth, behavior: "smooth" });
	} else {
	  list.scrollBy({ left: itemWidth, behavior: "smooth" });
	}
}
function weeklyClick(direction) {
	const list = document.querySelector(".weeklyList");

	const item = document.querySelector(".weeklyItem");
	const itemWidth = item.offsetWidth;
	if(direction === "previous") {
	  list.scrollBy({ left: -itemWidth, behavior: "smooth" });
	} else {
	  list.scrollBy({ left: itemWidth, behavior: "smooth" });
	}
}

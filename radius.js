var setRadius = function(newRadius) {
	if (newRadius<minRad)
		newRadius=minRad;
	else if (newRadius>maxRad)
		newRadius=maxRad;
	radius = newRadius;
	context.lineWidth = radius * 2;
	radiusvalue.innerHTML = radius;
}

var minRad= 2,
	maxRad=100,
	defaultRad = 10,
	interval= 2,
	radSpan= document.getElementById("radiusvalue"),
	decRad= document.getElementById("minus"),
	incRad= document.getElementById("plus");

minus.addEventListener('click', function(){
	setRadius(radius-interval);
})
plus.addEventListener('click', function(){
	setRadius(radius+interval);
})

setRadius(defaultRad);

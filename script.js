//your JS code here. If required.
const screenSize = document.createElement("h1") ;
document.body.append(screenSize) ;

window.onresize =  function () {
	screenSize.innerText = `width: ${window.innerWidth} and height: ${window.innerHeight}` ;
}


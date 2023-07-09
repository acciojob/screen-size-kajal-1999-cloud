//your JS code here. If required.
const screenSize = document.createElement("h1") ;
document.body.append(screenSize) ;

window.onresize =  function () {
	screenSize.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}` ;
}


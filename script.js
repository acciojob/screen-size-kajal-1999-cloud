//your JS code here. If required.
const screenSize = document.createElement("h1") ;

window.onResize =  function () {

	screenSize.innerText = `width: ${window.innerwidth} and height: ${window.innerheight}` ;
}
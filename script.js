// your JS code here. If required.
const screenSize = document.getElementById("sizeInfo") ;
const heading = screenSize.firstElementChild;

// document.body.append(screenSize) ;

window.onload = function(){
 	heading.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
}
window.onresize =  function() {
	screenSize.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}` ;
}

// const div = document.getElementById("sizeInfo");
// const heading = div.firstElementChild;
// window.onload = function(){
// 	heading.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
// }
// window.onresize = function(){
// 	heading.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
// } 

   
window.onload = function () {
	initColorPicker();
}

function initColorPicker(){
	let colorbox = document.getElementById("color-picker");
	let rgb = {
		red: document.getElementById("red"),
		green: document.getElementById("green"),
		blue: document.getElementById("blue")
	}
	setColorPickerEventListeners(colorbox, rgb);
}

function setColorPickerEventListeners(colorbox, rgb){
	rgb.red.addEventListener('change',() => {
		console.log("Red Value: ", rgb.red.value);
	})

	rgb.green.addEventListener('change',() => {
		console.log("Green Value: ", rgb.green.value);
	})

	rgb.blue.addEventListener('change',() => {
		console.log("Blue Value: ", rgb.blue.value);
	})
}
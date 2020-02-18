window.onload = function () {
	initColorPicker();
}

function initColorPicker(){
	let colorbox = document.getElementById("color-box");
	let colors = {
		red: document.getElementById("red"),
		green: document.getElementById("green"),
		blue: document.getElementById("blue")
	}
	let colorPickers = document.getElementsByClassName("picker");
	setColorPickerEventListeners(colorbox, colors, colorPickers);
}

function setColorPickerEventListeners(colorbox, colors, pickerElements){
	let pickerLength = pickerElements.length;
	for (let i = 0; i<pickerLength; i++){
		pickerElements[i].addEventListener('change', () => {
			let red = colors.red.value;
			let green = colors.green.value;
			let blue = colors.blue.value;
			setBoxBGColor(colorbox, red, green, blue);
			setDisplayColors(red, green, blue);
		})
	}
	/*
	rgb.red.addEventListener('change',() => {
		console.log("Red Value: ", rgb.red.value);
		setBoxBGColor(colorbox, rgb.red.value, rgb.green.value, rgb.blue.value);
	})

	rgb.green.addEventListener('change',() => {
		console.log("Green Value: ", rgb.green.value);
		setBoxBGColor(colorbox, rgb.red.value, rgb.green.value, rgb.blue.value);
	})

	rgb.blue.addEventListener('change',() => {
		console.log("Blue Value: ", rgb.blue.value);
		setBoxBGColor(colorbox, rgb.red.value, rgb.green.value, rgb.blue.value);
	})
	*/
}

function setBoxBGColor(colorbox, red, green, blue){
	rgbVal = [red, green, blue].join(",");
	colorbox.style.backgroundColor = "rgb(" + rgbVal + ")";
}

function setDisplayColors(red, green, blue){
	let redVal = document.getElementById("redVal");
	redVal.innerText = red;
	let greenVal = document.getElementById("greenVal");
	greenVal.innerText = green;
	let blueVal = document.getElementById("blueVal");
	blueVal.innerText = blue;
}
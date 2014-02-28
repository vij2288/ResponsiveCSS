var prevVal;
var prevOp;
var currVal;
var result;
var justComp;
function ld() {
	justComp = false;
	prevVal = "0";
	prevOp = "+";
	currVal = "0";
	result = 0;
	document.getElementById("res").value = currVal;
}
function attach(val) {
	if (justComp === true || document.getElementById("res").value==="0") {
		document.getElementById("res").value = val;
		justComp = false;
	} else {
		document.getElementById("res").value += val;
	}
	currVal = document.getElementById("res").value;
}
function comp(val) {
	cal();
	prevOp = val;
	justComp = true;
}
function find() {
	cal();
	prevOp = "+";
	prevVal = "0";
	currVal = "0";
	justComp = true;
}
function cal() {
	switch (prevOp) {
	case "+":
		result = parseInt(prevVal) + parseInt(currVal);
		break;
	case "-":
		result = parseInt(prevVal) - parseInt(currVal);
		break;
	case "*":
		result = parseInt(prevVal) * parseInt(currVal);
		break;
	case "/":
		if (parseInt(currVal) === 0) {
			document.getElementById("res").value = "Error";
			prevOp = "+";
			prevVal = "0";
			currVal = "0";
			return;
		} else {
			result = Math.round(parseInt(prevVal) / parseInt(currVal));
			console.log(result);

		}
		break;
	}
	prevVal = result;
	document.getElementById("res").value = result;
	currVal="0";
}
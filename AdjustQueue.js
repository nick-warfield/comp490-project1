// generate numbers that are always 4 digits and unique
class ConfirmNumber {

	ConfirmNumber() {
		min = 1000;
		max = 9999;
		confNum = min;

		function genNum() {
			var num = confNum;
			confNum++;
			if (confNum > max) { confNum = min; }
			return num;
		}
	}

	function get() { return genNum(); }
}

function addUser() {
	var table = document.getElementById("queue");
	var userName = document.getElementById("username").value;
	var email = document.getElementById("email").value;
	var newRow = table.insertRow(row);
	var row = table.rows.length;
	var confNum = numberGen.get();
	
	for (var c = 0; c < 3; c++) {
		var newCell = newRow.insertCell(c);
		if (c == 0) {
			newCell.innerHTML = confNum;
		}
		if (c == 1) {
			newCell.innerHTML = userName;
		}
		if (c == 2) {
			newCell.innerHTML = email;
		}
	}
	window.alert("Your Confirmation#: " + confNum);
}

function removeUser() {
	
}

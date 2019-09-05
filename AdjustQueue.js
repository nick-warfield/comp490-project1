var min = 1000;
var max = 9999;
var confNum = min;

function genNum() {
	var num = confNum;
	confNum++;
	if (confNum > max) { confNum = min; }
	return num;
}

function addUser() {
	var table = document.getElementById("queue");
	var userName = document.getElementById("username").value;
	var email = document.getElementById("email").value;
	var newRow = table.insertRow(row);
	var row = table.rows.length;
	var confNum = genNum();

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
	var removeNum = document.getElementById("confNum").value;
	var table = document.getElementById("queue");
	for (var i = 1; i < table.rows.length; i++){
		var current = table.rows[i].cells[0].innerHTML;
		if (removeNum === current) {
			table.deleteRow(i);
		}
	}
}

function removeFront() {
	var table = document.getElementById("queue");
	table.deleteRow(1);
}

function addUser() {
	var table = document.getElementById("queue");
	var userName = document.getElementById("username").value;
	var IDNum = document.getElementById("idnum").value;
	var service = document.getElementById("service").value;
	var newRow = table.insertRow(row);
	var row = table.rows.length;
	var confNum = Math.floor(Math.random() * 100);
	
	for (var c = 0; c < 3; c++) {
		var newCell = newRow.insertCell(c);
		if (c == 0) {
			newCell.innerHTML = IDNum;
		}
		if (c == 1) {
			newCell.innerHTML = userName;
		}
		if (c == 2) {
			newCell.innerHTML = service;
		}
	}
	window.alert("Your Confirmation#: " + confNum);
}

function removeUser() {
	
}
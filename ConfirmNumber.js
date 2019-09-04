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

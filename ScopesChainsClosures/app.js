﻿function foo() {
	quux = 0;
	var bar;
	function zip() {
		var quux;
		bar = true;
	}
	
	return zip;
}
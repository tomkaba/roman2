exports.convertToRoman = function(var1) {
		const number1 = isNaN(var1) ? '' : (var1<=0 ? '' : var1);
		
		var sNumber= number1.toString();
		var sRoman='';
		var romanTable = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
		var i;
		for ( i in romanTable ) {
			while ( var1 >= romanTable[i] ) {
				sRoman += i;
				var1 -= romanTable[i];
			}
		}
		
		return sRoman;
}	

exports.echoRoman = function(var1) {
		console.info(exports.convertToRoman(var1)); 
}

var expect = require('chai').expect;
var convertToRoman = require('../controller/convert.js').convertToRoman;

describe('Convert', function() {
	describe('convertToRoman', function () {
		it('should return Roman numeral representation of an Arabic number', function() {
			var result = convertToRoman(42);
			expect(result).to.equal('XLII');
		});
	});
	
	describe('returnZero', function () {
		it('should return empty string on on 0 or negative or NaN input', function() {
			var result = convertToRoman(-1);
			expect(result).to.equal('');
		});
	});
});
 


var Universe = require('./../universe');
var should = require('chai').should();

describe('Universe', function() {
	describe('#createUniverse()', function() {
		it('Should return a Universe, 2-dim array of 32 spaces each', function() {
			var universe = new Universe({ space : 32 }).createUniverse();
			universe.getUniverse().should.be.an('array');
			universe.getUniverse().should.have.length(32);
			universe.getUniverse()[1].should.be.an('array');
			universe.getUniverse()[1].should.have.length(32);
		});
	});
});


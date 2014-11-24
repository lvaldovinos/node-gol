var Gol = require('./../gol');
var should = require('chai').should();

describe('GoL', function() {
	describe('#main()', function() {
		this.timeout(15000);
		it('Should return 10 generations', function(done) {
			var gol = new Gol({ space : 32,
								cells : 'auto',
								maxTicks : 10,
								tickFrecuency : 1 });
			gol.main(function(generations) {
				generations.should.equal(10);
				done();
			});
		});
	});
});

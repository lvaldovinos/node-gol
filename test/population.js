var Universe = require('./../universe');
var Population = require('./../population');
var should = require('chai').should();

describe('Population', function() {
	describe('#populateUniverse(auto)', function() {
		it('Should automatically populate a universe object..', function() {
			var universe = new Universe({ space : 32 }).createUniverse();
			var population = new Population({ cells : 'auto' });
			//universe mut be empty...
			universe.getUniverse().forEach( function( xarray , index ) {
				xarray.forEach(function (cell ) {
					cell.should.not.be.ok;
				});
			} );
			//start getting universe populated...
			population.populateUniverse(universe.getUniverse());
			//universe must be populated a cell can be either 1 or 0 but not undefined...
			universe.getUniverse().forEach(function ( xarray ) {
				xarray.forEach(function ( cell ) {
					cell.should.be.within(0,1);
				});
			});	
		});
	});
});

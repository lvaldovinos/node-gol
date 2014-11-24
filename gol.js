var Universe = require('./universe');
var Population = require('./population');

function Gol ( spec ) {
	'use strict';
	var space = spec.space;
	var cells = spec.cells;
	var maxTicks = spec.maxTicks;
	var tickFrecuency = spec.tickFrecuency * 1000;
	//create universe based on @space 
	var universeModel = new Universe({ space : space });
	var universe = universeModel.createUniverse();
	//create population of @cells
	var population = new Population({ cells : cells });
	//have universe populate (first feed)
	population.populateUniverse(universe.getUniverse());
	this.getLiveNeighbours = function(cell) {
		'use strict';
		var liveNeighbours = 0;
		var xInd = cell.x - 1;
		var yInd = cell.y - 1;
		var compoundCell = cell.x + '' + cell.y;
		for ( xInd ; xInd <= cell.x + 1 ; xInd += 1 ) {
			for ( yInd ; yInd <= cell.y + 1 ; yInd += 1 ) {
				//console.log(compoundCell + ' !== ' + ( xInd + '' + yInd ));
				if ( ( compoundCell !== ( xInd + '' + yInd ) ) && universe.getUniverse()[xInd][yInd] ) {
					liveNeighbours += 1;
				}
			}
			yInd = cell.y - 1;
		}
		//console.log('Done with neighbours');
		return liveNeighbours;
	};
	this.applyChanges = function(changesNextGen) {
		'use strict';
		changesNextGen.forEach( function ( cell ) {
			var currentCellValue = universe.getUniverse()[cell.x][cell.y];
			var futureCellValue;
			if ( currentCellValue ) {
				//this cell is alive, but it will die next gen, sorry :(
				futureCellValue = 0;
			}
			else {
				//this cell is dead, but it will be born next gen, :)
				futureCellValue = 1;
			}
			universe.getUniverse()[cell.x][cell.y] = futureCellValue;
		});
	};
	this.main = function(cb) {
		'use strict';
		//show first feed in the universe
		console.log('First feed on universe');
		universe.pretty();
		var generations = 0;
		//apply GoL rules to the next @maxTicks generations every @tickFrecuency seconds
		var intervalObj = setInterval(function () {
			'use strict';
			var xInd = 1;
			var yInd = 1;
			//variable to store changes throughout generations
			var changesNextGen = [];
			generations += 1;
			//iterate all cells which have 8 neighbours
			console.log( generations + ' generation ');	
			for ( xInd ; xInd < space - 1 ; xInd += 1 ) {
				for ( yInd ; yInd < space - 1 ; yInd += 1 ) {
					//get live neighbours of current cell
					var liveNeighbours = this.getLiveNeighbours({ x : xInd, 
																  y : yInd });
					//console.log('Cell[' + xInd + '][' + yInd + '] has ' + liveNeighbours);
					//apply rules of GoL, and save next generation changes
					if (universe.getUniverse()[xInd][yInd]) {
						//if current cell is alive, and its live neighbours are less than 2 or greater than 3, cell will change its state next gen
						if ( liveNeighbours < 2 || liveNeighbours > 3 ) {
							changesNextGen.push({ x : xInd,
												  y : yInd });
						}
					}			
					else {
						//if current cell is dead, and its live neighours aren three exactly, cell will change its state next gen 
						if ( liveNeighbours === 3 ) {
							changesNextGen.push({ x : xInd,
												  y : yInd });

						}
					}
				}
				yInd = 1;
			}
			//apply next generation changes
			this.applyChanges(changesNextGen);
			universe.pretty();

			if ( generations === maxTicks ) {
				console.log('Done!');
				clearInterval(intervalObj);
				return cb(generations);
			}
		}.bind(this), tickFrecuency );
	};
};

module.exports = Gol;

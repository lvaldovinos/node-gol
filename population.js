function Population ( spec ) {
	'use strict';
	var cells = spec.cells || 'auto';
	var tickFrecuency = spec.tickFrecuency * 1000 || 1000;
	var tickLimit = spec.tickLimit || 0;
	this.populateUniverse = function (universe) {
		'use strict';
		if ( cells === 'auto' ) {
			//start populating universe...
			universe.forEach(function (xarray) {
				'use strict';
				var i = 0;
				for (i ; i < xarray.length; i += 1 ) {
					//populating with either 0 or 1....
					xarray[i] = Math.round(Math.random());
				}
			});
		}
		else {
			throw new Error('Unable option');
		}
	};
};

module.exports = Population;

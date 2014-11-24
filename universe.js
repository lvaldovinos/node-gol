/*
	Universe object will create a new universe based on 
*/

function Universe( spec ) {
	'use strict';
	var space = spec.space || 32;
	this.createUniverse = function() {
		'use strict';
		var yarray = [];
		var yindex = 0;
		if ( typeof space === 'number' ) {
			for (yindex ; yindex < space ; yindex += 1) {
				yarray[yindex] = new Array(space);
			}
			return {
				print : function() {
					'use strict';
					yarray.forEach( function ( xarray ) {
						console.log(xarray.toString());
					});
				},
				pretty : function() {
					'use strict';
					var line = '';
					yarray.forEach( function ( xarray ) {
						xarray.forEach( function ( element ) {
							if (element) {
								line += '*';	
							}
							else {
								line += ' ';
							}
						});
						console.log(line);
						line = '';
					});
				},
				getUniverse : function() {
					'use strict';
					return yarray;
				}
			};
		}
		else {
			throw new Error('Unable option');
		}
	};
	this.maxAliveInhabitants = space * space;
};

module.exports = Universe;

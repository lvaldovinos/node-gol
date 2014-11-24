var Gol = require('./gol');
var gol = new Gol({ space : 32,
					cells : 'auto',
					maxTicks : 10,
					tickFrecuency : 1,
					output : 'pretty' });
gol.main(function(generations) {
	console.log( generations + ' generations created.');				
});
	

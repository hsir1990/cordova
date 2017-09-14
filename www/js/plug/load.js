define(['jquery'], function ($)  {

	var load = {}
	load.start = function(){
		$('#style').show();
	}
	load.end = function(){
		$('#style').hide();
	}	
	return load;
});
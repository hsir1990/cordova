define(['jquery','text','load', 'route','spa'], function ( $, text, load, route,spa) {
	var route = {};
	// if(!window.location.hash || window.location.hash.split("#")[1] == 'index'){
	route.index =function(){ 
		var str = '?a=11&&b=2#index';
	    require(['index', 'jquery','text','load',,'spa'], function (index, $, text, load,spa) {
	        window.location.href = window.location.pathname + str;
	        location.reload(); 
	        define(["text!./tpl/"+str.substring(str.indexOf('#') + 1)+".string"],function(tpl){
	            document.querySelector('#boxs').innerHTML = tpl;
	        });
	    });          
	}

	// }else if(window.location.hash.split("#")[1] == 'minor'){
	route.minor= function(){
		var str = '?a=11&&b=2#minor';
		require([ 'jquery','text','load','spa'], function ( $, text, load,spa) {
	        window.location.href = window.location.pathname + str;
	        // debugger;
	        location.reload(window.location.href); 
	        define(["text!./tpl/"+str.substring(str.indexOf('#') + 1)+".string"],function(tpl){
	            document.querySelector('#boxs').innerHTML = tpl;
	        });
		}); 			
	}

	// }else if(window.location.hash.split("#")[1] == 'my'){
	route.my = function(){
		var str = '?a=11&&b=2#my';
		require(['my','jquery','text','load','spa'], function (my, $, text, load,spa) {
	        //var str = '?a=11&&b=2#minor';
	        window.location.href = window.location.pathname + str;
	        location.reload(); 
	        define(["text!./tpl/"+str.substring(str.indexOf('#') + 1)+".string"],function(tpl){
	            document.querySelector('#boxs').innerHTML = tpl;
	        });
		}); 		
	}
	// }
	return route;
})
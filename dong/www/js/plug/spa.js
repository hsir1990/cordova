
if(!window.location.hash){
    var str = '?a=11&&b=2#index';
    window.location.href = window.location.pathname + str;
	define(["text!./tpl/index.string"],function(tpl){
		document.querySelector('#boxs').innerHTML = tpl;
	});	
}else if(window.location.hash.split("#")[1] == 'index'){
    define(["text!./tpl/index.string"],function(tpl){
        document.querySelector('#boxs').innerHTML = tpl;
    });    
}else if(window.location.hash.split("#")[1] == 'minor'){
    var str = '?a=11&&b=2#minor';
    define(["text!./tpl/"+str.substring(str.indexOf('#') + 1)+".string"],function(tpl){
        document.querySelector('#boxs').innerHTML = tpl;
    });    
}else if(window.location.hash.split("#")[1] == 'my'){
    var str = '?a=11&&b=2#my';
    define(["text!./tpl/"+str.substring(str.indexOf('#') + 1)+".string"],function(tpl){
        document.querySelector('#boxs').innerHTML = tpl;
    });    
}
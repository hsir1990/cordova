require.config({
    baseUrl: '',
    paths: {
        'my':'./js/main/my',
    	'index':'./js/main/index',
        'minor':'./js/main/minor',
        'route':'./js/plug/route',
    	'jquery':'./js/plug/jquery-1.10.2',
        'text':'./js/plug/text',
        'load':'./js/plug/load',
        'engine':'./js/plug/engine',
        'spa': './js/plug/spa'
    },
    shim: {
    	'jquery': {exports: '$'}
    }
});
require(['jquery','text','load','route','spa','index', 'minor', 'my'], function ($, text, load, route, spa, index, minor, my) {
	load.end();	
    if(window.location.hash.split("#")[1] == 'index' || !window.location.hash){
        index.index();
    }else if(window.location.hash.split("#")[1] == 'minor'){
        minor.minor();
    }else if(window.location.hash.split("#")[1] == 'my'){
        my.my();
    }
});
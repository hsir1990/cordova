require.config({
    baseUrl: '',
    paths: {
    	'index':'./index',
        'text':'./node_modules/text/text'
    },
    shim: {

    }
});
require(["index"], function (index) {

});
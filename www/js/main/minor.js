define(['jquery','text','load', 'route','spa'], function ( $, text, load, route,spa) {

    function minor(){
        document.querySelector('#minor').onclick = function(){
        	route.my()
        }   
    }
    return{
        minor:minor
    }
});

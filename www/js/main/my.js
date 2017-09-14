define(['jquery','text','load', 'route','spa'], function ( $, text, load, route,spa) {

    function my(){
        document.querySelector('#my').onclick = function(){
        	route.index()
        }   
    }
    return{
        my:my
    }
});

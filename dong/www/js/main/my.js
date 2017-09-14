define(['jquery','text','load', 'route','spa'], function ( $, text, load, route,spa) {

    function my(){
    window.addEventListener('load', function(){
        location.reload(); 
    }, false);
    window.addEventListener('hashchange', function(){
        location.reload(); 

    }, false);    	
        document.querySelector('#goPai').onclick = function(){
        	route.index()
        }  
        document.querySelector('#goCe').onclick = function(){
            route.minor()
        }         
        document.querySelector('#baiDu').onclick = function(){
            window.location.href = "http://pic.sogou.com/pic/searchList.jsp?statref=searchlist_hintword_up&keyword=儿童相册模板psd素材&v=5&uID=3Xvn6FWpVjABduXK";
        }          
    }
    return{
        my:my
    }
});

define(['jquery','text','load', 'route','spa'], function ( $, text, load, route,spa) {

    function minor(){

        window.addEventListener('load', function(){
            location.reload(); 
        }, false);
        window.addEventListener('hashchange', function(){
            location.reload(); 
        }, false);        
               
        $.get("http://10.9.0.148:3000/aa", function(result){
        	var str = '<h1 id="login">我的儿童首页</h1><h1 id="camera">我要拍照</h1>';
            var j = result.data.length;
        	for(var i=0; i<result.data.length; i++){
        		str += '<div><img class="imgs"/></div>'
        		// var image = querySelectorAll('img')[i];
        		// image.src = "data:image/jpeg;base64," + result.data[i].images;
        	}
            document.querySelector('#minor').innerHTML = str;
			for(var i=0; i<result.data.length; i++){
        		// str += '<img />'
                var image = document.querySelectorAll('img')[i];
                // 引入数据排序
        		var aaa = "http://10.9.0.148:3000/" + result.data[i].images;
        		// image.datasrc = aaa;
                $('.imgs').eq(i).attr('data-src',aaa);
             
        	} 


            _alazyload();
            //document.documentElement
            var oDcu = document.querySelector('document');
            //window.innerHeight;
            document.addEventListener('scroll',function(){
                _alazyload();
            },false);

            function _alazyload(){
                var aImg = document.querySelectorAll('[data-src]');
                Array.prototype.forEach.call(aImg, function(v, i){
                    var box = v.getBoundingClientRect();              
                    if((box.top > 0 || box.bottom >0) && box.top < window.innerHeight){
                        if( v.nodeName.toLowerCase() == 'img' ){
                            var url = v.getAttribute('data-src');
                            v.setAttribute('src',url);
                        }else{
                            var url = v.getAttribute('data-src');
                            v.style.backgroundImage = 'url('+url+')';
                        }
                        
                    }
                });
            };
            // _alazyload();
         






            document.querySelector('#login').onclick = function(){
                route.my()
            } 
            document.querySelector('#camera').onclick = function(){
                route.index();
            }                   	
        	
		});
                
         // $.ajax({
         //          url: 'http://10.9.0.148:3000/aa',
         //          type: 'GET',
         //          // contentType:"application/json",
         //          // dataType:"json",
         //          // timeout:20000,
         //          // data: { "img": '12132'},
         //          success: function(result) {
         //              // Do something with the result
         //              // console.log(result)
	        //         var image = document.getElementById('myImage');
	        //         image.src = "data:image/jpeg;base64," + result.data[0].images;                      
         //            }   
         //        })     
    }
    return{
        minor:minor
    }
});

//var $ = require('./plug/jquery-1.10.2.js');
// 　　require.config({
// 　　　　paths: {
// 　　　　　　"jquery": "jquery-1.10.2.js"
// 　　　　}
// 　　});
// document.querySelector('#boxs').innerHTML = '11111111';
// document.querySelector('#boxs').onclick = function(){
//    window.location.href = location.pathname + '#/detail2?detail=2';
//    document.querySelector('#boxs').innerHTML = '22222'; 
// }

// // 这个状态代表了应用程序的状态并且会在onResume()和onPause()中保存和恢复
// var appState = {
//     takingPicture: true,
//     imageUri: ""
// };

// var APP_STORAGE_KEY = "exampleAppState";

// var app = {
//     initialize: function() {
//         this.bindEvents();
//     },
//     bindEvents: function() {
//         // 这里我们注册我们关心的生命周期事件回调
//         //监听照相事件
//         document.addEventListener('deviceready', this.onDeviceReady, false);
//         document.addEventListener('pause', this.onPause, false);
//         document.addEventListener('resume', this.onResume, false);
//     },
//     onDeviceReady: function() {
//         document.getElementById("take-picture-button").addEventListener("click", function() {
//             //由于camera插件方法启动了一个外部活动
//             //这里有一次机会我们的应用程序被kill掉在回调被成功或者失败调用之前
//             // 在onPause()和onResume()那里我们保存和恢复状态，来处理这个事情
//             appState.takingPicture = true;

//             navigator.camera.getPicture(cameraSuccessCallback, cameraFailureCallback,
//                 {
//                     sourceType: Camera.PictureSourceType.CAMERA,
//                     destinationType: Camera.DestinationType.FILE_URI,
//                     targetWidth: 250,
//                     targetHeight: 250
//                 }
//             );
//         });
//     },
//     onPause: function() {
//         // 这里我们检测我们是否在获取图片，如果在，我们希望保存我们的状态以便onResume()
//         // 恢复的时候使用，如果我们获得了图片URI我们也要存储
//         if(appState.takingPicture || appState.imageUri) {
//             window.localStorage.setItem(APP_STORAGE_KEY, JSON.stringify(appState));
//         }
//     },
//     onResume: function(event) {
//         // 这里我们检差存储的状态，如果需要恢复他。由你跟踪任何添加的插件结果的来源
//         //  (也就是说你代码的哪一步被调用)，还有什么参数提供给插件如果相关
//         var storedState = window.localStorage.getItem(APP_STORAGE_KEY);

//         if(storedState) {
//             appState = JSON.parse(storedState);
//         }

//         // 检查如果我们需要恢复我们的图片
//         if(!appState.takingPicture && appState.imageUri) {
//             document.getElementById("get-picture-result").src = appState.imageUri;
//         }
//         // 现在我们可以检测如果插件结果在事件对象里面
//         // 这里需要cordova-android 5.1.0+
//         else if(appState.takingPicture && event.pendingResult) {
//             // 检测插件调用是否成功并调用相应的回调。对于camera插件，"OK"
//             //意味着成功其他意味着错误
//             if(event.pendingResult.pluginStatus === "OK") {
//                 // camera放置同样的结果在resume对象，因为成功回调传递给了getPicture(),
//                 // 因此我们可以传递同样的回调，返回一些其他东西。查询文档，了解怎么解释你使用
//                 // 插件的结果字段
//                 cameraSuccessCallback(event.pendingResult.result);
//             } else {
//                 cameraFailureCallback(event.pendingResult.result);
//             }
//         }
//     }
// }

// // 这里是回调我们传入getPicture()
// function cameraSuccessCallback(imageUri) {
//     appState.takingPicture = false;
//     appState.imageUri = imageUri;
//     document.getElementById("get-picture-result").src = imageUri;
// }

// function cameraFailureCallback(error) {
//     appState.takingPicture = false;
//     console.log(error);
// }

// app.initialize();


// define(['route','jquery'], function (route, $)  {
//     route.index();
//     // console.log(route.index())
// })


// if(!window.location.hash || window.location.hash.split("#")[1] == 'index'){
//     define(["text!./tpl/index.string"],function(tpl){
//        document.querySelector('#boxs').innerHTML = tpl;
//     });
// }

// if(window.location.hash.split("#")[1] == 'minor'){
//     var str = '?a=11&&b=2#minor';
//     define(["text!./tpl/"+str.substring(str.indexOf('#') + 1)+".string"],function(tpl){
//         document.querySelector('#boxs').innerHTML = tpl;
//     });    
// }


// define(['index','jquery','text','load','route','spa'], function (index,  $, text, load,route,spa) {
//     document.querySelector('#index').onclick = function(){
//         // route.minor();
//         define(['jquery','minor'], function ($, minor){
    
//     // function(){
//         var str = '?a=11&&b=2#minor';
//         define(['minor', 'jquery','text','load'], function (minor, $, text, load) {
//             window.location.href = window.location.pathname + str;
//             define(["text!./tpl/"+str.substring(str.indexOf('#') + 1)+".string"],function(tpl){
//                 document.querySelector('#boxs').innerHTML = tpl;
//             });
//         });             
//     // }
//     });
//     }   
// });






define(['jquery','text','load', 'route','spa'], function ( $, text, load, route,spa) {

    function index(){
        // document.querySelector('#index').onclick = function(){
        // 	route.minor();            
        // }   
        $('#index').on('click', function(){
                $.post("http://192.168.1.103:3000/pai",{im:'hanso'},function(data){
                    console.log(data);
                })            
        })
        document.getElementById("cameraTakePicture").addEventListener("click", cameraTakePicture);

        function cameraTakePicture() {
           navigator.camera.getPicture(onSuccess, onFail, { 
              quality: 50,
              destinationType: Camera.DestinationType.DATA_URL
           });

           function onSuccess(imageData) {
                var image = document.getElementById('myImage');
                // alert(imageData)
 $.post("http://192.168.1.103:3000/pai",{im:imageData},function(data){
                    alert(111221)
                    console.log(data);
                })                
                image.src = "data:image/jpeg;base64," + imageData;

                // var imageDataq = HttpServletResponse.getOutputStream.write(imageData);
                // alert(imageDataq)



           }

           function onFail(message) {
              alert('没拍的原因: ' + message);
           }
        }


    }

    return{
        index:index
    }
});
 




// document.querySelector('#minor').onclick = function(){
//     //jump('?a=11&&b=2#index');
// }

// function jump(str){
//     require(['index','jquery','text','load'], function (index, $, text, load) {
//         //var str = '?a=11&&b=2#minor';
//         window.location.href = window.location.pathname + str;
//         define(["text!./tpl/"+str.substring(str.indexOf('#') + 1)+".string"],function(tpl){
//             document.querySelector('#boxs').innerHTML = tpl;
//         });
//     });          
// }







// });
// $.get("http://127.0.0.1:3000/aa", function(data){
//   console.log("Data Loaded: " + data);
// });

////写入
// define(["text!./sap/test.tpl"],function(tpl){
//     console.log(typeof(tpl));
//     document.querySelector('body').innerHTML = tpl;
//     // alert(tpl)
// });


// require(['index','my', 'minor','jquery','text','load','route'], function (index, my, minor, $, text, load,route) {

    
// });
// $('')
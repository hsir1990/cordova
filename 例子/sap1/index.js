// define(function(require){
//     var html = require("text!./test.html");
//     console.log(html);
// });		
define(["text!./test.tpl"],function(tpl){
    // console.log(tpl);
    // alert(11)
    document.querySelector('body').innerHTML = tpl;
});
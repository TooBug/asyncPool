var arr = [1,2,3,4]; // the array contains 100 elements
var asyncPool = require('../lib/index');

asyncPool(1,arr,function(element,callback){
        requestUrl('/xxx?element='+element,function(serverData){
                console.log(element,serverData);
                callback();
        });
},function(){
        console.log('all done.');
});


function requestUrl(url,callback){
        setTimeout(function(){
                callback(Math.random());  //echo the url
        },1000*Math.random());
}

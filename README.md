# Async Pool

[![npm](http://img.shields.io/npm/v/asyncpool.svg)](https://www.npmjs.com/package/asyncpool)
[![npm](http://img.shields.io/npm/l/asyncpool.svg)](https://www.npmjs.com/package/asyncpool)

A library to arrange async tasks with multi threads.

For example, you have 100 numbers in an Array, with each element, you want to request an url and then do something with the result.

You can just write like this:

```javascript
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
```

Let's make a fake `requestUrl()` method:

```javascript
function requestUrl(url,callback){
        setTimeout(function(){
                callback(Math.random());  //echo the url
        },1000*Math.random());
}
```

Then run this code:

```bash
1 0.20489364583045244
2 0.8399192735087126
3 0.8282372376415879
4 0.1924239993095398
all done.
```

See, all the tasks are run in order.

You can use `asyncPool(n,arr,func,func)` to use the multi thread, which means there would be `n` tasks running at the same time.

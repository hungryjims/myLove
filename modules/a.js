
require.config({
   'paths':{
       'b':'../modules/b'
   }
});


define(['b'],function(b){
    console.log("this is a");
});
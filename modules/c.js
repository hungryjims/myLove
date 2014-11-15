
require.config({
    'paths':{
        'b1':'../modules/b'
    }
});
define(['b1'],function(b1){
    console.log("this is c");
});
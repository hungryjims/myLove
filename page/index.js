
require.config({
    //'basrUrl':base
});

require(['../modules/a','../modules/c'],function(a,c){
    console.log("this is index");
});
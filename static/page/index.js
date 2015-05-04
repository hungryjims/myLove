
require.config({
    'baseUrl':'static/',
    'paths':{
        //sdsadasd
        'a':'modules/a',
        'b':'modules/b'
    },
    'shim':{
        'a':{
            'deps':['b']
        },
        'modules/b1':{
            'deps':[],
            'exports':"b1"
        }
    }
});
require(['b'],function(b){
    var test = b;
    test.test();
});
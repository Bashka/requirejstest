require.config({
  baseUrl: '/js/src',
  paths: {
    jquery: '/js/lib/jquery/jquery.min'
  }
});

require(['jquery'], function(jq){
  var routermap = {
    'user': '/user',
    'index': '/'
  };

  for(var route in routermap){
    var regexp = new RegExp('^' + routermap[route]);
    if (location.pathname.search(regexp) != -1) {
      require([route + '/main'], function(controller){
        controller.run();
      });
      break;
    }
  }
});

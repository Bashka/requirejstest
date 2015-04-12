require.config({
  baseUrl: '/js/austero',
  paths: {
    jquery: '/js/vendor/jquery',
    react: '/js/vendor/react'
  }
});

require([], function(){
  var routermap = {
    'moderator': '/moderator',
    'index': '/$',
    'other': '/.+'
  };

  for(var route in routermap){
    var regexp = new RegExp('^' + routermap[route]);
    if (location.pathname.search(regexp) != -1) {
      require(['pages/' + route + '/main'], function(controller){
        controller.run();
      });
      break;
    }
  }
});

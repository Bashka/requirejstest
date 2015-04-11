define('pages/index/main', function(require){
  return {
    run: function(){
      alert('index');
    }
  };
});

define('pages/moderator/main', function(require){
  return {
    run: function(){
      require(['api/moderator'], function(moderator){
        moderator.query();
      })
    }
  };
});

define('pages/other/main', function(require){
  return {
    run: function(){
      alert('other');
    }
  };
});

require.config({
  paths: {
    jquery: '/js/vendor/jquery.min'
  }
});

require(['jquery'], function(jq){
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

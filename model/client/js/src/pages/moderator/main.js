define('pages/moderator/main', function(require){
  return {
    run: function(){
      require(['api/moderator'], function(moderator){
        moderator.query();
      })
    }
  };
});

define('pages/moderator/main', function(require){
  return {
    run: function(){
      if(require.specified('api/moderator')){
        require(['api/moderator'], function(moderator){
          moderator.query();
        })
      }
    }
  };
});

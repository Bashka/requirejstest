define('user/main', function(require){
  return {
    run: function(){
      var ListView = require('user/View/ListView');
      var User = require('user/Model/User');

      ListView.render({
        users: [
          new User('artur')
        ]
      });
    }
  };
});

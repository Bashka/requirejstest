define('pages/index/main', function(require){
  function run(){
    require(['react', 'components/Label'], function(React, Label){
      React.render(
        React.createElement(Label, {value: 'test'}),
        document.getElementById('base')
      );
    });
  }
  return {
    run: run
  };
});

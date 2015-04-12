define('components/Label', ['react'], function(React){
  return React.createClass({
    displayName: 'Label',

    getInitialState: function(){
      return {value: this.props.value};
    },

    clicked: function(index){
      if (this.state.value == 'test') {
        this.setState({value: 'artur'});
      }
      else {
        this.setState({value: 'test'});
      }
    },

    componentDidMount: function(){
      this.getDOMNode().addEventListener('click', this.clicked);
    },

    componentDidUnmount: function(){
      this.getDOMNode().removeEventListener('click', this.clicked);
    },

    render: function() {
      return React.createElement('span', 
        {className: 'Label'}, 
        this.state.value);
    }
  });
});

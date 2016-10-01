var React=require('react');
var ReactDOM=require('react-dom');
var Child1=require('./components/Child1.js');
var Child2=require('./components/Child2.js');
var Child3=require('./components/Child3.js');
var MainComponent=React.createClass({
 getInitialState: function()
  {
    return({var1:'Its my state'});
  },
  changeState:function()
  {
    this.setState({var1:'Value is changed'});
  },
  render:function(){
      return(
      <div>
        <Child1></Child1>
        <Child2></Child2>
        <Child3></Child3>
        
      </div>
    );
  }
});
ReactDOM.render(<MainComponent/>,document.getElementById('app1'));

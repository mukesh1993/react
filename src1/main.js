var React=require('react');
var ReactDOM=require('react-dom');


var Child2=require('./components/Child2.js');
var Child1=require('./components/Child1.js');


var MainComponent=React.createClass({
  getInitialState:function()
  {
    console.log('inside initial state');
    return(
      {details:'statedata'}
    );
  },
  handleClick:function()
  {
console.log("inside handleClick");
    this.setState({details:'new data'});
  },

  render:function(){
console.log("inside render");
    return(
      <div>
      <div className="row">
      <div className="col-12">
      
      <Child2 pass2={this.state.details} ></Child2>

       </div>

      </div>
      <div className="row">
       <div className="col-12">

<Child1 pass1={this.state.details} fc={this.handleClick}></Child1>

       </div>
       </div>
      </div>
    );
  }
});
ReactDOM.render(<MainComponent/>,document.getElementById('app'));

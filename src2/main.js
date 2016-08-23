var React=require('react');
var ReactDOM=require('react-dom');


var Child2=require('./components/Child2.js');



var MainComponent=React.createClass({
  getInitialState:function()
  {
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
      <button onClick={this.handleClick}>click meeeee!!!!!</button>
      <Child2 pass={this.state.details}></Child2>

       </div>

      </div>
      </div>
    );
  }
});
ReactDOM.render(<MainComponent/>,document.getElementById('app'));

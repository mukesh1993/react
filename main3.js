var React=require('react');//for parent to know how many times it rendered for executing change to main   name child8
var ReactDOM=require('react-dom');

var MainComponent=React.createClass({
  i:0,
   getInitialState:function(){

     return({status:'muni'});
   },
  update: function()
  {
    this.i=this.i+1;
    //console.log(this.state.status);
    this.setState({status:this.i});
  },

  render:function(){

        return(
      <div>
        <button onClick={this.update}>click</button>
        <h1>{this.state.status}</h1>
      </div>
    );
  }
});
ReactDOM.render(<MainComponent/>,document.getElementById('app1'));

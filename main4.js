var React=require('react');//for parent-child to know how many times it rendered change to main to execute
var ReactDOM=require('react-dom');
var require=require('components/Child1.js')
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

        <Child8 a={this.update}></Child8>
        <h1>{this.state.status}</h1>
      </div>
    );
  }
});
ReactDOM.render(<MainComponent/>,document.getElementById('app1'));

var React=require('react');


var Child2=React.createClass({
  render:function(){
    console.log("inside Child2");
    return(
      <div>

      <h1>{this.props.pass}</h1>
      </div>
    );
  }
});
module.exports=Child2

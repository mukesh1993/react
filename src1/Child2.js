var React=require('react');


var Child2=React.createClass({
  render:function(){
    console.log("inside Child2");
    return(
      <div>
      <h2>child 2</h2>
     <h1>{this.props.pass2}</h1>
      </div>
    );
  }
});
module.exports=Child2

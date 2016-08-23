var React=require('react');
var Child1=React.createClass({
render:function(){
  return(
<div>
<h2>child1</h2>
<h1>{this.props.pass1}</h1>
<button onClick={this.props.fc}>click me</button>
</div>
  );
}

});
module.exports=Child1

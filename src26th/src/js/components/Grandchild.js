var React=require('react');
var Grandchild=React.createClass({
change:function()
{

  this.props.q(this.props.lid);
},
  render:function(){
    return(
  <div>
       <button className="btn btn-primary success" onClick={this.change}>{this.props.lid}</button>
  </div>
);
}
});
module.exports=Grandchild

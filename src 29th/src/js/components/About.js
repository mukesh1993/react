var React=require('react');
var About=React.createClass({
  render:function(){
    return(
      <div>
      <p>About {this.props.params.aboutName}</p>
      
      </div>
    );
  }
});
module.exports=About

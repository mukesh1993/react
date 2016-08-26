var React=require('react');
var Grandchild=require('./Grandchild.js');
var Child1=React.createClass({
random1:function(lab)
{

this.props.p1(lab);

},

  render:function(){

    var labelArr= this.props.p3.map(function(e){

           //console.log(e.id);
           if(e.id=="INBOX" || e.id=="SENT" ||e.id=="IMPORTANT" ||e.id=="DRAFT" )
           {
             return(
              <Grandchild lid={e.id} q={this.random1}></Grandchild>
             );
           }
         },this);

    return(
    <div>
     {labelArr}
    </div>
  );
  }
});
module.exports=Child1

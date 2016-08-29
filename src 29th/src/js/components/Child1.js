var React=require('react');
var Grandchild=require('./Grandchild.js');
var Modalwindow=require('./Modalwindow.js');
var Child1=React.createClass({
random1:function(lab)
{

this.props.p1(lab);

},
getInitialState: function()
{
  return({status:false});
},
change:function(){

this.setState({status:true});
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
  var muk=this.state.status?<Modalwindow/>:null;
    return(
    <div>
    <a href="#myModal" role="button" className="btn btn-success" data-toggle="modal"  id="modal" onClick={this.change}>Compose</a>
    {muk}
    {labelArr}
    </div>
  );
  }
});
module.exports=Child1

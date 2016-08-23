var React=require('react');

var Child1=React.createClass({

  render:function(){

    var labelArr= this.props.p3.map(function(e){
             return(
               <div>
                    <button className="btn btn-primary success">{e.name}</button>
               </div>
             );
           });

    return(
    <div>
     {labelArr}
    </div>
  );
  }
});
module.exports=Child1

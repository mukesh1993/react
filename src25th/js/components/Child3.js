var React=require('react');
var Child3=React.createClass({

  render:function(){

    return(
<div className="list-group-item">

<div className="container-fluid">
	<div className="row">
		<div className="col-lg-4" id="muk">
    {this.props.mailFrom}
		</div>
		<div className="col-lg-4" id="day">
       {this.props.mailSubject}
		</div>
		<div className="col-lg-4" id="da">
            {this.props.mailDate}
		</div>
	</div>
</div>







</div>

    );

  }
});
module.exports=Child3

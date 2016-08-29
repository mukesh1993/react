var React=require('react');
var Modalwindow2=React.createClass({

submit1:function()
{
  var accessToken = localStorage.getItem('gToken');
  console.log("Access token: "+accessToken);
  var email = '';
  var Headers = {'To': this.state.To,'Subject': this.state.Subject};
  for(var header in Headers)
  {
    email += header += ": "+Headers[header]+"\r\n";
    console.log("email---"+email);
    console.log("header---"+header);
    console.log("Headers[header]---"+Headers[header]);
   }
  email += "\r\n" + this.state.Message;
  console.log("constructed email: " +email);
  var encodedMessage =  window.btoa(email).replace(/\+/g, '-').replace(/\//g, '_');
  $.ajax({
         url: 'https://www.googleapis.com/gmail/v1/users/mukeshkommuri123%40gmail.com/messages/send?key={AIzaSyAnWPi_H4F191snt0wE8UnM23-q-BXqeyM}',
         dataType: 'json',
         contentType: "application/json",
         type: 'POST',
         data: JSON.stringify({'raw': encodedMessage}),
         beforeSend: function (request)
         {
           request.setRequestHeader("Authorization", "Bearer "+accessToken);
         },
   success: function(data)
   {
     console.log("Success");
   }.bind(this),
   async: false,
   error: function(xhr, status, err) {
     console.error("Error.."+err.toString());
   }.bind(this)
  });

},


  getInitialState: function()
  {
    return({Message:"yuuu"});
  },



sending:function(e){



if(e.target.id=="Message")
{

  var t=e.target.value;
  this.setState({Message:t});
}
},

render:function(){

return(
<div>





<div className="modal fade" id="myModal4">
<div className="modal-dialog">
<div className="modal-content">
  <div className="modal-header">
    <button className="close" data-dismiss="modal">x</button>
    <h4 className="modal-title">New Messages</h4>
  </div>

  <div className="modal-body">

    <form  className="form-horizontal">
      <div className="form-group">
        <div className="col-lg-12">
          <input className="form-control"   placeholder="To" type="email" value={this.props.j} disabled/>
        </div>
      </div>
      <div className="form-group">
        <div className="col-lg-12">
          <input className="form-control" id="Subject"  placeholder="Subject" type="text"value={this.props.k} disabled/>
        </div>
      </div>
      <div className="form-group">
        <div className="col-lg-12" >
          <textarea className="form-control" id="Message"  placeholder="Message" row="30" onChange={this.sending}></textarea>
        </div>
      </div>
    </form>

  </div>


  <div className="modal-footer">
  <div class="form-group">
  <div class="col-lg-offset-2 col-lg-10">

      <span class="btn green fileinput-button">


        <input type="file" name="files[]" multiple=""/>
      </span>

  </div>
</div>

    <button className="btn btn-default" type="button" onClick={this.submit1}>Send</button>
  </div>
</div>

</div>
</div>




  </div>
);

}
});
module.exports=Modalwindow2

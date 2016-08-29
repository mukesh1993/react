var React=require('react');
var Modalwindow2=require('./Modalwindow2.js')
var Modalwindow1=React.createClass({
  getInitialState: function()
  {
    return({status:false});
  },
  change1:function(){

  this.setState({status:true});
  },
  appendToIframe: function(message)
  {
   var iFrameNode = this.refs.myIframe,
   frameDoc = iFrameNode.contentWindow.document;
   frameDoc.write(message);
  },






render:function(){

  return(
    <div>
    <div className="modal fade" id="myModal1">
    <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <button className="close" data-dismiss="modal">x</button>

      </div>

      <div className="modal-body">

        <form  className="form-horizontal">
          <div className="form-group">
            <div className="col-lg-12">
              <input className="form-control" id="To" type="email" value={this.props.a} disabled></input>
            </div>
          </div>
          <div className="form-group">
            <div className="col-lg-12">
              <input className="form-control" id="Subject" type="text" value={this.props.b} disabled></input>
            </div>
          </div>
          <iframe id="iframe-message" ref="myIframe" >
              </iframe>
        </form>

      </div>


      <div className="modal-footer">


        <a href="#myModal4" role="button" className="btn btn-success" data-toggle="modal" onClick={this.change1}>reply</a>
        {this.state.status?<Modalwindow2 j={this.props.a} k={this.props.b}/>:null}
      </div>
    </div>

    </div>
    </div>
















    </div>
  );
},

componentDidMount: function(){
var encodedBody = this.props.d;

encodedBody = encodedBody.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, '');
encodedBody = decodeURIComponent(escape(window.atob(encodedBody)));
this.appendToIframe(encodedBody);
},

});



module.exports=Modalwindow1

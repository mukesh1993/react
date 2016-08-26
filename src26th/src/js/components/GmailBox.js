var React = require('react');
// var LeftSideBar = require('./LeftSideBar');
var loadedData = false;
var Child1=require('./Child1.js');
var Child2=require('./Child2.js');
var Child3=require('./Child3.js');
var GmailBox = React.createClass({
  getInitialState: function()
  {
    return({allLabelsData:[],msgData:[]});
  },
  gmailLogin: function()
  {
    var acToken, tokenType, expiresIn;
    var OAUTHURL    =   'https://accounts.google.com/o/oauth2/v2/auth?';
    var SCOPE       =   'https://mail.google.com/ https://www.googleapis.com/auth/gmail.send https://www.googleapis.com/auth/gmail.readonly';
    var CLIENTID    =   '627883911138-f73q98k32kl3qfoqojgq46hoq9demqg2.apps.googleusercontent.com';
    var REDIRECT    =   'http://localhost:8080';
    var TYPE        =   'token';
    var _url        =   OAUTHURL + 'scope=' + SCOPE + '&client_id=' + CLIENTID + '&redirect_uri=' + REDIRECT + '&response_type=' + TYPE;
    var win         =   window.open(_url, "windowname1", 'width=800, height=600');

    var pollTimer   =   window.setInterval(function()
    {

      try
      {
        if (win.document.URL.indexOf(REDIRECT) != -1)
        {
          window.clearInterval(pollTimer);
          var url =   win.document.URL;
          acToken =   gup(url, 'access_token');
          tokenType = gup(url, 'token_type');
          expiresIn = gup(url, 'expires_in');
          localStorage.setItem('gToken',acToken);
          localStorage.setItem('gTokenType',tokenType);
          localStorage.setItem('gExprireIn',expiresIn);
          function gup(url, name) {
            name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
            var regexS = "[\\#&]"+name+"=([^&#]*)";
            var regex = new RegExp( regexS );
            var results = regex.exec( url );
            if( results == null )
            return "";
            else
            return results[1];
          }
          win.close();
        }
      }
      catch(e)
      {
        console.log(e);
      }
    }, 500);
    this.allLabels();
    //this.getmsgIDS();//doubt
  },


  allLabels: function()
  {
    var accessToken = localStorage.getItem('gToken');
    $.ajax({
      url: 'https://www.googleapis.com/gmail/v1/users/me/labels?key={AIzaSyAnWPi_H4F191snt0wE8UnM23-q-BXqeyM}',
      dataType: 'json',
      type: 'GET',
      beforeSend: function (request)
      {
        request.setRequestHeader("Authorization", "Bearer "+accessToken);
      },
      success: function(data)
      {
        this.setState({allLabelsData:data.labels});
        loadedData=true;
      //  console.log(data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(err.toString());
      }.bind(this)
    });

  },









  getmsgIDS: function(label)
  {
    var accessToken = localStorage.getItem('gToken');
    $.ajax({
      url: 'https://www.googleapis.com/gmail/v1/users/mukeshkommuri123%40gmail.com/messages?labelIds='+label+'&maxResults=10&key={AIzaSyAnWPi_H4F191snt0wE8UnM23-q-BXqeyM}',
      dataType: 'json',
      type: 'GET',
      async:false,
      beforeSend: function (request)
      {
        request.setRequestHeader("Authorization", "Bearer "+accessToken);
      },
      success: function(data)
      {
         var arr=[];
        for (var i = 0; i < data.messages.length; i++) {
          arr.push(this.getInbox(data.messages[i].id));
        }
        this.setState({msgData:arr});
        //loadedData=true;
        //console.log(data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(err.toString());
      }.bind(this)
    });

  },








  getInbox:function(id)
  {
    var accessToken = localStorage.getItem('gToken');
    var a=$.ajax({
      url:'https://www.googleapis.com/gmail/v1/users/mukeshkommuri123%40gmail.com/messages/'+id+'?key={AIzaSyAnWPi_H4F191snt0wE8UnM23-q-BXqeyM}',
      dataType: 'json',
      type: 'GET',
      async:false,
      beforeSend: function (request)
      {
        request.setRequestHeader("Authorization", "Bearer "+accessToken);
      },
      success: function(data)
      {
        //      var lab1=[];
        // for (var i = 0; i <data.payload.headers.length; i++)
        // {
        //   if(data.payload.headers[i].name=="From" || data.payload.headers[i].name=="Subject" || data.payload.headers[i].name=="Date")
        //   {
        //   lab1.push({"name":data.payload.headers[i].name,"value":data.payload.headers[i].value});
        // }
        //  }
        //this.state.msgData.push(data);
        //console.log(lab1);
        //  this.setState({inboxData:lab1});
        loadedData=true;
        //console.log(data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(err.toString());
      }.bind(this)
    });
    return a.responseJSON;
  },
  render:function()
  {
    var leftPanel;
    var rightPanel;

    if(loadedData){
      leftPanel =<Child1 p3={this.state.allLabelsData} p1={this.getmsgIDS}/>
      rightPanel=<Child2 p4={this.state.msgData}/>
      console.log(this.state.msgData);
    }

    return(
      <div className="GmailBox">
      <div className="container-fluid">
      <div className="row">
      <div className="col-lg-1">
      <button id="authorize-button" onClick={this.gmailLogin} className="btn btn-primary pull-left">Sign in</button>
      </div>
      <div className="col-lg-8 pull-right">
    {/*  <h2>React 123</h2>*/}
    <div className="row">
  		<div className="col-lg-4">
            <h2>subject</h2>
  		</div>
  		<div className="col-lg-4">
        <h2>from</h2>
  		</div>
  		<div className="col-lg-4">
          <h2>date123</h2>
  		</div>
  	</div>
      </div>
      </div>
      <div className="row">
      <div className="col-lg-2">
      {leftPanel}
      </div>
      <div className="col-lg-10">
      {rightPanel}
      </div>
      </div>
      </div>
      </div>
    );
  }
});

module.exports = GmailBox;

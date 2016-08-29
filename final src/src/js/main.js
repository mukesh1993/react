var React=require('react');
var ReactDOM=require('react-dom');

var GmailBox=require('./components/GmailBox.js');
var Child1=require('./components/Child1.js');
var Child2=require('./components/Child2.js');

var lab={
   "labels": [
    {
     "id": "INBOX",
     "name": "INBOX",
     "messageListVisibility": "hide",
     "labelListVisibility": "labelShow",
     "type": "system"
    },
    {
     "id": "IMPORTANT",
     "name": "IMPORTANT",
     "messageListVisibility": "hide",
     "labelListVisibility": "labelShow",
     "type": "system"
    },

    {
     "id": "CHAT",
     "name": "CHAT",
     "messageListVisibility": "hide",
     "labelListVisibility": "labelHide",
     "type": "system"
    },
    {
     "id": "SENT",
     "name": "SENT",
     "messageListVisibility": "hide",
     "labelListVisibility": "labelShow",
     "type": "system"
    },

    {
     "id": "TRASH",
     "name": "TRASH",
     "messageListVisibility": "hide",
     "labelListVisibility": "labelHide",
     "type": "system"
    },

    {
     "id": "DRAFT",
     "name": "DRAFT",
     "messageListVisibility": "hide",
     "labelListVisibility": "labelShow",
     "type": "system"
    },
    {
     "id": "SPAM",
     "name": "SPAM",
     "messageListVisibility": "hide",
     "labelListVisibility": "labelHide",
     "type": "system"
    },
    {
     "id": "STARRED",
     "name": "STARRED",
     "messageListVisibility": "hide",
     "labelListVisibility": "labelShow",
     "type": "system"
    },
    {
     "id": "UNREAD",
     "name": "UNREAD",
     "type": "system"
    }
   ]
  }
  var lab1=[];
  for (var i = 0; i < lab.labels.length; i++) {
    lab1.push({"id":lab.labels[i].id,"name":lab.labels[i].name});
  }
 //console.log(lab1);

var MainComponent=React.createClass({
  // getInitialState:function()
  // {
  //   return(
  //     {title:'Home',
  //     description:'Lorem'}
  //   );
  // },
 //  handleClick:function(title,dsc){
 //    this.setState({title:title,description:dsc})
 // },
  render:function(){

        return(
      <div>
      <GmailBox/>
    {/*<Child1 p3=/>*/}
      </div>
    );
  }
});
ReactDOM.render(<MainComponent/>,document.getElementById('app'));

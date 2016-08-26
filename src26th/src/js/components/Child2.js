var React=require('react');
var Child3=require('./Child3.js');
var Child2=React.createClass({


  getHTMLPart: function(arr)
   {
     for(var x = 0; x <= arr.length; x++)
     {
       if(typeof arr[x].parts === 'undefined')
       {
         if(arr[x].mimeType === 'text/html')
         {
           return arr[x].body.data;
         }
       }
       else
       {
         return this.getHTMLPart(arr[x].parts);
       }
     }
     return '';
   },


  render:function(){



var that=this;



var InboxMail=this.props.p4.map(function(mail){



  if(typeof mail.payload.parts === 'undefined')
    {
      encodedBody = mail.payload.body.data;
    }
    else
    {
      encodedBody = that.getHTMLPart(mail.payload.parts);
    }





               var from;
               var subject;
               var date;
               for(var i=0;i<mail.payload.headers.length;i++){
                    if(mail.payload.headers[i].name=="From"){
                      from=mail.payload.headers[i].value;

                    }
                    if(mail.payload.headers[i].name=="Subject"){
                      subject=mail.payload.headers[i].value;
                    }
                    if(mail.payload.headers[i].name=="Date"){
                      date=mail.payload.headers[i].value;
                         //console.log(date);
                    }
               }

         return( <Child3 mailFrom={from} mailSubject={subject}  mailDate={date} encodedBodyToChild={encodedBody}/>);
        // console.log(date);


    });


    return(
      <div>

      {InboxMail}
      </div>
    );
  }
});
module.exports=Child2

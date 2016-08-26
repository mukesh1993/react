var React=require('react');
var Child3=require('./Child3.js');
var Child2=React.createClass({

  render:function(){
    var InboxMail=this.props.p4.map(function(mail){

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

         return( <Child3 mailFrom={from} mailSubject={subject}  mailDate={date} />);
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

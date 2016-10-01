var fs=require('fs');
console.log('before');
//------------reading-----------
// fs.readFile('./muk.txt','utf-8',function(err,msg){//async
//
// if(err)
// {
//   console.log(err);
// }
//   console.log(msg);
// });
// var a=fs.readFileSync('./muk.txt','utf-8');//sync
// console.log(a);
//-------------writing-------------
// fs.writeFile('./muk1.txt','this is demo','utf-8',function(err){//async
//
//  if(err)
//  {
//    console.log(err);
//  }
//    console.log('file written');
// });
// var a=fs.writeFileSync('./muk1.txt','this is demo7');//sync
//-----------reading&writing-----------
// var src='./muk.txt';//async
// var dest='muk1.txt';
// function mukesh(src,dest)
// {
//   fs.readFile(src,'utf-8',function(err,msg){
//
//    if(err)
//    {
//      console.log(err);
//    }
//     console.log('file read');
//
//    fs.writeFile(dest,msg,function(err){
//
//      if(err)
//     {
//        console.log(err);
//      }
//        console.log('file written');
//     });
//     });
//
//
// }
// mukesh(src,dest);
//var src='./muk.txt';//sync
//var dest='muk1.txt';
//function mukesh(src,dest)
//{
//var a=fs.readFileSync(src,'utf-8');
//var c=fs.writeFileSync(dest,a);
//}
//mukesh(src,dest);
//-----------linebyline--------------
var src='./muk.txt';
var input1=fs.createReadStream(src);//creating read stream
var rl=require('readline').createInterface({
input:input1,
});
rl.on('line',function(line){
  console.log("line is"+line);
});
console.log("after");

var t=function(n)
{
var a=0,b=1;
return function fibnocci()
{

	for(var i=0;i<n;i++)
	{
		var c=a+b;
		a=b;
		b=c;
		console.log(c);
	}

}
}
var h=t(5);
h();

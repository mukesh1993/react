var a=0,b=1;
(function fibnocci()
{

	for(var i=0;i<5;i++)
	{
		var c=a+b;
		a=b;
		b=c;
		console.log(c);
	}

})();

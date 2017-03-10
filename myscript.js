var tprice=1.99;
var cprice=2.99;
var sprice=3.99;

var ttcost=1.99;
var tccost=2.99;
var tscost=3.99;
var subtot=8.97;

function UpdateTshirtCost()
{
	var tshirt=document.getElementById('ctn_qty').value;
	valid=validate(tshirt);
	if (valid==1) 
	{
		alert("Number of items must be greater than 0");
		document.getElementById('ctn_qty').value=1;

	}
	else if (valid==2) 
	{
		alert("Maximum limit of buying an item is 10000");
		document.getElementById('ctn_qty').value=1;
	}
	else
	{
	document.getElementById('ctn_cost').innerHTML="$"+(tprice*tshirt).toFixed(2);
	ttcost=tprice*tshirt;
	UpdateTotal();
    }
}

function UpdateCapCost()
{
	var cap=document.getElementById('bsc_qty').value;
	valid=validate(cap);
	if (valid==1) 
	{
		alert("Number of items must be greater than 0");
		document.getElementById('ctn_qty').value=1;
	}
	else if (valid==2) 
	{
		alert("Maximum limit of buying an item is 10000");
		document.getElementById('ctn_qty').value=1;
	}
	else
	{
		document.getElementById('cap_cost').innerHTML="$"+(cprice*cap).toFixed(2);
		tccost=cprice*cap;
		UpdateTotal();
	}
}

function UpdateShortsCost()
{
	var shorts=document.getElementById('shrts_qty').value;
	valid=validate(shorts);
	if (valid==1) 
	{
		alert("Number of items must be greater than 0");
		document.getElementById('ctn_qty').value=1;
	}
	else if (valid==2) 
	{
		alert("Maximum limit of buying an item is 10000");
		document.getElementById('ctn_qty').value=1;
	}
	else
	{
	document.getElementById('shorts_cost').innerHTML="$"+(sprice*shorts).toFixed(2);
	tscost=sprice*shorts;
	UpdateTotal();
}
}

function UpdateTotal()
{
	subtot=ttcost+tccost+tscost;
	
	document.getElementById('st').innerHTML="$"+subtot.toFixed(2);
	document.getElementById('vat').innerHTML="$"+((0.2)*subtot).toFixed(2);
	document.getElementById('tc').innerHTML="$"+(((0.2)*subtot)+subtot).toFixed(2);
}

function validate(item)
{
	if (item<=0) 
	{
		return(1);
	}
	else if(item>=10000)
	{
		return(2);
	}
	else return;
}

function cotDel()
{
	$("#ctm").remove();
	ttcost=0;
	UpdateTotal();
}

function capDel()
{
	$("#bcos").remove();
	tccost=0;
	UpdateTotal();
}

function shortDel()
{
	$("#ssm").remove();
	tscost=0;
	UpdateTotal();
}
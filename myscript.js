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
	document.getElementById('ctn_cost').innerHTML="$"+(tprice*tshirt).toFixed(2);
	ttcost=tprice*tshirt;
	UpdateTotal();
}

function UpdateCapCost()
{
	var cap=document.getElementById('bsc_qty').value;
	document.getElementById('cap_cost').innerHTML="$"+(cprice*cap).toFixed(2);
	tccost=cprice*cap;
	UpdateTotal();
}

function UpdateShortsCost()
{
	var shorts=document.getElementById('shrts_qty').value;
	document.getElementById('shorts_cost').innerHTML="$"+(sprice*shorts).toFixed(2);
	tscost=sprice*shorts;
	UpdateTotal();
}

function UpdateTotal()
{
	subtot=ttcost+tccost+tscost;
	document.getElementById('st').innerHTML="$"+subtot.toFixed(2);
	document.getElementById('vat').innerHTML="$"+((0.2)*subtot).toFixed(2);
	document.getElementById('tc').innerHTML="$"+(((0.2)*subtot)+subtot).toFixed(2);
}
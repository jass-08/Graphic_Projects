/*.getElementById("fs-dropdown-content").addEventListener("click", changeAddress);*/
document.getElementById("fs-cart-bar").addEventListener("click",cartOpen);
document.getElementById("fs-close-menu").addEventListener("click",cartClose);


var total = 0;
var currFoodID = 0;

function changeAddress()
{
	var newAddress = event.target.innerHTML;
	var oldAddress = document.getElementById("fs-address").innerHTML.substring(0,document.getElementById("fs-address").innerHTML.length-1);
	document.getElementById("fs-address").innerHTML = newAddress + "&darr;";
	event.target.innerHTML = oldAddress;
	if(newAddress==("123 Pembina Hwy"))
	{
		document.getElementById("fs-fee").innerHTML = "Delivery Fee: $2"
		document.getElementById("fs-time").innerHTML = "Delivery Time: 25 Minutes"
	}
	else if(newAddress=="10 Bison Dr")
	{
		document.getElementById("fs-fee").innerHTML = "Delivery Fee: $5"
		document.getElementById("fs-time").innerHTML = "Delivery Time: 40 Minutes"
	}
	else if(newAddress=="200 St Mary's Rd")
	{
		document.getElementById("fs-fee").innerHTML = "Delivery Fee: $4"
		document.getElementById("fs-time").innerHTML = "Delivery Time: 30 Minutes"
	}
	else if(newAddress=="98 Main St")
	{
		document.getElementById("fs-fee").innerHTML = "Delivery Fee: $1"
		document.getElementById("fs-time").innerHTML = "Delivery Time: 15 Minutes"
	}

}

function popup(original)
{
	var temp = event.target.src;
	//alert(event.target);
	
	if(!temp.endsWith("images/fs-entry-desc.png"))
	{
		event.target.src="images/fs-entry-desc.png";
		
	}
	else
	{
		event.target.src=original;
	}
	
}	

function cartOpen()
{
	
	document.getElementById("fs-cart-menu").style.visibility="visible";
}

function cartClose()
{
	document.getElementById("fs-cart-menu").style.visibility="hidden";

}

function addItem(nameOfItem,priceOfItem)
{
	var targetDiv = event.target.parentElement.children;
	total += priceOfItem;
	var node = document.createElement("div");
  	var name = document.createTextNode(nameOfItem + "..........." + priceOfItem);
  
  	node.setAttribute('class', 'fs-menu-item');
  	node.appendChild(name);
  
  	document.getElementById("fs-cart-menu").appendChild(node);
  	document.getElementById("fs-cart-amount").innerHTML = "Sub-Total: " + total.toFixed(2);
  	
  	targetDiv[2].innerHTML = parseInt(targetDiv[2].innerHTML) + 1;//changing amount displayed for that item 
  	document.getElementById("fs-cart-bar").children[0].src = "images/cart test2.jpg";
 
  	
  	
}

function finalAddItem(nameOfItem,priceOfItem)
{
	var targetDiv = event.target.parentElement.children;
	var node = document.createElement("div");
  	var name = document.createTextNode(nameOfItem + "..........." + priceOfItem);
  	
  	node.setAttribute('class', 'final-menu-item');
  	
  	node.appendChild(name);

  	document.getElementById("final-cart").appendChild(node);
  	document.getElementById("final-cart-amount").innerHTML = "Total: " + total.toFixed(2);
  
}


function removeItem(nameOfItem,priceOfItem)
{
	var targetDiv = event.target.parentElement.children;
	total -= priceOfItem;
	if(total < 0.01)
	{
		total = 0;
		document.getElementById("fs-cart-bar").children[0].src = "images/cart test.png";
	}
	array = document.getElementsByClassName("fs-menu-item");
	var firstEncounter = true;

	for(i = 0; i < array.length; i++)
	{
		var tempString = array[i].innerHTML;
		
		if(firstEncounter && tempString.indexOf(nameOfItem) != -1)
		{
			firstEncounter = false;
			array[i].remove();
		}
	}
	
	if(!firstEncounter)
	{
  		document.getElementById("fs-cart-amount").innerHTML = "Sub-Total: " + total.toFixed(2);
  		targetDiv[2].innerHTML = parseInt(targetDiv[2].innerHTML) - 1;
  	}

}

function finalRemoveItem(nameOfItem,priceOfItem)
{
	var targetDiv = event.target.parentElement.children;
	if(total < 0.01)
	{
		total = 0;
	}
	array = document.getElementsByClassName("final-menu-item");
	var firstEncounter = true;

	for(i = 0; i < array.length; i++)
	{
		var tempString = array[i].innerHTML;
		
		if(firstEncounter && tempString.indexOf(nameOfItem) != -1)
		{
			firstEncounter = false;
			array[i].remove();
		}
	}
	
	if(!firstEncounter)
	{
  		document.getElementById("final-cart-amount").innerHTML = "Total: " + total.toFixed(2);
  		
  	}
}

function toCheckout()
{
	document.getElementById("food-selection").style.display="none";
	document.getElementById("checkout").style.display="block";
}
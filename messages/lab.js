function parse()
{
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.overrideMimeType("application/json");
	xmlhttp.onreadystatechange = function()
	{
		if ((this.readyState == 4) && (this.status == 200))
		{
			var obj = JSON.parse(this.responseText);
			for (x in obj)
			{
				document.getElementById("messages").innerHTML += obj[x].content + " - " + obj[x].username + "<br>";
			}
		}
	};
	xmlhttp.open("GET", "https://messagehub.herokuapp.com/messages.json", true);
	xmlhttp.send();
}

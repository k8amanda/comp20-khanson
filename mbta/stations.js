var redData1 = [
	['Alewife', 42.395428, -71.142483, 'place-alfcl'],
	['Davis', 42.39674, -71.121815, 'place-davis'],
	['Porter Square', 42.3884, -71.11914899999999, 'place-portr'],
	['Harvard Square', 42.373362, -71.118956, 'place-harsq'],
	['Central Square', 42.365486, -71.103802, 'place-cntsq'],
	['Kendall/MIT', 42.36249079, -71.08617653, 'place-knncl'],
	['Charles/MGH', 42.361166, -71.070628, 'place-chmnl'],
	['Park Street', 42.35639457, -71.0624242, 'place-pktrm'],
	['Downtown Crossing', 42.355518, -71.060225, 'place-dwnxg'],
	['South Station', 42.352271, -71.05524200000001, 'place-sstat'],
	['Broadway', 42.342622, -71.056967, 'place-brdwy'],
	['Andrew', 42.330154, -71.057655, 'place-andrw'],
	['JFK/UMass', 42.320685, -71.052391, 'place-jfk'],
	['North Quincy', 42.275275, -71.029583, 'place-nqncy'],
	['Wollaston', 42.2665139, -71.0203369, 'place-wlsta'],
	['Quincy Center', 42.251809, -71.005409, 'place-qnctr'],
	['Quincy Adams', 42.233391, -71.007153, 'place-qamnl'],
	['Braintree', 42.2078543, -71.0011385, 'place-brntn']
];
var redData2 = [
	['JFK/UMass', 42.320685, -71.052391, 'place-jfk'],
	['Savin Hill', 42.31129, -71.053331, 'place-shmnl'],
	['Fields Corner', 42.300093, -71.061667, 'place-fldcr'],
	['Shawmut', 42.29312583, -71.06573796000001, 'place-smmnl'],
	['Ashmont', 42.284652, -71.06448899999999, 'place-asmnl']
];
var blueData = [
	['Wonderland', 42.414246, -70.992144],
	['Revere Beach', 42.4071633648, -70.992193222],
	['Beachmont', 42.3974187182, -70.992193222],
	['Suffolk Downs', 42.3884015915, -71.0003578663],
	['Orient Heights', 42.386676, -71.006628],
	['Wood Island', 42.380797, -71.023394],
	['Airport', 42.3727334327, -71.035194397],
	['Maverick', 42.36886, -71.039926],
	['Aquarium', 42.359456, -71.05357],
	['State Street', 42.358897, -71.057795],
	['Government Center', 42.359297, -71.059895],
	['Bowdoin', 42.361457, -71.062129]
];
var orangeData = [
	['Oak Grove', 42.4353430165, -71.071189642],
	['Malden Center', 42.4273133438, -71.073871851],
	['Wellington', 42.4042955853, -71.0770046711],
	['Assembly', 42.39302, -71.08098],
	['Sullivan Square', 42.3857548427, -71.0770797729],
	['Community College', 42.3726383181, -71.0702776909],
	['North Station', 42.365512, -71.061423],
	['Haymarket', 42.362498, -71.058996],
	['State Street', 42.358897, -71.057795],
	['Downtown Crossing', 42.355518, -71.060225],
	['Chinatown', 42.352228, -71.062892],
	['Tufts Medical Center', 42.349873, -71.063795],
	['Back Bay', 42.3472772215, -71.0760390759],
	['Massachussetts Avenue', 42.3415519196, -71.0832166672],
	['Ruggles', 42.3356674788, -71.0905230045],
	['Roxbury Crossing', 42.3315274209, -71.0954046249],
	['Jackson Square', 42.3227388088, -71.1000823975],
	['Stony Brook', 42.3192008078, -71.1028289795],
	['Green Street', 42.3105691548, -71.107313633],
	['Forest Hills', 42.300362, -71.113411]
];

var map;
var image = 'http://www.iconhot.com/icon/png/web-control/16/red-info.png';
var image2 = 'http://www.iconhot.com/icon/png/web-control/16/blue-info.png';
var image3 = 'http://www.iconhot.com/icon/png/web-control/16/black-info.png';
var pin = 'http://icons.iconarchive.com/icons/paomedia/small-n-flat/24/pin-icon.png';
var color1 = '#FF0000';
var color2 = '#0000FF';
var color3 = '#FFA500';

function initMap() {
  	//initialize map with center and zoom
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 42.352271, lng: -71.05524200000001},
        zoom: 11.2
    });

    // call marker function
    mark(blueData, image2, map);
    mark(orangeData, image3, map);
    mark(redData1, image, map);
    mark(redData2, image, map);
    find();
    

    // call line function
    line(blueData, color2, map);
    line(orangeData, color3, map);
    line(redData1, color1, map);
    line(redData2, color1, map);
}

function mark(data, image, map)
{
	// loop through each data point and place a marker
	infowindow = new google.maps.InfoWindow();
  	for (var i = 0; i < data.length; i++)
    {
        var marker = new google.maps.Marker({
	        position: new google.maps.LatLng(data[i][1], data[i][2]),
            map: map,
            title: data[i][0],
            icon: image
        });
        var stop3 = data[i][3];

        // prevents an infowindow from opening for blue and orange lines
        if (stop3 != null)
        {
            openWindow(marker, stop3);
        }
    }
}

function line(dataSet, color, map)
{
	// loop through each data point and connect them with line of some color
	var tCoordinates1 = [];
    for (var j = 0; j < dataSet.length; j++)
    {
      	tCoordinates1[j] = {lat: dataSet[j][1], lng: dataSet[j][2]};
    }
    var tPath = new google.maps.Polyline({
      	path: tCoordinates1,
       	geodesic: true,
       	strokeColor: color,
       	strokeOpacity: 1.0,
       	strokeWeight: 2
    });
    tPath.setMap(map);
}

function find()
{
    if (navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(getPosition);
    }
}

function getPosition(position)
{
	currPos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	var marker = new google.maps.Marker({
	    position: currPos,
        map: map,
        title: "Your Location",
        icon: pin
    });
    var currLat = position.coords.latitude;
    var currLng = position.coords.longitude;
    var contentString = findDist(currPos, currLat, currLng, redData1, redData2);

    var infowindow = new google.maps.InfoWindow({
    	content: contentString
    });
    marker.addListener('click', function()
    {
    	infowindow.open(map, marker);
    });
}

function findDist(you, youLat, youLng, trainStops1, trainStops2)
{
	var first = new google.maps.LatLng(trainStops1[0][1], trainStops1[0][2]);
	var minDist = google.maps.geometry.spherical.computeDistanceBetween(you, first);
	minDist = minDist/1609.344;
	for (var c = 0; c < trainStops1.length; c++)
	{
		var currStop = new google.maps.LatLng(trainStops1[c][1], trainStops1[c][2]);
		var dist = google.maps.geometry.spherical.computeDistanceBetween(you, currStop);
		dist = dist/1609.344;

		if (dist < minDist)
		{
			minDist = dist;
			var smallIndex = c;
			var whichData = trainStops1;
			var totalInfo = "The closest MBTA Red Line subway station to your location is " + trainStops1[smallIndex][0] +
				" and it is " + minDist + " miles away.";
		}
	}

	for (var d = 0; d < trainStops2.length; d++)
	{
		var currStop2 = new google.maps.LatLng(trainStops2[d][1], trainStops2[d][2]);
		var dist2 = google.maps.geometry.spherical.computeDistanceBetween(you, currStop2);
		dist2 = dist2/1609.344;

		if (dist2 < minDist)
		{
			minDist = dist2;
			smallIndex = d;
			whichData = trainStops2;
			totalInfo = "The closest MBTA Red Line subway station to your location is " + trainStops2[smallIndex][0] +
				" and it is " + minDist + " miles away.";
		}
	}

	var pathToStop = [{lat: youLat, lng: youLng},
					  {lat: whichData[smallIndex][1], lng: whichData[smallIndex][2]}
					 ];
    
    var tPath = new google.maps.Polyline({
      	path: pathToStop,
       	geodesic: true,
       	strokeColor: '#50C878',
       	strokeOpacity: 1.0,
       	strokeWeight: 2
    });
    tPath.setMap(map);

	return totalInfo;
}

function openWindow(marker, stopId)
{
	google.maps.event.addListener(marker, 'click', function()
	{
		infowindow.setContent(upcomingTrainsFunc(stopId));
		infowindow.open(map, marker);
	});

}

var info;
function upcomingTrainsFunc(stopId)
{
	var url = "https://defense-in-derpth.herokuapp.com/redline/schedule.json?stop_id=" + stopId;
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function()
	{
		if ((this.readyState == 4) && (this.status == 200))
		{
			var obj = JSON.parse(this.responseText);
			info = display(obj);
		}
	};

	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	return info;
}

function display(json)
{
	var stuff = json;
	var text = '';
	for (var i in stuff.data)
	{
		var arrival = stuff.data[i].attributes.arrival_time;
		var depart = stuff.data[i].attributes.departure_time;
		if (stuff.data[i].attributes.direction_id == 0)
		{
			var direc = "Southbound";
		}
		else
		{
			var direc = "Northbound";
		}
		text += 'Arrival time: ' + arrival + ', ' + 'Departure time: ' + depart + ', ' + direc + '</br>';
	}
	return text;
}

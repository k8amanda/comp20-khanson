var redData1 = [
	['Alewife', 42.395428, -71.142483],
	['Davis', 42.39674, -71.121815],
	['Porter Square', 42.3884, -71.11914899999999],
	['Harvard Square', 42.373362, -71.118956],
	['Central Square', 42.365486, -71.103802],
	['Kendall/MIT', 42.36249079, -71.08617653],
	['Charles/MGH', 42.361166, -71.070628],
	['Park Street', 42.35639457, -71.0624242],
	['Downtown Crossing', 42.355518, -71.060225],
	['South Station', 42.352271, -71.05524200000001],
	['Broadway', 42.342622, -71.056967],
	['Andrew', 42.330154, -71.057655],
	['JFK/UMass', 42.320685, -71.052391],
	['North Quincy', 42.275275, -71.029583],
	['Wollaston', 42.2665139, -71.0203369],
	['Quincy Center', 42.251809, -71.005409],
	['Quincy Adams', 42.233391, -71.007153],
	['Braintree', 42.2078543, -71.0011385]	
];
var redData2 = [
	['JFK/UMass', 42.320685, -71.052391],
	['Savin Hill', 42.31129, -71.053331],
	['Fields Corner', 42.300093, -71.061667],
	['Shawmut', 42.29312583, -71.06573796000001],
	['Ashmont', 42.284652, -71.06448899999999]
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
function initMap() {
  	//initialize map with center and zoom
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 42.352271, lng: -71.05524200000001},
        zoom: 11.2
    });

    // images (markers) and line colors
    var image = 'http://www.iconhot.com/icon/png/web-control/16/red-info.png';
    var image2 = 'http://www.iconhot.com/icon/png/web-control/16/blue-info.png';
    var image3 = 'http://www.iconhot.com/icon/png/web-control/16/black-info.png';
    var color1 = '#FF0000';
    var color2 = '#0000FF';
    var color3 = '#FFA500';
        
    // call marker function
    mark(redData1, image, map);
    mark(redData2, image, map);
    mark(blueData, image2, map);
    mark(orangeData, image3, map);

    // call line function
    line(redData1, color1, map);
    line(redData2, color1, map);
    line(blueData, color2, map);
    line(orangeData, color3, map);
}

function mark(data, image, map)
{
	// loop through each data point and place a marker
  	for (var i = 0; i < data.length; i++)
    {
        var marker = new google.maps.Marker({
	        position: new google.maps.LatLng(data[i][1], data[i][2]),
            map: map,
            title: data[i][0],
            icon: image
        });
    }
    return;
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
    return;
}
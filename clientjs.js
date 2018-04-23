
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -33.8688, lng: 151.2195},
    zoom: 13
  });
  var card = document.getElementById('pac-card');
  var input = document.getElementById('pac-input');

  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);

  var autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.bindTo('bounds', map);

  var infowindow = new google.maps.InfoWindow();
  var infowindowContent = document.getElementById('infowindow-content');
  infowindow.setContent(infowindowContent);
  var marker = new google.maps.Marker({
    map: map,
    anchorPoint: new google.maps.Point(0, -29)
  });
  var service = new google.maps.places.PlacesService(map);
  autocomplete.addListener('place_changed', function() {
    infowindow.close();
    marker.setVisible(false);
    var place = autocomplete.getPlace();
    if (!place.geometry) {

      window.alert("No details available for input: '" + place.name + "'");
      return;
    }

    // If the place has a geometry, then present it on a map.
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);  // Why 17? Because it looks good.
    }
    service.nearbySearch({
      location: {lat: place.geometry.location.lat(),lng: place.geometry.location.lng()},
      radius: 1500,
      type: ['atm']
    }, callback);
  });
}
function callback(results, status) {

  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++)
      createMarker(results[i]);

  }
}

function calcualteRating(tyc,nyc)
{
  var temp=(tyc/(tyc+nyc))*100;
  if(temp>80)

    return 4;

  else if(temp>60)

    return 3;

  else if(temp>40)

    return 2;

  return 1;
}
var placeInfo={};
function viewatmstatus()
{
    var submitplace=document.getElementById('writeinfo');
   var id=placeInfo.place_id;
   var request = new XMLHttpRequest();
   request.onreadystatechange = function () {
       if (request.readyState === XMLHttpRequest.DONE) {
                  var retobj=JSON.parse(this.responseText);
                  var rating=calcualteRating(retobj.tyc,retobj.nyc);
                  submitplace.innerHTML="lastmodifieddate:"+retobj.lastdate+"<br>"+"lastmodifiedvalue:"+retobj.lastretvalue+"<br>"+"YesCount:"+retobj.yc+"<br>"+"NoCount:"+retobj.nc+"<br>"+"Rating:"+rating+"<br>";
                 }
   };
   request.open('POST','http://localhost:3000/userviewatmstatus', true);
   request.setRequestHeader('Content-Type', 'application/json');
   request.send(JSON.stringify({id:id}));
}
function updateatmstatus()
{

  var radio1=document.getElementById('radio1');
  var radio2=document.getElementById('radio2');
  //console.log(id);
/*  var placeInfo={};
  placeInfo.name=marker.placName;
  placeInfo.place_id=marker.placeId;
  placeInfo.address=marker.placeAddress;*/
  if(radio1.checked)

    placeInfo.value=1;

  else

    placeInfo.value=0;

  //console.log(placeInfo);
  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
      if (request.readyState === XMLHttpRequest.DONE) {
          alert("submitted successfully");
                }
  };
  request.open('POST','http://localhost:3000/updateatmstatus', true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(JSON.stringify(placeInfo));
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: place.geometry.location
  });
  marker.placeId=place.place_id;
  var request = {
            placeId: place.place_id
                };
  service = new google.maps.places.PlacesService(map);
  service.getDetails(request,function(places,status){
    //
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      //  console.log(marker.placeId+places.name+places.formatted_address);
        marker.placeAddress=places.formatted_address;
        marker.placeName=places.name;
    }
    else {
      marker.placeName="N/A";
      marker.placeAddress="N/A";
    }
  });
  marker.addListener('click', function(){
  textoutput=document.getElementById('textoutput');

  //console.log(this.placeId+this.placeName);
  placeInfo.name=marker.placeName;
  placeInfo.place_id=marker.placeId;
  placeInfo.address=marker.placeAddress
  var str=`<table id="atminfotable" align='center'>
            <tr>
            <th>ATM Name </th>
            <th>ATM Address</th>
            <th>View ATM Status</th>
            <th>Update ATM Status</th>
            </tr>
            <tr>
            <td>${this.placeName}</td>
            <td>${this.placeAddress}</td>
            <td id="writeinfo"><input type="submit" id="viewatmstatusbutton" onclick="viewatmstatus();" value="View Status">
            <td><input type="radio" name="yesnoradiobutton" id="radio1" value="male" checked> Yes<br>
            <input type="radio" name="yesnoradiobutton" id="radio2" value="female"> NO<br><input type="submit" id="updateatmstatusbutton" onclick="updateatmstatus();" value="Update Status">
            `;

    textoutput.innerHTML=str;
  });

}

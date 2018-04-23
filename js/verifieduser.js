
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -33.8688, lng: 151.2195},
    zoom: 13
  });
  var card = document.getElementById('pac-card');
  var input = document.getElementById('pac-input');

  var autocomplete = new google.maps.places.Autocomplete(input);
  var service = new google.maps.places.PlacesService(map);
  autocomplete.addListener('place_changed', function() {
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

var arr=[];

function yesnosubmit(i)
{
    //console.log(i);
    var pre=(i*2)+1;
    var tmp1="radio"+i*2;
    var tmp2="radio"+pre;
    var yrd=document.getElementById(tmp1).checked;
    var nrd=document.getElementById(tmp2).checked;
    //console.log(yrd+' '+nrd);
    if(nrd)

      value=1;

    else

      value=0;

    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
        //  console.log('yeah');
            alert("submitted successfully");
        }
    };
    request.open('post', 'http://localhost:3000/vatmstatus', true);
    request.setRequestHeader('Content-Type', 'application/json');
    //console.log(arr[i].id);
    request.send(JSON.stringify({place_id: arr[i].id, name:arr[i].name,address:arr[i].address,value:value}));

}
function renderDetails()
{
    var content=document.getElementById("infowindow-content");
    content.innerHTML="";
    //console.log("from start");
      var str=`<table style="width:75%">
      <tr>
      <th>Name</th>
      <th>Address</th>
      <th>Info</th>
      <th>submit</th>
      </tr>`;
    for(var i=0;i<arr.length;i++)

       str+=`<tr><td>${arr[i].name}</td><td>${arr[i].address}</td><td><input type="radio" id="radio${i*2}" name="same" value="yes"> Yes
  <input type="radio" id="radio${i*2+1}" name="same" value="no" checked> No</td><td><input type="submit" onclick="yesnosubmit(${i});" class="button" id="radiosubmit${i}" value="submit"></td></tr>`;

    str+=`</table>`;
    //str+=`<input type="submit" id="infosubmit" onclick="yesnosubmit();" class="button" value="submit">`;
    content.innerHTML=str;

}

function callback1(place, status) {
  //
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    arr.push({id:place.place_id,name:place.name,address:place.formatted_address});
  }
 renderDetails();
}

function callback(results, status) {

  if (status === google.maps.places.PlacesServiceStatus.OK) {
    arr=[];
    for (var i = 0; i < results.length; i++) {
      var request = {
                placeId: results[i].place_id
                    };

      service = new google.maps.places.PlacesService(map);
      service.getDetails(request, callback1);
    }
  }
}

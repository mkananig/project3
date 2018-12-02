function initMap(){
  var Foshan = {lat: 23.028287, lng: 113.122811};
  var map = new google.maps.Map(
    document.getElementById('map'), {
    zoom: 12.5, center: Foshan
    }
 );
 
 var first = new google.maps.Marker({
    position: Foshan,
    map: map
  });
}
function initialize() {
   mapCenter={lat: 47.408697, lng: 8.4}
   if ( $(window).width() <= 801) {
      mapCenter={lat: 47.408697, lng: 8.507945}
   }
   var mapOptions = {
      zoom: 12,
      center: mapCenter,
      scrollwheel: false,
      panControl: false,
      mapTypeControl: false,
      scaleControl: true,
      streetViewControl: true,
      overviewMapControl: false,
      zoomControl: true,
      zoomControlOptions: {
         style: google.maps.ZoomControlStyle.SMALL,
         position: google.maps.ControlPosition.RIGHT_TOP
      }
   }

   var map = new google.maps.Map(document.getElementById('map-canvas'),
   mapOptions);

   var styles = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#333333"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#F9F9F9"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#00b8d4"
            },
            {
                "visibility": "on"
            }
        ]
    }
];

   map.setOptions({styles: styles});

   var image = 'img/pin.svg';
   new google.maps.Marker({
      map: map,
      position: new google.maps.LatLng(47.408697,8.507945),
      icon: image,
   });
}

google.maps.event.addDomListener(window, 'load', initialize);

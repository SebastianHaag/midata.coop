function initialize() {
   var mapOptions = {
      zoom: 12,
      center: new google.maps.LatLng(47.4086504,8.5088091),
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
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
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
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
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
}

google.maps.event.addDomListener(window, 'load', initialize);

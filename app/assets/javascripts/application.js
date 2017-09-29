// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

function initMap() {
    var listings
    if (window.listings.length == null) //only 1 listing
    {
      listings = []
      listings.push(window.listings)
    }
    else 
    {
      listings = window.listings
    }
    for (var i = 0; i < listings.length; i++)
    {
      var location = {lat: listings[i].latitude, lng: listings[i].longitude};
      if (listings[i].latitude != null && listings[i].longitude != null)
      {
        if (i == 0)
        {
          var map = new google.maps.Map(document.getElementsByClassName('map')[0], {
            zoom: 10,
            center: location

          });
        }
	      var marker = new google.maps.Marker({
            position: location,
	          map: map
	      });
      }
    }
  }


function loadScript() {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = "https://maps.googleapis.com/maps/api/js?key" + window.key + "=&sensor=false&callback=initMap";
      document.body.appendChild(script);
}
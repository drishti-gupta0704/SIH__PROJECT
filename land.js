// Place your API key here (use a real API key for deployment)
const API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY';

function getLocation() {
  const locationDiv = document.getElementById('liveLocation');

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      
      // Use the API key for reverse geocoding
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
          if (data.status === "OK") {
            const address = data.results[0].formatted_address;
            locationDiv.innerHTML = `Your Location: <b>${address}</b> <br> Latitude: <b>${lat}</b>, Longitude: <b>${lng}</b>`;
          } else {
            locationDiv.innerHTML = `Coordinates: <b>${lat}</b>, <b>${lng}</b><br>Unable to fetch address.`;
          }
        })
        .catch(() => {
          locationDiv.innerHTML = `Coordinates: <b>${lat}</b>, <b>${lng}</b><br>Error fetching address.`;
        });
    }, function(error){
      locationDiv.innerHTML = "Unable to access live location.";
    });
  } else {
    locationDiv.innerHTML = "Geolocation not supported by browser.";
  }
}


// Animate card on page load
window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.card').classList.add('visible');
});

// Function to get user location
function getLocation() {
  const output = document.getElementById("liveLocation");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      output.textContent = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
    }, (error) => {
      output.textContent = "Unable to fetch location.";
    });
  } else {
    output.textContent = "Geolocation not supported by this browser.";
  }
}




const form = document.getElementById('orderForm');
const result = document.getElementById('result');

const pricing = {
  minQuantity: 100,
  freeRadiusKm: 5,
  extraChargePerKm: 100,
};

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const quantity = Number(document.getElementById('quantity').value);
  const distance = Number(document.getElementById('distance').value);

  if (quantity < pricing.minQuantity) {
    renderError(`Minimum order quantity is ${pricing.minQuantity} liters.`);
    return;
  }

  if (distance < 0 || Number.isNaN(distance)) {
    renderError('Distance must be 0 km or more.');
    return;
  }

  const extraDistance = Math.max(0, distance - pricing.freeRadiusKm);
  const deliveryCharge = Math.ceil(extraDistance) * pricing.extraChargePerKm;

  result.classList.remove('hidden');
  result.innerHTML = `
    <h3>Order Summary</h3>
    <p><strong>Quantity:</strong> ${quantity.toFixed(0)} L</p>
    <p><strong>Distance:</strong> ${distance.toFixed(1)} km</p>
    <p><strong>Delivery Charge:</strong> ₹${deliveryCharge}</p>
    <p><strong>Status:</strong> Ready to confirm order</p>
  `;
});

function renderError(message) {
  result.classList.remove('hidden');
  result.innerHTML = `<p style="color: #b00020;"><strong>Error:</strong> ${message}</p>`;
}

function initMap() {
  const depot = { lat: 17.385, lng: 78.4867 }; // Example: Hyderabad center

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: depot,
  });

  new google.maps.Marker({
    position: depot,
    map,
    title: 'VGOil & Gasline Depot',
  });

  const radiusCircle = new google.maps.Circle({
    strokeColor: '#0066cc',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#0066cc',
    fillOpacity: 0.15,
    map,
    center: depot,
    radius: 5000,
  });

  map.fitBounds(radiusCircle.getBounds());
}

window.initMap = initMap;

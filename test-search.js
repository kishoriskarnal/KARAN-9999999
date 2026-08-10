const API_KEY = process.env.GOOGLE_MAPS_PLATFORM_KEY;
fetch(`https://places.googleapis.com/v1/places:searchText`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-Goog-Api-Key': API_KEY,
    'X-Goog-FieldMask': 'places.id,places.displayName,places.formattedAddress,places.reviews'
  },
  body: JSON.stringify({
    textQuery: "Kishori's"
  })
}).then(r => r.json()).then(d => {
  console.log(JSON.stringify(d, null, 2));
});

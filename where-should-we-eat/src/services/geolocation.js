export function getCurrentLatLon() {
  // Wrap getCurrentPosition to return a promise
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((pos) =>
      resolve({
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
      })
    );
  });
}

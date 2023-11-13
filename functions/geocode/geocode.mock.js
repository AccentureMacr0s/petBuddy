module.exports.locations = {
  antwerp: {
    results: [
      {
        geometry: {
          location: {
            lng: 4.402464,
            lat: 51.219448,
          },
          viewport: {
            northeast: {
              lat: 51.2145994302915,
              lng: 4.418074130291502,
            },
            southwest: {
              lat: 51.2119014697085,
              lng: 4.415376169708497,
            },
          },
        },
      },
    ],
  },
  riga: {
    results: [
      {
        geometry: {
          location: {
            lat: 56.9261087,
            lng: 24.1893229
          },
          viewport: {
            northeast: {
              lat: 56.9276251302915, // Широта северо-восточной границы
              lng: 24.1904564802915, // Долгота северо-восточной границы
            },
            southwest: {
              lat: 56.9249271697085, // Широта юго-западной границы
              lng: 24.1877585197085, // Долгота юго-западной границы
            },
          },
        },
      },
      // Дополнительные места могут быть добавлены по необходимости
    ],
    status: "OK", // Если вы хотите имитировать структуру ответа Google Places API
  },
  "san francisco": {
    results: [
      {
        geometry: {
          location: { lat: 37.7749295, lng: -122.4194155 },
          viewport: {
            northeast: { lat: 37.812, lng: -122.3482 },
            southwest: { lat: 37.70339999999999, lng: -122.527 },
          },
        },
      },
    ],
    status: "OK",
  },
  chicago: {
    results: [
      {
        geometry: {
          location: {
            lng: -87.629799,
            lat: 41.878113,
          },
          viewport: {
            northeast: {
              lat: 41.88758823029149,
              lng: -87.6194830697085,
            },
            southwest: {
              lat: 41.88489026970849,
              lng: -87.6221810302915,
            },
          },
        },
      },
    ],
  },
  toronto: {
    results: [
      {
        geometry: {
          location: {
            lng: -79.383186,
            lat: 43.653225,
          },
          viewport: {
            northeast: {
              lat: 43.64794098029149,
              lng: -79.37325551970848,
            },
            southwest: {
              lat: 43.6452430197085,
              lng: -79.37595348029149,
            },
          },
        },
      },
    ],
  },
};

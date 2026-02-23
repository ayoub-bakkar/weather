# Weather

Simple Node/Express service that fetches current weather for a city using OpenWeatherMap.

## Features

- POST endpoint to get current weather by city name
- Input validation for the city name

## Prerequisites

- Node.js 14+ and npm
- An OpenWeatherMap API key set as `OPENWEATHER_API_KEY` in a `.env` file

## Install

```bash
npm install
```

## Run

```bash
npm start
# or
node server.js
```

The server's main entry is `server.js` and the app exposes a JSON API.

## API

- POST /api/v1/weather

Request body (JSON):

```json
{ "locationQuery": "London" }
```

Validation rules: non-empty string, length between 3 and 99, no digits or disallowed symbols.

Successful response (200):

```json
{
  "city": "London",
  "country": "GB",
  "temp": 8.5,
  "feels_like": 7.0,
  "id": 800,
  "description": "clear sky",
  "dt": 1618317040,
  "timezone": 3600,
  "humidity": 81,
  "clouds": 0,
  "visibility": 10000,
  "speedWind": 3.6
}
```

Error responses will use appropriate HTTP status codes and JSON error messages.

## Project layout

- `server.js` - app entry
- `routes/weatherRouter.js` - route definitions
- `controllers/weatherControllers.js` - controller that calls OpenWeatherMap
- `middleware/validateLocationInput.js` - request validation
- `public/` - client-side files

## License

MIT

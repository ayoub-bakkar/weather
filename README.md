# Weather App 🌤️

A simple client-side weather app that fetches current weather data using the OpenWeatherMap API.

## Features ✅

- Search by city or country name
- Shows **temperature**, **wind speed**, and **humidity**
- Supports pressing Enter or clicking a search button
- Minimal, easy-to-read code (HTML/CSS/JavaScript)

## Demo

Open `index.html` in your browser or serve the project with a local static server (see below).

## Setup & Installation 🔧

1. Get an API key from OpenWeatherMap: https://openweathermap.org/api
2. Create (or update) `API.js` in the project root with your key:

```javascript
// API.js
export const API_KEY = "YOUR_API_KEY_HERE";
```

3. Serve the app:

- Open `index.html` directly in the browser (works in most cases)
- Or run a simple local server (recommended):
  - Python: `python -m http.server 8000`
  - Node (http-server): `npx http-server . -p 8000`

4. Open `http://localhost:8000` and search for a city or country.

## Development 🔧

- Main logic: `main.js`
- API key: `API.js`
- Styles: `style.css`

## Deploy to GitHub Pages 🌐

1. Create a GitHub repository (e.g., `weather`).
2. Add, commit, and push files:

```bash
git init
git add .
git commit -m "Add Weather App"
git remote add origin https://github.com/ayoub-bakkar/<repo>.git
git branch -M main
git push -u origin main
```

3. In the repository settings, enable **GitHub Pages** from the `main` branch (root) or use the `gh-pages` branch.

> Note: Replace `<repo>` with your repository name.

## Contributing 🤝

Contributions and improvements are welcome — open an issue or PR.

## License

This project is available under the **MIT License**.

## Contact

GitHub: [ayoub-bakkar](https://github.com/ayoub-bakkar)

---

If you want, I can push this README to your GitHub repository for you — tell me the repository name (e.g., `weather`) and whether you want me to use your credentials or provide instructions to do it yourself.

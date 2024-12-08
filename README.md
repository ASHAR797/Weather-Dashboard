# Weather Dashboard App

A weather dashboard web app that provides real-time weather data for any city, including temperature, weather conditions, wind speed, humidity, and more. The app fetches data using the OpenWeatherMap API.

## Features

- **Search for City**: Enter a city name to get the current weather information.
- **Real-time Weather**: Displays current temperature, weather condition, wind speed, humidity, pressure, visibility, sunrise and sunset times.
- **Error Handling**: Alerts the user if a city name is not found or the weather data cannot be fetched.
- **Retry Mechanism**: If a request fails, the app automatically retries fetching data up to 4 times.

## Demo

You can view the live demo of the Weather Dashboard [here](https://ashar797.github.io/Weather-Dashboard/).

## Installation

Follow the steps below to run the weather app locally on your machine.

### Prerequisites

- Make sure you have **Node.js** and **npm** (Node Package Manager) installed on your system. You can download them from [here](https://nodejs.org/).

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/weather-dashboard.git
    ```

2. Navigate into the project folder:
    ```bash
    cd weather-dashboard
    ```

3. Open the `index.html` file in your browser, or if you prefer, run a local server to view it.

## API

The app uses the OpenWeatherMap API to fetch real-time weather data. To use the API, you need an API key.

1. Go to [OpenWeatherMap](https://openweathermap.org/api) and sign up for a free API key.
2. Replace the `apiKey` in `app.js` with your own API key:
    ```js
    const apiKey = 'your_api_key_here';
    ```

## Technologies Used

- **HTML** for structure
- **CSS** for styling
- **JavaScript** for functionality and API integration
- **OpenWeatherMap API** for weather data

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

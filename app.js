const apiKey = 'a5b02ceeda585dba12b325b1e8bdf13b';
const city = 'London'; // Default city
const maxRetries = 4;  // Maximum number of retries
const retryDelay = 2000;  // Delay in milliseconds between retries

// Function to fetch weather data with retry mechanism
async function fetchWeather(cityName) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    // Retry mechanism
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            
            // Update main current weather
            document.querySelector('.temperature').textContent = `${Math.round(data.main.temp)}°C`;
            document.querySelector('.condition').textContent = data.weather[0].description;
            document.querySelector('.location').textContent = data.name;
            document.querySelector('.date').textContent = new Date().toLocaleDateString(undefined, {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
            });

            // Update details
            document.querySelector('.detail-item').textContent = `Wind Speed: ${data.wind.speed} m/s`;
            document.querySelector('.detail-item:nth-child(2)').textContent = `Humidity: ${data.main.humidity}%`;
            document.querySelector('.detail-item:nth-child(3)').textContent = `Pressure: ${data.main.pressure} hPa`;
            document.querySelector('.detail-item:nth-child(4)').textContent = `Visibility: ${(data.visibility / 1000).toFixed(1)} km`;
            document.querySelector('.detail-item:nth-child(5)').textContent = `Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
            document.querySelector('.detail-item:nth-child(6)').textContent = `Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;

            return;  // Exit if successful
        } catch (error) {
            if (attempt === maxRetries) {
                alert("Failed to fetch weather data after several attempts. Please try again later.");
                console.error("Error:", error);
                return;
            }
            console.warn(`Attempt ${attempt} failed, retrying...`);
            await new Promise(resolve => setTimeout(resolve, retryDelay));  // Wait before retrying
        }
    }
}

// Search functionality
document.querySelector('header input[type="text"]').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const cityName = e.target.value.trim();
        if (cityName) {
            fetchWeather(cityName);
        }
    }
});

// Button click event to fetch weather for entered city
document.getElementById("getWeather").addEventListener("click",(e)=>{
       let searchBar = document.getElementById("search-city") 
       console.log(e)
       const cityName = searchBar.value.trim();
        if (cityName) {
            fetchWeather(cityName);
        }
        else{
            alert("Please enter a city name")
        }
})

// Fetch default city's weather on load
fetchWeather(city);

import { useState, useEffect } from "react";

const TopBar = () => {
  const [time, setTime] = useState(new Date());
  const [weather, setWeather] = useState({ temp: "", condition: "", city: "" });
  const api_key = "faeee45c68056e0739be249d9a222c41";

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Fetch weather for current location (or fallback to Mumbai)
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${api_key}`
          )
            .then((res) => res.json())
            .then((data) =>
              setWeather({
                temp: `${data.main.temp}°C`,
                condition: data.weather[0].description,
                city: data.name, // Fetch the city name
              })
            )
            .catch(() => fetchFallbackWeather());
        },
        () => fetchFallbackWeather()
      );
    } else {
      fetchFallbackWeather();
    }

    function fetchFallbackWeather() {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=mumbai&units=metric&appid=${api_key}`
      )
        .then((res) => res.json())
        .then((data) =>
          setWeather({
            temp: `${data.main.temp}°C`,
            condition: data.weather[0].description,
            city: data.name, // Default city is Mumbai
          })
        )
        .catch(() => console.log("Weather fetch failed"));
    }
  }, []);

  return (
    <div className="bg-gray-900 text-white text-sm py-2 px-4 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
      <div className="flex items-center gap-2">
        <span>📅 {time.toLocaleDateString()}</span>
        <span>| ⏰ {time.toLocaleTimeString()}</span>
      </div>
      <div className="flex items-center gap-2">
        <span>🌍 {weather.city}</span> {/* Display city name */}
        <span>🌤 {weather.condition}</span>
        <span>| 🌡 {weather.temp}</span>
      </div>
    </div>
  );
};

export default TopBar;

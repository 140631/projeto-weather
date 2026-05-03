import type { City } from '../../interfaces/City';
import { useLocalTime } from '../../hooks/useLocalTime';
import { formatLastUpdated, formatTemperature, formatWindSpeed, formatHumidity, getWeatherIcon } from '../../utils/formatters';
import './CityCard.css';

interface CityCardProps {
  city: City;
}

const CityCard = ({ city }: CityCardProps) => {
  const time = useLocalTime(city.timezone);
  const isDataFresh = city.lastUpdated && city.temperature !== 0;

  return (
    <div className={`city-card ${!isDataFresh ? 'loading-data' : ''}`}>
      <div className="city-name">{city.name}</div>
      <div className="city-country">{city.country}</div>
      
      {!isDataFresh && (
        <div className="data-loading-indicator">
          <div className="loading-spinner"></div>
          <span>Carregando...</span>
        </div>
      )}
      
      <div className="temperature">{formatTemperature(city.temperature)}</div>
      
      {city.weatherDescription && (
        <div className="weather-description">
          {getWeatherIcon(city.weatherDescription)} {city.weatherDescription}
        </div>
      )}
      
      <div className="weather-details">
        <div className="humidity">Umidade: {formatHumidity(city.humidity)}</div>
        <div className="wind-speed">Vento: {formatWindSpeed(city.windSpeed)}</div>
      </div>
      
      <div className="clock">{time}</div>
      
      {city.lastUpdated && (
        <div className="last-updated">Atualizado: {formatLastUpdated(city.lastUpdated)}</div>
      )}
    </div>
  );
};

export default CityCard;

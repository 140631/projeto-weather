import { useParams, Link } from 'react-router-dom';
import { useLocalTime } from '../../hooks/useLocalTime';
import { cities } from '../../data/mockWeatherData';
import './CityDetail.css';
import { formatDate, getTimezoneDisplay } from '../../utils/time';
import { formatHumidity, formatTemperature, formatWindSpeed, getWeatherIcon } from '../../utils/formatters';

const CityDetail = () => {
  const { id } = useParams<{ id: string }>();
  const city = cities.find(c => c.id === Number(id));
  const time = useLocalTime(city?.timezone || '');

  if (!city) {
    return (
      <div className="city-detail-container">
        <h2>Cidade não encontrada</h2>
        <Link to="/">Voltar</Link>
      </div>
    );
  }

  return (
     <div className="city-detail-container">
      <div className="city-header">
        <div className="city-title">
          <h1>{city.name}</h1>
          <p className="country">{city.country}</p>
        </div>
        <div className="current-time">
          <span className="time-label">Horário Local</span>
          <span className="time-value">{time}</span>
        </div>
      </div>

      <div className="weather-main">
        <div className="temperature-section">
          <div className="main-temperature">
            {formatTemperature(city.temperature)}
          </div>
          {city.weatherDescription && (
            <p className="weather-description">
              {getWeatherIcon(city.weatherDescription)} {city.weatherDescription}
            </p>
          )}
        </div>
        
        <div className="weather-details-grid">
          <div className="detail-card">
            <div className="detail-icon">💧</div>
            <div className="detail-content">
              <span className="detail-label">Umidade</span>
              <span className="detail-value">{formatHumidity(city.humidity)}</span>
            </div>
          </div>
          
          <div className="detail-card">
            <div className="detail-icon">💨</div>
            <div className="detail-content">
              <span className="detail-label">Vento</span>
              <span className="detail-value">{formatWindSpeed(city.windSpeed)}</span>
            </div>
          </div>
          
          <div className="detail-card">
            <div className="detail-icon">🌍</div>
            <div className="detail-content">
              <span className="detail-label">Coordenadas</span>
              <span className="detail-value">
                {city.latitude.toFixed(2)}°, {city.longitude.toFixed(2)}°
              </span>
            </div>
          </div>
          
          <div className="detail-card">
            <div className="detail-icon">🕒</div>
            <div className="detail-content">
              <span className="detail-label">Fuso Horário</span>
              <span className="detail-value">{getTimezoneDisplay(city.timezone)}</span>
            </div>
          </div>
        </div>
      </div>

      {city.lastUpdated && (
        <div className="last-update">
          <p>Última atualização: {formatDate(city.lastUpdated)}</p>
        </div>
      )}
      
      <Link to="/" className="back-link">← Voltar para Home</Link>
    </div>
  );
};

export default CityDetail;
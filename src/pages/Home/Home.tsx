
import CityCard from '../../components/CityCard/CityCard';
import './Home.css';
import { Link } from 'react-router-dom';
import { cities } from '../../data/mockWeatherData';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Previsão do Tempo</h1>

      <div className="cities-grid">
        {cities.map((city) => (
          <Link key={city.id} to={`/city/${city.id}`}>
            <CityCard city={city} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;

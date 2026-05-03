import './Loader.css';

interface LoaderProps {
  message?: string;
  size?: 'small' | 'medium' | 'large';
}

const Loader = ({ message = 'Carregando...', size = 'medium' }: LoaderProps) => {
  return (
    <div className="loader-container">
      <div className={`loader ${size}`}>
        <div className="loader-spinner"></div>
        <div className="loader-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <p className="loader-message">{message}</p>
    </div>
  );
};

export default Loader;
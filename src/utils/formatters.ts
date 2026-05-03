export const formatLastUpdated = (lastUpdated?: string): string => {
  if (!lastUpdated) return '';

  const date = new Date(lastUpdated);
  return date.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const formatTemperature = (temp: number | string | undefined): string => {
  if (temp === undefined || temp === null) return '--';
  return `${Math.round(Number(temp))}°C`;
};

export const formatWindSpeed = (speed: number | string | undefined): string => {
  if (speed === undefined || speed === null) return '--';
  return `${Number(speed)} km/h`;
};

export const formatHumidity = (humidity: number | string | undefined): string => {
  if (humidity === undefined || humidity === null) return '--';
  return `${Number(humidity)}%`;
};

export const getWeatherIcon = (description: string): string => {
  const iconMap: Record<string, string> = {
    'Céu limpo': '☀️',
    'Parcialmente nublado': '⛅',
    'Nublado': '☁️',
    'Chuva': '🌧️',
    'Chuva fraca': '🌦️',
    'Chuva forte': '⛈️',
    'Neve': '❄️',
    'Neblina': '🌫️',
    'Trovão': '⚡'
  };

  return iconMap[description] || '🌤️';
};
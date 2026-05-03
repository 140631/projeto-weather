export const getLocalTime = (timezone: string): string => {
  if (!timezone) return '';

  try {
    return new Date().toLocaleTimeString('pt-BR', {
      timeZone: timezone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  } catch (error) {
    console.error('Erro ao obter horário local:', error);
    return '--:--:--';
  }
};

export const formatDate = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;

  return dateObj.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const getTimezoneDisplay = (timezone: string): string => {
  return timezone.split('/')[1]?.replace('_', ' ') || timezone;
};
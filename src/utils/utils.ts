export const toPascalCase = (str: string) => {
  return str
    .toLowerCase()
    .replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substring(1));
};

export const formatDate = (dateString: string | Date) => {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }).format(new Date(dateString));
};

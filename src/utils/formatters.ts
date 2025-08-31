export const formatProjectSize = (sizeInKB: number): string => {
  if (sizeInKB > 1024) {
    return `${(sizeInKB / 1024).toFixed(1)}MB`;
  }
  return `${sizeInKB}KB`;
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price / 100);
};

export const getUniqueValues = (data: Record<string, any>[], type: string) => {
  let values = data.map((item) => item[type]);
  if (type === 'colors') {
    values = values.flat();
  }
  return ['all', ...new Set(values)];
};

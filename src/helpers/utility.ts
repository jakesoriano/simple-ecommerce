export const formatCurrecy = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(amount);
};

export const calculateDiscount = (
  originalPrice: number,
  discountPercentage: number
) => {
  return originalPrice - originalPrice * (discountPercentage / 100);
};

export const getQueryParam = (key: string, queryParams: any) => {
  const param = queryParams[key];

  if (Array.isArray(queryParams[key])) {
    return param[0];
  }
  return param;
};

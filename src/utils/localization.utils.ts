import { Country } from '@/constants/localization.constants';

function isValidTenDigitNumber(number: string) {
  const regex = /^\d{10}$/;
  return regex.test(number);
}

export const COUNTRY_CODE_VS_VALIDATOR = {
  [Country.INDIA]: isValidTenDigitNumber,
  // Add more country codes
};

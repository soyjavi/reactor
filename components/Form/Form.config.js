import { isValidEmail, isValidPhone } from './modules';

const KEYBOARDS = {
  'email-address': isValidEmail,
  'phone-pad': isValidPhone,
};

export { KEYBOARDS };

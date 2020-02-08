import { queryString } from './queryString';

const DEFAULT_METHOD = 'GET';
const FORM_METHODS = ['POST'];
const HEADER_JSON = {
  'Content-Type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest',
};
const HEADER_FORM = {
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
};

if (typeof global.self === 'undefined') global.self = global;

const apiCall = async ({ endpoint = '', headers, method = DEFAULT_METHOD, service = '', ...props }) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/${service}`, {
      headers: {
        ...(FORM_METHODS.includes(method) ? HEADER_FORM : HEADER_JSON),
        ...headers,
      },
      method,
      ...(FORM_METHODS.includes(method) ? { body: queryString(props) } : props),
    })
      .then(async (response) => {
        const json = await response.json();

        if (response.status >= 400) reject({ code: response.status, message: json.message });
        else resolve(json);
      })
      .catch(({ message = 'Something wrong happened. Try again.', response } = {}) => {
        reject({
          code: response ? response.status : 500,
          message,
        });
      });
  });

export { apiCall };

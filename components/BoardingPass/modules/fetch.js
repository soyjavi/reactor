import { ENV } from '../../../common';

const { IS_PRODUCTION } = ENV;
const DEFAULT_METHOD = 'GET';
const ENDPOINT = IS_PRODUCTION ? 'mapi.minube.com' : 'staging.mapi.minube.com';
const FORM_METHODS = ['POST'];
const HEADER_JSON = {
  'Content-Type': 'application/json; charset=UTF-8',
  'X-Requested-With': 'XMLHttpRequest',
};
const HEADER_FORM = {
  'Content-Type': 'application/json; charset=UTF-8', // 'application/x-www-form-urlencoded; charset=UTF-8',
};

if (typeof global.self === 'undefined') global.self = global;

export default async ({ endpoint = ENDPOINT, headers, method = DEFAULT_METHOD, secure = false, service, ...props }) =>
  new Promise((resolve, reject) => {
    fetch(`${secure ? 'https' : 'http'}://${endpoint}/${service}`, {
      headers: {
        ...(FORM_METHODS.includes(method) ? HEADER_FORM : HEADER_JSON),
        ...headers,
      },
      method,
      ...props,
    })
      .then(async (response) => {
        const json = await response.json();

        if (response.status >= 400) reject({ code: json.code || response.status, message: json.message }); // eslint-disable-line
        else resolve(json);
      })
      .catch(({ message = 'ERROR_CONNECTION', response } = {}) => {
        reject({ // eslint-disable-line
          code: response ? response.status : 500,
          message,
        });
      });
  });

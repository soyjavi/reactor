import { useEnvironment } from './environment';
import PKG from '../package.json';

const KEYS = ['IS_NATIVE', 'IS_WEB', 'IS_MOBILE_WEB', 'IS_PRODUCTION', 'IS_DEVELOPMENT', 'IS_TEST', 'NODE_ENV', 'PKG'];

describe('environment', () => {
  it('default', () => {
    const env = useEnvironment();

    expect(Object.keys(env)).toEqual(KEYS);
    expect(env.IS_NATIVE).toEqual(true);
    expect(env.IS_WEB).toEqual(false);
    expect(env.IS_MOBILE_WEB).toEqual(false);
    expect(env.IS_PRODUCTION).toEqual(false);
    expect(env.IS_DEVELOPMENT).toEqual(true);
    expect(env.IS_TEST).toEqual(true);
    expect(env.NODE_ENV).toEqual('test');
    expect(env.PKG).toEqual({ name: PKG.name, version: PKG.version });
  });
});

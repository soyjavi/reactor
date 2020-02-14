import userAgentScreenSize from './userAgentScreenSize';

const DESKTOP = { width: 1024, height: 768 };
const PHONE = { width: 360, height: 640 };
const TABLET = { width: 768, height: 1024 };

describe('userAgentScreenSize', () => {
  it('default', () => {
    const dimensiones = userAgentScreenSize();
    expect(dimensiones).toBeDefined();
    expect(Object.keys(dimensiones)).toEqual(['width', 'height']);
  });

  it('when desktop agent', () => {
    const dimensiones = userAgentScreenSize(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246',
    );
    expect(dimensiones).toEqual(DESKTOP);
  });

  it('when android', () => {
    const dimensiones = userAgentScreenSize(
      'Mozilla/5.0 (Linux; Android 7.0; SM-G892A Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/60.0.3112.107 Mobile Safari/537.36',
    );
    expect(dimensiones).toEqual(PHONE);
  });

  it('when iPhone X', () => {
    const dimensiones = userAgentScreenSize(
      'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
    );
    expect(dimensiones).toEqual(PHONE);
  });

  it('when iPad', () => {
    const dimensiones = userAgentScreenSize(
      'Mozilla/5.0(iPad; U; CPU iPhone OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B314 Safari/531.21.10',
    );
    expect(dimensiones).toEqual(TABLET);
  });
});

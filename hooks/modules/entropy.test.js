import { entropy } from './entropy';

const ENTROPY_KEYS = [
  'browserName',
  'browserVersion',
  'deviceManufacturer',
  'deviceModel',
  'osName',
  'osVersion',
  'height',
  'fontScale',
  'locale',
  'pixelRatio',
  'width',
  'totalMemory',
  'userAgent',
];

describe('entropy', () => {
  it('default', () => {
    expect(Object.keys(entropy)).toEqual(ENTROPY_KEYS);
    expect(entropy.browserName).toBeUndefined();
    expect(entropy.browserVersion).toBeUndefined();
    expect(entropy.deviceManufacturer).toEqual('Apple');
    expect(entropy.deviceModel).toEqual('iPhone');
    expect(entropy.height).toEqual(1334);
    expect(entropy.fontScale).toEqual(2);
    expect(entropy.locale).toBeUndefined();
    expect(entropy.osName).toEqual('iOS');
    expect(entropy.osVersion).toBeUndefined();
    expect(entropy.pixelRatio).toEqual(2);
    expect(entropy.totalMemory).toBeUndefined();
    expect(entropy.userAgent).toBeUndefined();
    expect(entropy.width).toEqual(750);
  });
});

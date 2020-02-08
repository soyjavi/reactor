import { UUID } from './UUID';

const SAMPLES = ['platform', 'environment', 'soyjavi.com'];

const HASHES = [
  '2040C908-5E9B-42F0-A03C-3483B4810E9E',
  '56AEB27F-2638-478B-8A25-26EE3AD667D5',
  '33C323FD-E43B-4D1F-A314-E8793000DFE6',
];

describe('UUID', () => {
  it('default', () => {
    expect(UUID()).toEqual('00000000-0000-4000-8000-000000000000');
  });

  it('using sample of hashes', async () => {
    expect(UUID(SAMPLES[0])).toEqual(HASHES[0]);
    expect(UUID(SAMPLES[1])).toEqual(HASHES[1]);
    expect(UUID(SAMPLES[2])).toEqual(HASHES[2]);
  });
});

import { sha256 } from './sha256';

const SAMPLES = ['platform', 'environment'];

const HASHES = [
  'd294fcce0cc88587843099d85dd805aeef1b09a63b0db1dd3e4dc62a343c1db5',
  'ba5285161ba6eed0085fb13784ce5c92f70ebc268b94fd66aa1d68a32884204d',
];

describe('sha256', () => {
  it('default', () => {
    expect(sha256()).toEqual('e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855');
  });

  it('using sample of hashes', async () => {
    expect(sha256(SAMPLES[0])).toEqual(HASHES[0]);
    expect(sha256(SAMPLES[1])).toEqual(HASHES[1]);
  });
});

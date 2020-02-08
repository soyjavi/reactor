import { useFingerprint } from './Fingerprint';

describe('useFingerprint()', () => {
  it('default', async () => {
    const fingerprint = await useFingerprint();
    expect(fingerprint).toBeDefined();
    expect(Object.keys(fingerprint)).toEqual(['uuid', 'device_id']);
    expect(fingerprint.uuid.length).toEqual(36);
    expect(fingerprint.device_id.length).toEqual(36);
  });
});

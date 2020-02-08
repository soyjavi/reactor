import { Storage } from '../bridges';
import { useEnvironment } from './environment';
import { entropy, UUID } from './modules';

const { PKG } = useEnvironment();
const STORE_FINGERPRINT = `${PKG.name}:fingerprint`;

export const useFingerprint = async () => {
  let fingerprint = await Storage.get(STORE_FINGERPRINT);
  if (typeof fingerprint === 'string') fingerprint = undefined;

  if (!fingerprint) {
    const values = {
      ...entropy,
      random: Math.floor(Math.random() * 2 ** 32),
      timestamp: new Date().getTime(),
    };

    const uuid = UUID(Object.values(values).join('-'));
    fingerprint = { uuid, device_id: UUID(uuid) };

    await Storage.set(STORE_FINGERPRINT, fingerprint);
  }

  return fingerprint;
};

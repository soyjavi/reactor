import { Storage } from '../../../common';
import { useEnvironment } from '../../../hooks';
import deviceEntropy from './entropy';
import UUID from './UUID';

export default async () => {
  const { PKG } = useEnvironment();
  const STORE_FINGERPRINT = `${PKG.name}:fingerprint`;

  let fingerprint = await Storage.get(STORE_FINGERPRINT);
  if (typeof fingerprint === 'string') fingerprint = undefined;

  if (!fingerprint) {
    const entropy = {
      ...deviceEntropy,
      random: Math.floor(Math.random() * 2 ** 32),
      timestamp: new Date().getTime(),
    };

    const uuid = UUID(Object.values(entropy).join('-'));
    fingerprint = { uuid, device_id: UUID(uuid) };

    await Storage.set(STORE_FINGERPRINT, fingerprint);
  }

  return fingerprint;
};

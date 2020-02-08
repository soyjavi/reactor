const DEFAULT_UUID = '00000000-0000-4000-8000-000000000000';
const KEYS_MAP = [0xf6, 0x51c, 0xd7a];
const LENGTH_MAP = [8, 11, 12];

const removeTrailingZeros = (int) => {
  let out = int;
  let n = out / 10;

  while (Math.floor(n) === n) {
    out = n;
    n /= 10;
  }

  return out;
};

const lengthOfHex = (input) => {
  let acc = input;
  let length;

  for (length = 1; acc > 16; length += 1) acc /= 16;

  return length;
};

const generateParts = (input, key, maxHexLength) => {
  if (maxHexLength == null || maxHexLength > 14) return generateParts(input, key, 14);

  const str = input.trim();
  const { length } = str;
  let acc = 1;
  let charIndex = 1;
  let count = 1;

  while (count < length || lengthOfHex(acc) < maxHexLength) {
    count += 1;

    if (str.charAt(charIndex) === '') charIndex = 0;

    acc *= (str.charCodeAt(charIndex) + charIndex * length) * key;
    acc = removeTrailingZeros(acc);

    while (lengthOfHex(acc) > maxHexLength) acc = Math.floor(acc / 10);

    charIndex += 1;
  }

  return acc.toString(16);
};

export const UUID = (input = '') => {
  const str = input.toString();
  if (str.length === 0) return DEFAULT_UUID;

  const parts = KEYS_MAP.map((hex, i) => generateParts(str, hex, LENGTH_MAP[i]));
  const preparedParts = [
    parts[0],
    parts[1].substr(0, 4),
    `4${parts[1].substr(4, 3)}`,
    ((parseInt(parts[1][7], 16) & 0x3) | 0x8).toString(16) + parts[1].substr(8, 3), // eslint-disable-line
    parts[2],
  ].join('-');

  return preparedParts.toUpperCase();
};

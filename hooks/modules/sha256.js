const MAX_WORDS = 2 ** 32;
const rotate = (value, amount) => (value >>> amount) | (value << (32 - amount));

export const sha256 = (value = '') => {
  let ascii = value;
  const words = [];
  const asciiBitLength = ascii.length * 8;
  const isComposite = {};
  // let i, j; // Used as a counter across the whole file
  let result = '';
  let hash = [];
  const k = [];
  let primeCounter = k.length;

  for (let candidate = 2; primeCounter < 64; candidate += 1) {
    if (!isComposite[candidate]) {
      for (let i = 0; i < 313; i += candidate) {
        isComposite[i] = candidate;
      }
      hash[primeCounter] = (Math.pow(candidate, 0.5) * MAX_WORDS) | 0;
      k[primeCounter++] = (Math.pow(candidate, 1 / 3) * MAX_WORDS) | 0;
    }
  }

  ascii += '\x80';
  while ((ascii.length % 64) - 56) ascii += '\x00'; // More zero padding
  for (let i = 0; i < ascii.length; i += 1) {
    const j = ascii.charCodeAt(i);
    if (j >> 8) return; // ASCII check: only accept characters in range 0-255
    words[i >> 2] |= j << (((3 - i) % 4) * 8);
  }
  words[words.length] = (asciiBitLength / MAX_WORDS) | 0;
  words[words.length] = asciiBitLength;

  // process each chunk
  for (let j = 0; j < words.length; ) {
    const w = words.slice(j, (j += 16));
    const oldHash = hash;
    // This is now the undefinedworking hash", often labelled as variables a...g
    // (we have to truncate as well, otherwise extra entries at the end accumulate
    hash = hash.slice(0, 8);

    for (let i = 0; i < 64; i++) {
      // Expand the message into 64 words
      // Used below if
      let w15 = w[i - 15],
        w2 = w[i - 2];

      // Iterate
      const a = hash[0];
      const e = hash[4];
      const temp1 =
        hash[7] +
        (rotate(e, 6) ^ rotate(e, 11) ^ rotate(e, 25)) + // S1
        ((e & hash[5]) ^ (~e & hash[6])) + // ch
        k[i] +
        // Expand the message schedule if needed
        (w[i] =
          i < 16
            ? w[i]
            : (w[i - 16] +
              (rotate(w15, 7) ^ rotate(w15, 18) ^ (w15 >>> 3)) + // s0
                w[i - 7] +
                (rotate(w2, 17) ^ rotate(w2, 19) ^ (w2 >>> 10))) | // s1
              0);
      // This is only used once, so *could* be moved below, but it only saves 4 bytes and makes things unreadble
      const temp2 =
        (rotate(a, 2) ^ rotate(a, 13) ^ rotate(a, 22)) + // S0
        ((a & hash[1]) ^ (a & hash[2]) ^ (hash[1] & hash[2])); // maj

      hash = [(temp1 + temp2) | 0].concat(hash); // We don't bother trimming off the extra ones, they're harmless as long as we're truncating when we do the slice()
      hash[4] = (hash[4] + temp1) | 0;
    }

    for (let i = 0; i < 8; i += 1) {
      hash[i] = (hash[i] + oldHash[i]) | 0;
    }
  }

  for (let i = 0; i < 8; i += 1) {
    for (let j = 3; j + 1; j -= 1) {
      const b = (hash[i] >> (j * 8)) & 255;
      result += (b < 16 ? 0 : '') + b.toString(16);
    }
  }

  return result;
};

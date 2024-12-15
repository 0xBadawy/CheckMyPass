export const lenghtCheck = (value) => {
  if (value.length < 8) return 0;
  else if (value.length < 11) return 1;
  else return 2;
};

export const typeCheck = (value) => {
  let capital = 0,
    small = 0,
    number = 0,
    special = 0;
  for (let i = 0; i < value.length; i++) {
    if (value[i] >= "A" && value[i] <= "Z") capital = 1;
    else if (value[i] >= "a" && value[i] <= "z") small = 1;
    else if (value[i] >= "0" && value[i] <= "9") number = 1;
    else special = 1;
  }
  return capital + small + number + special;
};

export const seqanceCheck = (value) => {
  let seq = 0,
    deg = 0;
  for (let i = 0; i < value.length - 1; i++) {
    if (
      value[i].charCodeAt(0) === value[i + 1].charCodeAt(0) - 1 ||
      value[i].charCodeAt(0) === value[i + 1].charCodeAt(0) ||
      value[i].charCodeAt(0) === value[i + 1].charCodeAt(0) + 1
    )
      seq += 1;
  }
  if (seq > 6) deg = -2;
  else if (seq > 3) deg = 1;
  else deg = 1;
  return deg;
};

export const calculateEntropy = (value) => {
  let capital = 0,
    small = 0,
    number = 0,
    special = 0;
  for (let i = 0; i < value.length; i++) {
    if (value[i] >= "A" && value[i] <= "Z") capital = 26;
    else if (value[i] >= "a" && value[i] <= "z") small = 26;
    else if (value[i] >= "0" && value[i] <= "9") number = 10;
    else special = 32;
  }
  const entropy = Math.log2(capital + small + number + special) * value.length;
  console.log("entropy ", entropy);
  return entropy;
};

export const entropyCheck = (value) => {
  let entropy = calculateEntropy(value);
  if (entropy < 28) return -2;
  else if (entropy < 40) return -1;
  else if (entropy < 60) return 0;
  else if (entropy < 80) return 1;
  else return 2;
};



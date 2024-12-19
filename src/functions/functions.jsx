import axios from "axios";

export const lengthCheck = (value) => {
  if (!value || typeof value !== "string") return 0;
  if (value.length < 8) return 0;
  else if (value.length < 10) return 1;
  else if (value.length < 12) return 3;
  else return 4;
};



export const typeCheck = (value) => {
  let capital = 0,
    small = 0,
    number = 0,
    special = 0;
  for (let i = 0; i < value?.length; i++) {
    if (value[i] >= "A" && value[i] <= "Z") capital = 1;
    else if (value[i] >= "a" && value[i] <= "z") small = 1;
    else if (value[i] >= "0" && value[i] <= "9") number = 1;
    else special = 1;
  }
  return capital + small + number + special;
};

export const capitalCheck = (value) => {
  let capital = 0;
  for (let i = 0; i < value.length; i++) {
    if (value[i] >= "A" && value[i] <= "Z") capital += 1;
  }
  return capital;
};

export const smallCheck = (value) => {
  let small = 0;
  for (let i = 0; i < value.length; i++) {
    if (value[i] >= "a" && value[i] <= "z") small += 1;
  }
  return small;
};

export const numberCheck = (value) => {
  let number = 0;
  for (let i = 0; i < value.length; i++) {
    if (value[i] >= "0" && value[i] <= "9") number += 1;
  }
  return number;
};

export const specialCheck = (value) => {
  let special = 0;
  for (let i = 0; i < value.length; i++) {
    if (!/[A-Za-z0-9]/.test(value[i])) {
      special += 1;
    }
  }
  return special;
};

export const sequenceCheck = (value) => {
  if (!value || value.length < 2) return 0;
  let seqCount = 0;

  for (let i = 0; i < value.length - 1; i++) {
    const diff = Math.abs(value[i].charCodeAt(0) - value[i + 1].charCodeAt(0));

    if (diff <= 1) {
      seqCount++;
    }
  }

  const percentage = (seqCount / (value.length - 1)) * 100;
  // console.log("percentage", percentage);
  if (percentage >= 80) return 0; 
  if (percentage >= 60) return 1; 
  if (percentage >= 40) return 2; 
  if (percentage >= 20) return 3; 

  return 4;
};

export const entropyCheck = (value) => {
  let entropy = calculateEntropy(value);
  if (!entropy) return -2;
  if (entropy < 28) return -2;
  else if (entropy < 40) return -1;
  else if (entropy < 60) return 0;
  else if (entropy < 80) return 1;
  else return 2;
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
  return entropy;
};

export const entropyStatics = (value) => {
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
  return { capital, small, number, special, length: value.length };
};

export const passwordStrength = (value) => {
  const length = lengthCheck(value) * 25;
  const type = typeCheck(value) * 25;
  const seq = sequenceCheck(value) * 25;
  const entropyCheckValue = entropyCheck(value);
  const strength = (entropyCheckValue + 2) * 25;
  // console.log(length, type, seq, strength, entropyCheckValue);

  return (length + type + seq + strength) / 4;
};

export const checkWhiteSpace = (value) => {
  // console.log("----:,", value.split(" ").length - 1);
  return value.split(" ").length - 1;
};

export const checkPasswordStrength = async (password) => {
  const options = {
    method: "GET",
    url: "https://password-strength-checker3.p.rapidapi.com/Password_Strength",
    params: { password },
    headers: {
      "x-rapidapi-key": "f3463928f3msh8c13acc5f1acb77p19be59jsn5b0d4221b94c",
      "x-rapidapi-host": "password-strength-checker3.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data; // Return the strength result
  } catch (error) {
    throw new Error("Error checking password strength");
  }
};

export const calculateTimePC = (value) => {
  const entropy = calculateEntropy(value);
  const x = Math.pow(2, entropy);
  let time = x / 10000;

  let years = 0;
  let months = 0;
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  if (time >= 31536000) {
    years = Math.floor(time / 31536000);
    time = time % 31536000;
  }
  if (time >= 2592000) {
    months = Math.floor(time / 2592000);
    time = time % 2592000;
  }
  if (time >= 86400) {
    days = Math.floor(time / 86400);
    time = time % 86400;
  }
  if (time >= 3600) {
    hours = Math.floor(time / 3600);
    time = time % 3600;
  }
  if (time >= 60) {
    minutes = Math.floor(time / 60);
    time = time % 60;
  }
  seconds = Math.floor(time);

  return { years, months, days, hours, minutes, seconds };
};

export const searchInFile = (searchString) => {
  const filePath = "../passwords/john-the-ripper.txt";
};

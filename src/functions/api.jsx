import axios from "axios";

const options = {
  method: "GET",
  url: "https://password-strength-checker3.p.rapidapi.com/Password_Strength",
  params: {
    password: "42qNoS7@8a#Ghks",
  },
  headers: {
    "x-rapidapi-key": "f3463928f3msh8c13acc5f1acb77p19be59jsn5b0d4221b94c",
    "x-rapidapi-host": "password-strength-checker3.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}

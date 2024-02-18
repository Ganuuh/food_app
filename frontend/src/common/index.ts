import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8008",
  headers: {
    "Content-Type": "application/json",
  },
});

export const addImage = axios.create({
  baseURL: "https://api.cloudinary.com/v1_1/drwacb3lb/upload?upload_preset=",
  headers: { "Content-Type": "application/json" },
});

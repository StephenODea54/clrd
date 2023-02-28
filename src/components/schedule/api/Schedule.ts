import axios from "axios";

const baseUrl = `${import.meta.env.VITE_URL}tabs/Schedule`;

export const getSchedule = () => axios.get(baseUrl);

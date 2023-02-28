import axios from "axios";

const baseUrl = `${import.meta.env.VITE_URL}tabs/Calendar`;

export const getEvents = () => axios.get(baseUrl);

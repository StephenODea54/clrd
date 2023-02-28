import axios from "axios";
import type { IRegistration } from "../types";

const baseUrl = `${import.meta.env.VITE_URL}tabs/Registration`;

export const createRegistration = (newFormSubmission: IRegistration) => {
  return axios.post(baseUrl, newFormSubmission);
};

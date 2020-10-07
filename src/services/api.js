import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export const list = async () => {
  return api.get("/repositories");
};

export const create = async (data) => {
  return api.post("/repositories", data);
};

export const remove = async (id) => {
  return api.delete(`/repositories/${id}`);
};

export default api;

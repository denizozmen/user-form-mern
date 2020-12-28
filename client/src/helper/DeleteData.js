import axios from "axios";

export const deleteData = async (path) => {
  const response = await axios.delete(`${path}`);
  return response?.data;
};

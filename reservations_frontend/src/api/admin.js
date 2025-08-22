import axios from "axios";

//create an axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw { message: "No token found" };
  }

  return { headers: { Authorization: `Bearer ${token}` } };
};

//function to admin reservations
export const getAllReservations = async () => {
  try {
    const response = await api.get("/admin/reservations", getAuthHeaders());
    return response.data;
  } catch (error) {
    throw (
      error.response?.data || { message: "Failed to fetch all reservations" }
    );
  }
};

export const updateReservationsStatus = async (id, status) => {
  try {
    const response = await api.patch(
      `/reservations/${id}/status`,
      { status },
      getAuthHeaders()
    );
    return response.data;
  } catch (error) {
    throw (
      error.response?.data || { message: "Failed to update reservation status" }
    );
  }
};

export const getTables = async () => {
  try {
    const response = await api.get("/tables", getAuthHeaders());
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to fetch tables" };
  }
};

export const createTable = async (tableData) => {
  try {
    const response = await api.post("/tables", tableData, getAuthHeaders());
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to create table" };
  }
};

export const updateTable = async (id, tableData) => {
  try {
    const response = await api.put(
      `/tables/${id}`,
      tableData,
      getAuthHeaders()
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to update table" };
  }
};

export const deleteTable = async (id) => {
  try {
    const response = await api.delete(`/tables/${id}`, getAuthHeaders());
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to delete table" };
  }
};

import axios from "axios";

//create an axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// requests

export const getReservations = async () => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw { message: "No token found" };
    }

    const response = await api.get("/reservations", {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "There is not reservations" };
  }
};

export const createReservation = async (tableId, date, people, duration) => {
  try {
    // get token from localstorage
    const token = localStorage.getItem("token");

    if (!token) {
      throw { message: "No token found" };
    }

    const response = await api.post(
      "/reservations",
      { tableId, date, people, duration }, // body data
      { headers: { Authorization: `Bearer ${token}` } } // config con headers
    );

    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Can not create a reservation" };
  }
};

export const deleteReservation = async (id) => {
  try {
    // get token from localstorage
    const token = localStorage.getItem("token");

    if (!token) {
      throw { message: "No token found" };
    }

    const response = await api.delete(`/reservations/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        message: "Can not delete reservation, try again",
      }
    );
  }
};

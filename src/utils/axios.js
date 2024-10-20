import axios from "axios";

const api_url = process.env.REACT_APP_API_URL;
const room_id = process.env.REACT_APP_ROOM_ID;

const baseURL = `${api_url}/${room_id}`;

const instance = axios.create({
  baseURL,
});

export default instance;

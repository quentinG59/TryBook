import axios from "axios";

export const GET_USER = "GET_USER";

export const getUser = (uid) => {
  return (dispatch) => {
    return axios.get(`${process.env.REACT_APP_API_URl}/api/user/${uid}`);
  };
};

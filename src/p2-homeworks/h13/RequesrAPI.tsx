import axios from "axios";

export const RequestAPI = {
  post(success: boolean) {
      return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: success})
}}

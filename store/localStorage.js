import jwtDecode from "jwt-decode";

export const state = () => ({
    token: "",
    user_name: "",
    cart: [],
  });
  
export const getters = {
    getUserId(state) {
      if (!state.token) {
        return false;
      }
      return jwtDecode(state.token).user_id;
    },
    tokenValid(state) {
      if (!state.token) {
        return false;
      }
      let exp = jwtDecode(state.token).exp;
      let remainTime = 0;
      if (exp) {
        remainTime = exp - Math.floor(Date.now() / 1000);
      } else {
        remainTime = 0;
      }
      return !!state.token && remainTime > 0;
    },
  }
  
export const mutations = {
    set_username(state, response){
      state.user_name = response.data.last_name + response.data.first_name
    },
    set_token(state, response) {
      state.token = response.data.access;
    },
    remove_token(state){
      state.token = "";
    },
    set_cart(state, response) {
      state.cart = [...state.cart, response]
    },
    set_cart_bulk(state, response) {
      state.cart = response
    },
  };
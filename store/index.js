import axios from "axios";
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
  set_token(state, response) {
    state.token = response.data.access;
  },
  remove_token(state){
    state.token = "";
  },
  set_cart(state, response) {
    state.cart = response.data.filter((item) => item.order == null);
  },
};

export const actions = {
  async get_slide({ commit }) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get("/main_slide/")
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  async get_main_market({ commit }) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get("/main_market/")
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  async get_main_farm({ commit }) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get("/main_farm/")
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  async get_main_news({ commit }) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get("/main_news/")
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  async get_market({ commit }) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get("/market/")
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  async get_farm({ commit }) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get("/farm/")
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  async post_contact({ commit }, payload) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .post("/contact/", payload)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  async login({ commit }, payload) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .post("/token/", payload)
        .then((res) => {
          commit('set_token', res)
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

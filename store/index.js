export const actions = {
  async get_slide({ commit }) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get("/api/main_slide/")
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
        .get("/api/main_market/")
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
        .get("/api/main_farm/")
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
        .get("/api/main_news/")
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
        .get("/api/market/")
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  async get_market_one({ commit }, id) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get(`/api/market/${id}/`)
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
        .get("/api/farm/")
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  async get_farm_one({ commit }, id) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get(`/api/farm/${id}/`)
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
        .post("/api/contact/", payload)
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
        .post("/api/token/", payload)
        .then((res) => {
          commit('localStorage/set_token', res)
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  async me({ commit }, payload) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get("auth/users/me/")
        .then((res) => {
          commit('localStorage/set_username', res)
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  async get_addr({ commit }) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get("/api/user_addr/")
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  async post_addr({ commit }, payload) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get("/api/user_addr/", payload)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  async post_cart({ commit }, payload) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .post("/api/cart/", payload)
        .then((res) => {
          commit('localStorage/set_cart', res.data)
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  async get_cart({ commit }) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get("/api/cart/")
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  async delete_cart_selected({ commit }, selected) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .post(`/api/cart/delete/`, {selected})
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  async post_order({ commit }, payload) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .post("/api/order/", payload)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  async post_user({ commit }, payload) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .post("/auth/users/", payload)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  async get_order({ commit }) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get(`/api/order/`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  async get_order_one({ commit }, payload) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get(`/api/order/?order_num=${payload}`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  async cancel_before_paid({ commit }, pk) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .patch(`/api/order/${pk}`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  async post_cancel({ commit }, payload) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .post(`/api/cancel/`, payload)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  async get_review({ commit }) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get(`/api/review/`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  async put_review({ commit }, payload) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .put(`/api/review/${payload.id}/`, {
          text: payload.text
        })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  async delete_review({ commit }, id) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .delete(`/api/review/${id}/`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

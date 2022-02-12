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
  async get_market_one({ commit }, id) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get(`/market/${id}/`)
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
  async get_farm_one({ commit }, id) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get(`/farm/${id}/`)
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
          commit('localStorage/set_token', res)
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  // async post_cart({ commit }, payload) {
  //   return await new Promise((resolve, reject) => {
  //     this.$axios
  //       .post("/cart/", payload)
  //       .then((res) => {
  //         commit('localStorage/set_cart', res.data)
  //         resolve(res);
  //       })
  //       .catch((err) => {
  //         reject(err);
  //       });
  //   });
  // },
};

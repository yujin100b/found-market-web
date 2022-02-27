export default function({ $axios, store, redirect }) {
  const urls = ["order", "cart", "me", "cancel"]

  $axios.onRequest((config) => {
    // config.baseURL = "http://api.foundmarket.kr"
    config.baseURL = "http://localhost:8000"
    config.headers.common["Content-Type"] = "application/json";
    const match = urls.filter(keyword => config.url.indexOf(keyword) !== -1)
    if (match.length !== 0)
    {
      config.headers.common["Authorization"] = `JWT ${store.state.localStorage.token}`;
    }
    config.xsrfCookieName = "csrftoken";
    config.xsrfHeaderName = "X-CSRFToken";
    config.withCredentials = true
    console.log("Making request to " + config.url);
  });

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status);
    console.log(code)
    if (code == 401){
      store.commit("localStorage/remove_token")
      redirect("/login")
    }
  });
}

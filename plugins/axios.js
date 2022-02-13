export default function({ $axios, store, redirect }) {
  
  $axios.onRequest((config) => {
    config.baseURL = "http://localhost:8000"
    config.headers.common["Content-Type"] = "application/json";
    if (config.url !== "/auth/users/")
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

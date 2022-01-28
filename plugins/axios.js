export default function({ $axios, $store, redirect }) {
  
  $axios.onRequest((config) => {
    config.baseURL = "http://localhost:8001/api"
    config.headers.common["Content-Type"] = "application/json";
    config.xsrfCookieName = "csrftoken";
    config.xsrfHeaderName = "X-CSRFToken";
    config.withCredentials = true
    console.log("Making request to " + config.url);
  });

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status);
    if (code === 400) {
      redirect("/login");
    }
  });
}

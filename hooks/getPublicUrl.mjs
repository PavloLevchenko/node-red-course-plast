import axios from "axios";

const getPublicUrl = (setHook) => {
  axios
    .get("http://localhost:4040/api/tunnels")
    .then((res) => res.data.tunnels.find((tunnel) => tunnel.proto === "https"))
    .then((secureTunnel) => setHook(secureTunnel.public_url))
    .catch((err) => {
      if (err.code === "ECONNREFUSED") {
        return console.error("Looks like you're not running ngrok.");
      }
      console.error(err);
    });
};
export default getPublicUrl;

import axios from "axios";
import * as pm2 from "../ignore.pm2.config.js";

const setHook = (url) => {
  axios
    .post(
      `https://api.telegram.org/bot${pm2.default.apps[0].env.TOKEN}/setWebhook`,
      {
        url,
      }
    )
    .then((res) => {
      //console.log(`Status: ${res.status}`);
      console.log("Body: ", res.data);
    })
    .catch((err) => {
      console.error(err);
    });
};
export default setHook;

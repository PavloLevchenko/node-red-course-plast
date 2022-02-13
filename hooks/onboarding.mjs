import getPublicUrl from "./getPublicUrl.mjs";
import setHook from "./setHook.mjs";

const ENDPOINT = "/webhook";

const run = (url) => {
  setHook(url + ENDPOINT);
};

getPublicUrl(run);

//When we have various request in the app and we need to use the same link  in the various component then we just need to create this type of folder structure and use instance .get("api")

import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;
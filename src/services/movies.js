import axios from "axios"

export const getService = async () => {
    const response = await axios.get("https://namanmov.free.beeceptor.com/movies");
    return response.data;
}
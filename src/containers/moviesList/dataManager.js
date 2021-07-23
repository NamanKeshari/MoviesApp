import { getService } from "../../services/movies";

export const HandleGetMovies = async () => {
    const result = await getService(); 
    return result;
}
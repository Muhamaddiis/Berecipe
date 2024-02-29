import axios from "axios";

const baseUrl = "http://localhost:8000/recipes";

const getAll = async() => {
    const request = await axios.get(baseUrl);
    const response = await request.data
    console.log("response: ",response);
    return response
}

const getById = async (id) => {
    const request = await axios.get(`${baseUrl}/id/${id}`)
    const response = await request.data
    console.log("recipedetail: ", response);
    return response
}

const deleteById = async (id) => {
    const request = await axios.delete(`${baseUrl}/id/${id}`);
    const response = await request.data
    console.log("Deleted Successfully", response);
}

const getbyEmail = async (email) => {
    const request = await axios.get(`${baseUrl}/email/${email}`);
    const response = await request.data
    console.log("recipe by email: ", response);
    return response
}
const createRecipe = async (newObject) => {
    const request = await axios.post(baseUrl, newObject);
    const response = await request.data
    return response
}
const auth = async (newEndpoint, newObject) => {
    const request = await axios.post(`${baseUrl}/${newEndpoint}`, newObject);
    console.log("request", request);
    const response = await request.data
    console.log("response", response);
    return response
}
export default {
    getAll,
    getById,
    deleteById,
    getbyEmail,
    createRecipe,
    auth
}
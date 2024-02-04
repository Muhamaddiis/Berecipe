import axios from "axios";

const baseUrl = "http://localhost:3000/meal";

const getAll = async() => {
    const request = await axios.get(baseUrl);
    const response = await request.data
    console.log("response: ",response);
    return response
}

const getById = async (id) => {
    const request = await axios.get(`${baseUrl}/${id}`)
    const response = await request.data
    console.log("recipedetail: ", response);
    return response
}

const getbyName = async (query) => {
    const request = await axios.get(`${baseUrl}/${query}`)
    const response = await request.data
    console.log("name: ", response);
    return response
}

export default {
    getAll,
    getById,
    getbyName
}
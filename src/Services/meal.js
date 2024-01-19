import axios from "axios";

const baseUrl = "https://themealdb.com/api/json/v1/1";

const getRandom = async() => {
    const request = await axios.get(`${baseUrl}/filter.php?a=Egyptian`);
    const response = await request.data
    console.log(response);
    return response
}

export default {
    getRandom
}
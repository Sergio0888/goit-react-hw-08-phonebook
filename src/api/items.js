import axios from "axios";

const instance = axios.create({
    baseURL: "https://631c4d661b470e0e12fe9428.mockapi.io/contacts/contacts"
})

export const getContact = async() => {
    const {data} = await instance.get("/");
    return data;
};

export const addContact = async(data) => {
    const {data: result} = await instance.post("/", data)
    return result;
};

export const deleteContact = async(id) => {
    const {data} = await instance.delete(`/${id}`)
    return data;
};
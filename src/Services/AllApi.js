import ApiService from "../Api/ApiService";

// register : auth component when click register button
export const registerAPI = async (userData) => {
    return await ApiService("POST", "/register", userData)
}

// login
export const loginAPI = async (userData) => {
    return await ApiService("POST", "/login", userData)
}

// google-login
export const googleLoginAPI = async (userData) => {
    return await ApiService("POST", "/googlelogin", userData)
}

// edit user api ehen clicking edit button on edit.jsx
export const userUpdateAPI = async (userId,userData) => {
    return await ApiService("PUT", `/user/${userId}`, userData)
}
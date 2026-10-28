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

// edit user api when clicking edit button on edit.jsx
export const userUpdateAPI = async (userId,userData) => {
    return await ApiService("PUT", `/user/${userId}`, userData)
}

// add book api when clicking uploadbook 
export const addBookAPI = async (bookDetails) => {
    return await ApiService("POST", `/books`, bookDetails)
}

// get homebook api
export const getHomeBooksAPI = async () => {
    return await ApiService("GET", `/home-books`,{})
}

// get all books api
export const getAllBooksAPI = async (searchKey) => {
    return await ApiService("GET", `/all-books?search=${searchKey}`,{})
}

// get user books api :book component when it opens
export const getUserBooksAPI = async () => {
    return await ApiService("GET", `/user-books`,{})
}

// get user brought books api:book component when opens
export const getUserBroughtBooksAPI = async () => {
    return await ApiService("GET", `/brought-books`,{})
}

// delete loggined user books api:bookstatus component
export const deleteUserBookAPI = async (bookId) => {
    return await ApiService("DELETE", `/book/${bookId}`,{})
}

// view single book
export const viewBookAPI = async (id) => {
    return await ApiService("GET", `/view-book/${id}`,{})
}

// buy book
export const buyBookAPI = async (id) => {
    return await ApiService("PUT", `/books/${id}/buy`,{})
}

// edit admin API from settings component
export const adminUpdateAPI = async (adminId,adminData) => {
    return await ApiService("PUT", `/admin/${adminId}`, adminData)
}

export const UserListAPI = async () => {
    return await ApiService("GET", `/user-list`,{})
}

export const editBookStatusAPI = async (id) => {
    return await ApiService("PUT", `/books/${id}`,{})
}

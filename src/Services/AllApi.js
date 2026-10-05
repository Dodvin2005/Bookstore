    import ApiService from "../Api/ApiService";

    // register : auth component when click register button
    export const registerAPI = async(userData)=>{
        return await ApiService("POST","/register",userData)
    }

    // login
 export const loginAPI = async(userData)=>{
        return await ApiService("POST","/login",userData)
    }

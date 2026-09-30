    import ApiService from "../Api/ApiService";

    // register : auth component when click register button
    export const registerAPI = async(userData)=>{
        return await ApiService("POST","/register",userData)
    }
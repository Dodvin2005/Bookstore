import axios from "axios";

const AxiosInstance = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 5000
})

// response interceptors :handling global error
AxiosInstance.interceptors.response.use(
    (response) => {
        console.log("Response recieved!!");
        return response
    },
    (error) => {
        if (error.response) {
            const status = error.response.status
            if (status == 401) {
                console.log("unauthorised access");

            } else if (status == 404) {
                console.log("API not found");

            } else if (status == 500) {
                console.log("server error");
            } else if (error.request) {
                console.log("No response from server");
                return error.request.response 
            } else {
                console.log(`Error: ${error.message}`);

            }
            return Promise.reject(error)

        }
    }

)
export default AxiosInstance
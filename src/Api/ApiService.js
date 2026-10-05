import AxiosInstance from "./AxiosInstance";

const ApiService = async(httpMethod,url,reqBody,reqHeader)=>{
    const reqConfig = {
        method:httpMethod,
        url,
        data:reqBody,
        headers:reqHeader
    }
    try{
        const response = await AxiosInstance(reqConfig)
        return response
    }catch(err){
        return err
    }
}
export default ApiService
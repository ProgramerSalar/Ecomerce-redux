import axios from "axios";
import { server } from "../store";





export const getAllProducts = () => async(dispatch) => {

    try{

        dispatch({
            type:"getAllProductRequest",
        })

        const {data} = await axios.get(
            `${server}/products/all`,
            {
                withCredentials:true
            }
        )
        // console.log(data)

        dispatch({
            type:"getAllProductSuccess",
            payload:data.products
        })
        


    }catch(error){
        dispatch({
            type:"getAllProductFail",
            payload:error.response.data.message
        })
    }
}
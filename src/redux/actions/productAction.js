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



export const getProductDetails = (id) => async(dispatch) => {

    try{
        dispatch({
            type:"getProductDetailsRequest",
        })

        const {data} = await axios.get(
            `${server}/products/single/${id}`,
            {
                withCredentials:true
            }
        )
        console.log("product details Data", data)

        dispatch({
            type:"getProductDetailsSuccess",
            payload: data.product
        })

    }catch(error){
        dispatch({
            type:"getProductDetailsFail",
            payload: error.response.data.message
        })
    }
}




export const getAdminProducts = () => async(dispatch) => {

    try{
        dispatch({
            type:"getAdminProductRequest"
        })


        const {data} = await axios.get(`${server}/products/admin`, {
            withCredentials:true
        })

        dispatch({
            type:"getAdminProductSuccess",
            payload:data,
        })

    }catch(error){
        dispatch({
            type:"getProductDetailsFail",
            payload: error.response.data.message
        })
    }

}
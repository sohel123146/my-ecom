// create Context
// Provider
// consumer => useCOntext Hook

import { createContext, useContext, useEffect } from "react";
import axios from "axios";

const ProductContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const ProductContextProvider = ({children}) =>{

    const getProducts = async (url) =>{
        const res = await axios.get(url)
        const products = await res.data;
        console.log(products)
    }


    useEffect(() => {
      getProducts(API)
    }, [])
    

    return <ProductContext.Provider value={{myName : "mohammad sohel Baig"}}>
        {children}
    </ProductContext.Provider>
}

// custom hook

const useProductContext = () =>{
    return useContext(ProductContext)
}

export { ProductContextProvider,ProductContext,useProductContext }
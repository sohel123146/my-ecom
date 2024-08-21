const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_API_DATA":
      const featureProducts = action.payload.filter((currEle) => {
        return currEle.featured === true;
      });

      return {
        ...state,
        isLoading: false,
        products: action.payload, //setting data into products
        featureProducts: featureProducts, //setting only products that has are fetured
      };

    case "SET_ERROR":
      return {
        ...state,
        isLoding: false,
        isError: true,
      };

    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };

    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };

    case "SET_SINGLE_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default productReducer;

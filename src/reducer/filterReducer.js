const filterReducer = (state, action) => {


  switch (action.type) {


    case "LOAD_FILTER_PRODUCTS":
        return {
            ...state,
            filter_products:[...action.payload],  //we are not using original products here copy of those original products
            all_products:[...action.payload],
        }

    case "SET_GRID_VIEW":
        return{
            ...state,
            grid_view:true,
        }




    default:
      return state;
  }
};

export default filterReducer;

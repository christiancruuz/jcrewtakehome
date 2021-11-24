import axios from 'axios';

export const getProducts = () => dispatch => {
    dispatch(setProductsLoading());
    axios
        .get('/products')
        .then(res => {
            dispatch({
                type: 'GET_PRODUCTS',
                payload: res.data.productList[0].products
            });
        })
        .catch(error => {
            dispatch({
                type: 'GET_ERRORS',
                payload: 'something went wrong.'
            })
        });
}

export const getProduct = (product) => dispatch => {
  dispatch(setProductsLoading());
  dispatch({
    type: 'GET_PRODUCT',
    payload: product
});
}

export const setProductsLoading = () => {
    return {
      type: 'DESIGN_LOADING'
    };
  };
  
  export const clearErrors = () => {
    return {
      type: 'CLEAR_ERRORS'
    };
  };